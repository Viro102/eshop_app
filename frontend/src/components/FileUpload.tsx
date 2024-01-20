import { useEffect, useState } from "react";
import { upload } from "../api";
import Button from "./Button";
import Label from "./Label";

type FileWithPreview = {
  file: File;
  preview: string;
};

export default function FileUpload() {
  const [selectedFiles, setSelectedFiles] = useState<FileWithPreview[]>([]);

  useEffect(() => {
    return () => {
      selectedFiles.forEach((fileWithPreview) => {
        URL.revokeObjectURL(fileWithPreview.preview);
      });
    };
  }, [selectedFiles]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesWithPreview: FileWithPreview[] = Array.from(event.target.files).map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));
      setSelectedFiles((prevFiles) => [...prevFiles, ...filesWithPreview]);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const filesWithPreview: FileWithPreview[] = Array.from(event.dataTransfer.files).map(
      (file) => ({
        file,
        preview: URL.createObjectURL(file),
      }),
    );
    setSelectedFiles((prevFiles) => [...prevFiles, ...filesWithPreview]);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const refreshFiles = () => {
    selectedFiles.forEach((fileWithPreview) => {
      URL.revokeObjectURL(fileWithPreview.preview);
    });

    setSelectedFiles([]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    selectedFiles.forEach((fileWithPreview) => {
      formData.append("files", fileWithPreview.file);
    });

    try {
      await upload(formData);
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
        className="flex h-full w-full flex-col p-4"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-400 py-12">
          {selectedFiles.length === 0 && (
            <>
              <p className="mb-3 flex flex-wrap justify-center font-semibold text-gray-900">
                <span>Drag and drop your pictures here or click below</span>
              </p>
              <Label htmlFor="fileInput">Upload a picture</Label>
            </>
          )}

          <input
            id="fileInput"
            type="file"
            className="hidden"
            accept=".jpg, .jpeg, .png"
            onChange={handleFileChange}
            multiple
          />

          <ul id="gallery" className="-m-1 flex flex-row flex-wrap">
            {selectedFiles.map((fileObj, index) => (
              <li key={index} className="flex flex-col items-center justify-center p-2 text-center">
                <img
                  src={fileObj.preview}
                  alt="Preview"
                  style={{ width: "100px", height: "100px", objectFit: "contain" }}
                />
                <p>{fileObj.file.name}</p>
              </li>
            ))}
          </ul>
        </div>
        {selectedFiles.length > 0 && (
          <Label htmlFor="fileInput" className="mt-2 text-center">
            Upload more pictures
          </Label>
        )}
      </section>

      <div className="my-2 flex justify-center gap-2 py-3">
        <Button onClick={handleUpload}>Upload</Button>
        <Button onClick={() => setSelectedFiles([])}>Clear</Button>
      </div>
    </div>
  );
}
