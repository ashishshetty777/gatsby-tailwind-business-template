import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function ContactPage() {
  return (
    <Layout>
      <SEO
        title="Contact Us"
        keywords={[
          `business`,
          `gatsby`,
          `tailwind`,
          `tailwindcss`,
          `javascript`,
          `react`,
          `ashish`,
        ]}
      />
      <div className="container mx-auto p-6 flex flex-col">
        <h2 className="text-3xl mb-4 text-primary-900 font-semibold tracking-wide sm:text-4xl">
          Contact Us
        </h2>
        <div className="flex justify-center m-8">
          <img
            className="w-auto sm:max-w-xl"
            src="images/undraw_contact_us_15o2.svg"
            alt="Two people using different modes of communication"
          />
        </div>
        <div className="flex flex-col items-center pt-8">
          <h2 className="text-lg mb-4 text-primary-200 font-medium tracking-wide sm:text-2xl">
            Molestie nunc non blandit massa enim. Non consectetur a erat nam at
            lectus.
          </h2>
          <div className="flex justify-center">
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
        <div className="flex flex-col items-center p-8">
          <h2 className="text-xl mb-4 text-primary-900 font-medium tracking-wide sm:text-3xl">
            Address
          </h2>
          <div className="flex flex-col my-4 justify-center sm:flex-row">
            <div className="text-md mb-8 text-primary-200 font-medium tracking-wide w-64 sm:text-xl sm:mb:4">
              <p>
                Molestie nunc, non blandit massa, enim, Non consectetur a erat
                nam at lectus.
              </p>
              <p className="text-secondary-dark">(+1) 000-000-0000</p>
            </div>
            <div className="text-md text-primary-200 font-medium tracking-wide w-64 sm:text-xl sm:ml-12 sm:mb:4">
              <p>
                Molestie nunc, non blandit massa, enim, Non consectetur a erat
                nam at lectus.
              </p>
              <p className="text-secondary-dark">(+91) 000-000-0000</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
