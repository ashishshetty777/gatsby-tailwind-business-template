import React from 'react';
import { Link } from 'gatsby';

export default function Logo() {
  return (
    <div>
      <Link
        to="/"
        alt="Home Icon"
        className="text-4xl text-primary-900 font-extrabold"
      >
        template
      </Link>
    </div>
  );
}
