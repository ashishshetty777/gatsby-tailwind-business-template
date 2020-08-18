import React from 'react';

export default function OtherServices() {
  return (
    <div className="container mx-auto p-6 flex mb-8 flex-col">
      <h2 className="text-3xl mb-4 text-primary-900 font-semibold tracking-wide sm:text-4xl">
        Other Services
      </h2>
      <h3 className="text-lg mb-4 text-primary-200 font-medium tracking-wide sm:text-2xl">
        Vestibulum lectus mauris ultrices eros in. Ut faucibus pulvinar
        elementum integer enim neque volutpat.
      </h3>
      <div className="flex flex-col sm:flex-row sm:items-start">
        <article className="w-auto bg-fourth-light flex flex-col items-center mt-2 mb-4 p-4 border-2 rounded-md border-fourth-dark sm:m-4 sm:w-1/3">
          <img
            className="h-64"
            alt="Mock alt added. Needs to be replaced or changed."
            src="images/undraw_design_components_9vy6.svg"
          />
          <h4 className="text-xl py-2 my-2 mb-8 text-primary-900 text-center font-medium tracking-wide">
            Suspendisse Development
          </h4>
        </article>
        <article className="w-auto flex flex-col items-center mt-2 mb-4 p-4 border-2 bg-third-light rounded-md border-third-dark sm:m-4 sm:w-1/3">
          <img
            className="h-64"
            alt="Mock alt added. Needs to be replaced or changed."
            src="images/undraw_server_cluster_jwwq.svg"
          />
          <h4 className="text-xl py-2 my-2 mb-8 text-primary-900 text-center font-medium tracking-wide">
            Vulputate Development
          </h4>
        </article>
        <article className="w-auto mt-2 mb-4 p-4 border-2 rounded-md border-secondary-dark bg-secondary-light sm:m-4 sm:w-1/3">
          <img
            className="h-64"
            alt="Mock alt added. Needs to be replaced or changed."
            src="images/undraw_progressive_app_m9ms.svg"
          />
          <h4 className="text-xl py-2 my-2 mb-8 text-primary-900 text-center font-medium tracking-wide">
            App Development
          </h4>
        </article>
      </div>
    </div>
  );
}
