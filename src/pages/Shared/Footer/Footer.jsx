import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center">
                <img
                  src="/deebo-white-text.png"
                  className="h-20 me-3 "
                  alt="Deebo Logo"
                />
              </Link>

              <p className="my-10 text-white text-2xl font-semibold">
                Stay informed about everything new?
              </p>

              {/* Search input */}

              <form>
                <div className="relative">
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full  h-20 p-4 ps-10 text-sm text-white border-0 border-b-4 rounded-lg bg-black focus:border-b-white focus:border-none  dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:border-b-none "
                    placeholder="Enter your email"
                    required
                  />
                  <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-white sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="absolute inset-y-0  end-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-10 h-10 text-white dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                </div>
              </form>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                  SOCIALS
                </h2>
                <ul className="text-white dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://instagram.com/"
                      className="hover:underline"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="https://facebook.com/" className="hover:underline">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" className="hover:underline">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/" className="hover:underline">
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a href="https://snapchat.com/" className="hover:underline">
                      Snapchat
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-white sm:text-center dark:text-gray-400">
              © 2023 Deebo! | Site Built by Adubi Timmy | Adubi Emmanuel
            </span>
            <div className="flex gap-4 mt-4 sm:justify-center sm:mt-0">
              <Link
                to="/contact"
                className="text-white hover:text-gray-200 dark:hover:text-white"
              >
                Contact us
              </Link>
              <Link
                to="/faqs"
                className="text-white hover:text-gray-200 dark:hover:text-white"
              >
                FAQ's
              </Link>
            </div>
            <div className="flex gap-4 mt-4 sm:justify-center sm:mt-0">
              <Link
                to="/contact"
                className="text-white hover:text-gray-200 dark:hover:text-white"
              >
                Contact
              </Link>
              <Link
                to="/privacy"
                className="text-white hover:text-gray-200 dark:hover:text-white"
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                className="text-white hover:text-gray-200 dark:hover:text-white"
              >
                Terms
              </Link>
            
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
