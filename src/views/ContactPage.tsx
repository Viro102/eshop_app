import Button from "../components/Button";
import InputForm from "../components/InputForm";

export default function ContactPage() {
  return (
    <section className="m-20">
      <div className="flex justify-center">
        <div className="text-center md:max-w-xl lg:max-w-3xl">
          <h2 className="mb-12 whitespace-nowrap px-6 py-3 text-3xl font-bold text-gray-900 dark:text-white">
            Contact us
          </h2>
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
          <form>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <InputForm
                name="name"
                label="Name"
                type="text"
                placeholder="Name"
                htmlFor="name"
                onChange={() => {}}
                value=""
              />
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <InputForm
                name="email"
                label="Email"
                type="email"
                placeholder="Email"
                htmlFor="email"
                onChange={() => {}}
                value=""
              />
            </div>

            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-black placeholder-gray-400 shadow transition-all focus:outline-none focus:ring"
              placeholder="Write your thoughts here..."
            />
            <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex"></div>
            <Button onClick={() => {}} className="w-full">
              Send Message
            </Button>
          </form>
        </div>
        <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
              <div className="flex items-start">
                <div className="shrink-0">
                  <div className="inline-block rounded-md p-4 text-gray-900 dark:text-white">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                </div>
                <div className="ml-6 grow">
                  <p className="mb-2 font-bold text-gray-900 dark:text-white">Technical support</p>
                  <p className="text-gray-900 dark:text-white">support@example.com</p>
                  <p className="text-gray-900 dark:text-white">+1 234-567-89</p>
                </div>
              </div>
            </div>
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
              <div className="flex items-start">
                <div className="shrink-0">
                  <div className="inline-block rounded-md p-4 text-gray-900 dark:text-white">
                    <i className="fa-solid fa-money-bills"></i>
                  </div>
                </div>
                <div className="ml-6 grow">
                  <p className="mb-2 font-bold text-gray-900 dark:text-white">Sales questions</p>
                  <p className="text-gray-900 dark:text-white">sales@example.com</p>
                  <p className="text-gray-900 dark:text-white">+1 234-567-89</p>
                </div>
              </div>
            </div>
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
              <div className="align-start flex">
                <div className="shrink-0">
                  <div className="inline-block rounded-md p-4 text-gray-900 dark:text-white">
                    <i className="fa-solid fa-newspaper"></i>
                  </div>
                </div>
                <div className="ml-6 grow">
                  <p className="mb-2 font-bold text-gray-900 dark:text-white">Press</p>
                  <p className="text-gray-900 dark:text-white">press@example.com</p>
                  <p className="text-gray-900 dark:text-white">+1 234-567-89</p>
                </div>
              </div>
            </div>
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
              <div className="align-start flex">
                <div className="shrink-0">
                  <div className="inline-block rounded-md p-4 text-gray-900 dark:text-white ">
                    <i className="fa-solid fa-bug"></i>
                  </div>
                </div>
                <div className="ml-6 grow">
                  <p className="mb-2 font-bold text-gray-900 dark:text-white">Bug report</p>
                  <p className="text-gray-900 dark:text-white">bugs@example.com</p>
                  <p className="text-gray-900 dark:text-white">+1 234-567-89</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
