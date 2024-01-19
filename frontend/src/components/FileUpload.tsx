import { useState } from "react";
import Button from "./Button";
import Label from "./Label";

export default function FileUpload() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFiles([...selectedFiles, ...Array.from(event.target.files)]);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const refreshFiles = () => {
    setSelectedFiles([]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append("files", file);
    });

    try {
      const response = await fetch("http://localhost:3000/api/upload", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Failed to upload files");
      }
      alert("Files uploaded successfully");
      refreshFiles();
    } catch (error) {
      if (error instanceof Error) {
        alert("Error uploading files: " + error.message);
      }
    }
  };

  return (
    <div className="my-3 flex h-full max-w-6xl flex-col rounded-md bg-white text-gray-900 dark:bg-gray-600 dark:text-white sm:px-4 sm:py-4 md:px-8">
      <section
        className="flex h-full w-full flex-col  p-4"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={() => console.log("dragLeave")}
        onDragEnter={() => console.log("dragEnter")}
      >
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-400 py-12">
          <p className="mb-3 flex flex-wrap justify-center font-semibold text-gray-900">
            <span>Drag and drop your pictures here or click below</span>
          </p>
          <Label htmlFor="fileInput">Upload picture</Label>
          <input
            id="fileInput"
            type="file"
            className="hidden"
            accept=".jpg, .jpeg, .png"
            onChange={handleFileChange}
            multiple
          />
        </div>

        <h1 className="pb-3 pt-8 font-semibold sm:text-lg">To Upload</h1>
        <ul id="gallery" className="-m-1 flex flex-1 flex-wrap">
          {selectedFiles.map((file, index) => (
            <li
              key={index}
              className="flex h-full w-full flex-col items-center justify-center text-center"
            >
              <p>{file.name}</p>
              <p>({Math.round(file.size / 2 ** 10) + "KiB"})</p>
            </li>
          ))}
        </ul>
      </section>

      <div className="my-2 flex justify-center gap-2 py-3">
        <Button onClick={handleUpload}>Upload</Button>
        <Button onClick={() => setSelectedFiles([])}>Clear</Button>
      </div>
    </div>
  );
}
