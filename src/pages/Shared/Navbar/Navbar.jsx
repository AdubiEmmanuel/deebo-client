import { Link } from "react-router-dom";
import Logo from "/deebo-logo.png";

const NavbarSample = () => {
  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 sticky w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/">
            <img className="h-8 w-auto" src={Logo} alt="Deebo Company Logo" />
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link
              to="/login"
              className="bg-transparent hover:bg-black duration-300 mx-2 text-black font-semibold hover:text-white duration-300 py-2 px-4 border border-black  hover:border-transparent rounded"
            >
              Login
            </Link>
            <Link
              to="signup"
              className="bg-black hover:bg-transparent hover:text-black hover:border hover:border-black duration-300 text-white font-bold py-2 px-4 rounded"
            >
              Get Started
            </Link>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="text-black hover:border-b-4 duration-300 hover:text-black rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/voting"
                  className="text-black hover:border-b-4 duration-300 hover:text-black rounded-md px-3 py-2 text-sm font-medium"
                >
                  Voting
                </Link>
              </li>
              <li>
                <Link
                  to="/polls"
                  className="text-black hover:border-b-4 duration-300 hover:text-black rounded-md px-3 py-2 text-sm font-medium"
                >
                  Create Polls
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-black hover:border-b-4 duration-300 hover:text-black rounded-md px-3 py-2 text-sm font-medium"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/forms"
                  className="text-black hover:border-b-4 duration-300 hover:text-black rounded-md px-3 py-2 text-sm font-medium"
                >
                  Forms
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarSample;
