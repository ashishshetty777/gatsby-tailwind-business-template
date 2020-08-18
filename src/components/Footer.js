import React from 'react';
import { Link } from 'gatsby';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="border-t-2 border-secondary-dark">
      <div className="container mx-auto px-8">
        <div className="w-full flex flex-col sm:flex-row sm:items-center py-6">
          <Logo />
          <Link
            to="/"
            className="text-primary-200 hover:text-primary-900 hover:underline sm:ml-10"
          >
            Terms
          </Link>
          <Link
            to="/"
            className="text-primary-200 hover:text-primary-900 hover:underline sm:ml-10"
          >
            Privacy
          </Link>
          <div className="flex-1 mb-6"></div>
        </div>
      </div>
    </footer>
  );
}
