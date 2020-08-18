import React from 'react';

export default function ProductShowCase() {
  return (
    <div className="mx-auto">
      <img src="/images/wave.svg" alt="Upper Wave" className="block" />
      <div className="p-6 bg-secondary-light sm:pt-0">
        <h1 className="text-2xl m-0 text-primary-900 font-medium text-center tracking-wide sm:text-5xl sm:pt-0">
          Elementum eu facilisis sed odio.
        </h1>
        <div>
          <article className="w-auto mt-2 mb-4 sm:container sm:mb-12 sm:mx-auto sm:flex sm:flex-col sm:items-center sm:justify-center">
            <h4 className="text-xl py-2 my-2 text-secondary-dark text-center font-medium tracking-wide sm:text-3xl">
              Quam id leo in vitae
            </h4>
            <h1 className="text-primary-700 text-center font-medium tracking-wide mb-8 sm:hidden">
              Mauris sit amet massa.
            </h1>
            <div className="sm:flex">
              <img
                className="sm:w-1/2 h-64"
                src="images/undraw_online_transactions_02ka.svg"
                alt="Mock alt added. Needs to be replaced or changed."
              />
              <div className="hidden sm:block sm:p-12">
                <h1 className="sm:text-3xl sm:mb-4 sm:text-primary-900 font-medium tracking-wide">
                  Mauris sit amet massa.
                </h1>
                <h3 className="sm:text-xl sm:mb-4 sm:text-primary-800 sm:font-medium sm:tracking-wide">
                  At imperdiet dui accumsan sit amet. Tellus in hac habitasse
                  platea. Sollicitudin ac orci phasellus egestas tellus rutrum.
                  Aliquam nulla facilisi cras fermentum odio eu feugiat
                  pretium.Mauris sit amet massa vitae tortor condimentum lacinia
                  quis. Mi eget mauris pharetra et ultrices neque.
                </h3>
              </div>
            </div>
          </article>
          <article className="w-auto mt-2 mb-4 sm:container sm:mb-12 sm:mx-auto sm:flex sm:flex-col sm:items-center sm:justify-center">
            <h4 className="text-xl py-2 my-2 text-secondary-dark text-center font-medium tracking-wide sm:text-3xl">
              Phasellus faucibus scelerisque
            </h4>
            <h1 className="text-primary-700 text-center font-medium tracking-wide mb-8 sm:hidden">
              Suspendisse ultrices gravida dictum fusce ut placerat orci nulla.
            </h1>

            <div className="sm:flex">
              <div className="hidden sm:block sm:p-12">
                <h1 className="sm:text-3xl sm:mb-4 sm:text-primary-900 font-medium tracking-wide">
                  Suspendisse ultrices gravida dictum fusce ut placerat orci
                  nulla.
                </h1>
                <h3 className="sm:text-xl sm:mb-4 sm:text-primary-800 sm:font-medium sm:tracking-wide">
                  Eget gravida cum sociis natoque penatibus et magnis dis
                  parturient. At in tellus integer feugiat scelerisque varius
                  morbi enim.
                </h3>
              </div>
              <img
                className="sm:w-1/2 h-64"
                src="images/undraw_charts_jj6t.svg"
                alt="Mock alt added. Needs to be replaced or changed."
              />
            </div>
          </article>
        </div>
      </div>
      <img src="/images/wave3.svg" alt="Lower Wave" className=" block" />
    </div>
  );
}
