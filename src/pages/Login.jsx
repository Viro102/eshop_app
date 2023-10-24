import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Button from "../components/Button.jsx";

export default function Login() {
  return (
    <>
      <Header />
      <main>
        <section className="absolute h-full w-full">
          <div className="container mx-auto h-full px-4">
            <div className="flex h-full content-center items-center justify-center">
              <div className="w-full px-4 lg:w-4/12">
                <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg border-0 bg-gray-800 shadow-lg">
                  <div className="mb-0 rounded-t px-6 py-6">
                    <div className="mb-3 text-center">
                      <h6 className="text-sm font-bold text-gray-100">Sign in with</h6>
                    </div>
                    <div className="btn-wrapper text-center">
                      <Button
                        text={"Github"}
                        iconSrc={"/github.svg"}
                        alt={"Sign in using github"}
                      />
                      <Button
                        text={"Google"}
                        iconSrc={"/google.svg"}
                        alt={"Sign in using google"}
                      />
                    </div>
                    <hr className="border-b-1 mt-6 border-gray-400" />
                  </div>
                  <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
                    <div className="mb-3 text-center font-bold text-gray-100">
                      <small>Or sign in with credentials</small>
                    </div>
                    <form>
                      <div className="relative mb-3 w-full">
                        <label
                          className="mb-2 block text-xs font-bold uppercase text-gray-100"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-black placeholder-gray-400 shadow transition-all focus:outline-none focus:ring"
                          placeholder="Email"
                        />
                      </div>

                      <div className="relative mb-3 w-full">
                        <label
                          className="mb-2 block text-xs font-bold uppercase text-gray-100"
                          htmlFor="grid-password"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-black placeholder-gray-400 shadow transition-all focus:outline-none focus:ring"
                          placeholder="Password"
                        />
                      </div>
                      <div>
                        <label className="inline-flex cursor-pointer items-center">
                          <input
                            id="customCheckLogin"
                            type="checkbox"
                            className="form-checkbox ml-1 h-5 w-5 rounded border-0 text-gray-100"
                            style={{ transition: "all .15s ease" }}
                          />
                          <span className="ml-2 text-sm font-semibold text-gray-100">
                            Remember me
                          </span>
                        </label>
                      </div>

                      <div className="mt-6 text-center">
                        <button
                          className="mb-1 mr-1 w-full rounded bg-gray-900 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none hover:shadow-lg focus:outline-none active:bg-gray-700"
                          type="button"
                          style={{ transition: "all .15s ease" }}
                        >
                          Sign In
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap">
                  <div className="w-1/2">
                    <a href="#pablo" onClick={(e) => e.preventDefault()} className="text-gray-300">
                      <small>Forgot password?</small>
                    </a>
                  </div>
                  <div className="w-1/2 text-right">
                    <a href="#pablo" onClick={(e) => e.preventDefault()} className="text-gray-300">
                      <small>Create new account</small>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </section>
      </main>
    </>
  );
}
