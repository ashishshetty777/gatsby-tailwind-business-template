import React from 'react';

export function Hero() {
  return (
    <div className="container mx-auto p-6 mb-8 flex">
      <img
        src="/images/undraw_setup_analytics_8qkl.svg"
        alt="Mock alt added. Needs to be replaced or changed."
        className="hidden sm:block sm:w-1/2"
      />
      <div className="sm:ml-4 sm:p-4 sm:w-1/2">
        <h1 className="text-3xl mb-4 text-primary-900 font-semibold tracking-wide sm:text-4xl">
          Lorem ipsum dolor sit amet.
        </h1>
        <h3 className="text-lg mb-4 text-primary-200 font-medium tracking-wide sm:text-2xl">
          Urna condimentum mattis pellentesque id nibh tortor id aliquet lectus.
          Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper
          dignissim. Eu nisl nunc mi ipsum faucibus vitae aliquet.
        </h3>
        <div className="flex items-start">
          <input
            type="text"
            placeholder="Enter Email Address"
            className="border-2 border-primary-100 rounded-md w-3/5 p-2 my-2"
          />
          <button className="ml-2 text-white w-2/5 max-w-xs bg-secondary-dark border-2 rounded-md p-2 my-2">
            Let's Connect
          </button>
        </div>
      </div>
    </div>
  );
}
