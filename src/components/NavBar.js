import React from 'react';
import { Link } from 'gatsby';
import Logo from './Logo';

export default function NavBar() {
  let [isOpen, setNavbar] = React.useState(false);

  function toggleNavbar() {
    setNavbar(!isOpen);
  }
  return (
    <div className="container mx-auto p-4">
      <header className="relative sm:static sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
        <div className="flex items-center justify-between px-4 py-3 sm:p-0">
          <Logo />
          <div className="sm:hidden">
            <button
              type="button"
              className="border-solid border-b-2 border-secondary-dark text-secondary-dark focus:text-secondary-dark hover:text-secondary-dark focus:outline-none h-8 w-12"
              onClick={toggleNavbar}
            >
              {isOpen ? `Close` : `Menu`}
            </button>
          </div>
        </div>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } text-center px-4 pt-8 pb-8 border-solid border-2 border-secondary-dark rounded-md absolute w-full bg-white sm:w-auto sm:static sm:flex sm:p-0 sm:border-none sm:bg-transparent`}
        >
          <Link
            to="/"
            className="block px-2 py-1 text-primary-300 font-semibold rounded hover:text-primary-900 hover:bg-primary-050 hover:border-primary-800 hover:border-2"
          >
            Home
          </Link>
          <Link
            to="/"
            className="mt-1 block px-2 py-1 text-primary-400 font-semibold rounded hover:text-primary-900 hover:bg-primary-050 hover:border-primary-800 hover:border-2 sm:mt-0 sm:ml-6"
          >
            Services
          </Link>
          <Link
            to="/about"
            className="mt-1 block px-2 py-1 text-primary-400 font-semibold rounded hover:text-primary-900 hover:bg-primary-050 hover:border-primary-800 hover:border-2 sm:mt-0 sm:ml-6"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="mt-1 block px-2 py-1 text-primary-400 font-semibold rounded hover:text-primary-900 hover:bg-primary-050 hover:border-primary-800 hover:border-2 sm:mt-0 sm:ml-6"
          >
            Contact Us
          </Link>
        </div>
      </header>
    </div>
  );
}
