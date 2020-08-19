import React from 'react';
import Image from 'gatsby-image';
import Layout from '../components/Layout';
import { graphql, useStaticQuery } from 'gatsby';

export default function ServicesPage() {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "Ashish.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <div className="container mx-auto p-6 flex flex-col">
        <h1 className="text-xl mb-4 text-primary-900 font-semibold tracking-wide sm:text-2xl">
          This section was to show how Gatsby optimizes images as per device
          resolutions. You can refer to this page if you want to upload any
          images in your application.
        </h1>
        <h1 className="text-xl my-4 mb-8 text-primary-900 font-semibold tracking-wide sm:text-2xl">
          Plugins`gatsby-transformer-sharp` and `gatsby-plugin-sharp` helped
          achieved this feature. These plugins along with `gatsby-image` makes
          working with images a breeze in Gatsby.
        </h1>
        <Image
          fluid={image.sharp.fluid}
          fadeIn="soft"
          alt="Its me"
          className="w-1/2 h-auto mx-auto"
        ></Image>
        <h1 className="text-xl mt-8 mb-4 text-primary-900 font-semibold tracking-wide sm:text-2xl">
          The original image is of 13.5MB. But with the transformations, gatsby
          optimizes the image under 200KB. And another feature is you can out
          fade in images till the whole image loads giving it nice transition
          effect.
        </h1>
      </div>
    </Layout>
  );
}
