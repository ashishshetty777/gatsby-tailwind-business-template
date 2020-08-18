import React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/SEO';

export default function NotFoundPage() {
  return (
    <div className="container mx-auto h-screen p-6 flex justify-center items-center">
      <SEO title="404: Not Found" />
      <h2 className="text-3xl mb-4 text-primary-900 font-semibold tracking-wide sm:text-4xl">
        This page does not exists. Return back to{' '}
        <Link
          className="text-secondary-dark border-b-2 p-1 border-secondary-dark"
          to="/"
        >
          Home
        </Link>
      </h2>
    </div>
  );
}
