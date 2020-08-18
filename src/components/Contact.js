import React from 'react';

export default function ContactUs() {
  return (
    <div className="container mx-auto mb-8 px-2 flex flex-col justify-center items-center">
      <h2 className="text-2xl mb-2 text-primary-900 text-center font-bold tracking-wide">
        Vulputate mi sit amet mauris.
      </h2>
      <h3 className="text-xl mb-4 text-primary-200 text-center font-medium tracking-wide">
        Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat.
      </h3>
      <div className="flex items-start justify-center">
        <input
          type="text"
          placeholder="Enter Email Address"
          className="border-2 border-primary-100 rounded-md p-2 my-2"
        />
        <button className="ml-2 text-white bg-secondary-dark border-2 rounded-md p-2 my-2">
          Let's Connect
        </button>
      </div>
    </div>
  );
}
