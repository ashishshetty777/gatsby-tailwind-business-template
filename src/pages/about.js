import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function AboutPage() {
  return (
    <Layout>
      <SEO
        title="About Us"
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
          About Us
        </h2>
        <h3 className="text-lg mb-4 text-primary-200 font-medium tracking-wide sm:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. A
          scelerisque purus semper eget duis at tellus.
        </h3>
        <div className="flex justify-center m-8">
          <img
            className="w-auto sm:max-w-xl"
            alt="Three cartoon characters building something signifying team work"
            src="images/undraw_elements_cipa.svg"
          />
        </div>
        <h3 className="text-lg my-8 text-primary-200 font-medium tracking-wide text-center sm:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. A
          scelerisque purus semper eget duis at tellus.
          <a
            className="text-secondary-dark border-b-2 p-1 border-secondary-dark"
            href="mailto:hr@abc.com"
          >
            Email Us
          </a>
        </h3>
      </div>
    </Layout>
  );
}
