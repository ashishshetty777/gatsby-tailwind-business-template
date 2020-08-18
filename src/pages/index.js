import React from 'react';
import Layout from '../components/Layout';
import { Hero } from '../components/Hero';
import ProductShowCase from '../components/ProductShowcase';
import OtherServices from '../components/OtherServices';
import ContactUs from '../components/Contact';
import SEO from '../components/SEO';

export default () => {
  return (
    <Layout>
      <SEO
        title="Home"
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
      <div className="mx-auto">
        <Hero />
        <ProductShowCase />
        <OtherServices />
        <ContactUs />
      </div>
    </Layout>
  );
};
