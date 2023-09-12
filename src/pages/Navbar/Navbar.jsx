import Logo from "../../assets/deebo-logo.png"

import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <>
      <nav className="bg-white sticky top-0">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex gap-60  flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Link to="/">
                  <img
                    className="h-8 w-auto"
                    src={Logo}
                    alt="Deebo Company Logo"
                  />
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:block mx-auto items-center justify-center">
                <div className="flex space-x-4">
                  <Link
                    to="/"
                    className="text-black hover:border-b-4 hover:text-black rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    Home
                  </Link>
                  <Link
                    to="/voting"
                    className="text-black hover:border-b-4 hover:text-black rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Voting
                  </Link>
                  <Link
                    to="/polls"
                    className="text-black hover:border-b-4 hover:text-black rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Create Polls
                  </Link>
                  <Link
                    to="/pricing"
                    className="text-black hover:border-b-4 hover:text-black rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Pricing
                  </Link>
                  <Link
                    to="/forms"
                    className="text-black hover:border-b-4 hover:text-black rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Forms
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 mx-2 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Link
                to="/login"
                className="bg-transparent hover:bg-black mx-2 text-black font-semibold hover:text-white py-2 px-4 border border-black  hover:border-transparent rounded"
              >
                Login
              </Link>
              <Link
                to="signup"
                className="bg-black hover:bg-slate-600 text-white font-bold py-2 px-4 rounded"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar
