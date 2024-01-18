import Button from "./Button";
import Label from "./Label";

export default function FileUpload() {
  const handleUpload = () => {};
  return (
    <>
      <div
        className="my-3 flex h-full max-w-6xl flex-col rounded-md bg-white text-gray-900 dark:bg-gray-600 dark:text-white sm:px-4 sm:py-4 md:px-8"
        onDrop={() => {
          console.log("drop");
        }}
        onDragOver={() => {
          console.log("dragOver");
        }}
        onDragLeave={() => {
          console.log("dragLeave");
        }}
        onDragEnter={() => {
          console.log("dragEnter");
        }}
      >
        <section className="flex h-full w-full flex-col overflow-auto p-4">
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-400 py-12">
            <p className="mb-3 flex flex-wrap justify-center font-semibold text-gray-900">
              <span>Drag and drop your files anywhere</span>
            </p>
            <Label text="Upload file" htmlFor="fileInput" />
            <input id="fileInput" type="file" className="hidden" accept=".jpg, .jpeg, .png" />
          </div>

          <h1 className="pb-3 pt-8 font-semibold sm:text-lg">To Upload</h1>

          <ul id="gallery" className="-m-1 flex flex-1 flex-wrap">
            <li
              id="empty"
              className="flex h-full w-full flex-col items-center justify-center text-center"
            >
              <img
                className="mx-auto w-32"
                src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png"
                alt="no data"
              />
              <span className="text-small text-gray-500">No files selected</span>
            </li>
          </ul>
        </section>

        <div className="flex justify-center space-x-3 py-4">
          <Button onClick={handleUpload}>Upload now</Button>
          <Button onClick={handleUpload}>Cancel</Button>
        </div>
      </div>

      <template id="file-template">
        <li className="xl:w-1/8 block h-24 w-1/2 p-1 sm:w-1/3 md:w-1/4 lg:w-1/6">
          <article
            tabIndex={0}
            className="focus:shadow-outline group relative h-full w-full cursor-pointer rounded-md bg-gray-100 shadow-sm focus:outline-none"
          >
            <img
              alt="upload preview"
              className="img-preview sticky hidden h-full w-full rounded-md bg-fixed object-cover"
            />

            <section className="absolute top-0 z-20 flex h-full w-full flex-col break-words rounded-md px-3 py-2 text-xs">
              <h1 className="flex-1 group-hover:text-blue-800"></h1>
              <div className="flex">
                <span className="p-1 text-blue-800">
                  <i>
                    <svg
                      className="ml-auto h-4 w-4 fill-current pt-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M15 2v5h5v15h-16v-20h11zm1-2h-14v24h20v-18l-6-6z" />
                    </svg>
                  </i>
                </span>
                <p className="size p-1 text-xs text-gray-700"></p>
                <button className="delete ml-auto rounded-md p-1 text-gray-800 hover:bg-gray-300 focus:outline-none">
                  <svg
                    className="pointer-events-none ml-auto h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className="pointer-events-none"
                      d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z"
                    />
                  </svg>
                </button>
              </div>
            </section>
          </article>
        </li>
      </template>

      <template id="image-template">
        <li className="xl:w-1/8 block h-24 w-1/2 p-1 sm:w-1/3 md:w-1/4 lg:w-1/6">
          <article
            tabIndex={0}
            className="hasImage focus:shadow-outline group relative h-full w-full cursor-pointer rounded-md bg-gray-100 text-transparent shadow-sm hover:text-white focus:outline-none"
          >
            <img
              alt="upload preview"
              className="img-preview sticky h-full w-full rounded-md bg-fixed object-cover"
            />

            <section className="absolute top-0 z-20 flex h-full w-full flex-col break-words rounded-md px-3 py-2 text-xs">
              <h1 className="flex-1"></h1>
              <div className="flex">
                <span className="p-1">
                  <i>
                    <svg
                      className="ml-auto h-4 w-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5zm9 .5l-2.519 4-2.481-1.96-4 5.96h14l-5-8zm8-4v14h-20v-14h20zm2-2h-24v18h24v-18z" />
                    </svg>
                  </i>
                </span>

                <p className="size p-1 text-xs"></p>
                <button className="delete ml-auto rounded-md p-1 hover:bg-gray-300 focus:outline-none">
                  <svg
                    className="pointer-events-none ml-auto h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className="pointer-events-none"
                      d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z"
                    />
                  </svg>
                </button>
              </div>
            </section>
          </article>
        </li>
      </template>
    </>
  );
}
