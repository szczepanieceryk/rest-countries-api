import React from 'react';
const CountryDetails = () => {
  return (
    <div className="p-6 md:p-[4rem] max-w-7xl mx-auto">
      <button className="mt-3 mb-6 md:mb-12 py-2 px-6 bg-gray-700 text-white rounded-md">
        <i className="fas fa-arrow-left mr-2"></i>
        <span>Back</span>
      </button>
      <div className="flex flex-wrap py-4 md:justify-between">
        <img
          src=""
          alt=""
          className="mb-[3em] md:mb-0 w-full max-w-[500px] h-[200px] md:h-[300px] mx-auto md:mx-0 bg-[#ddd]"
        />
        <div className="basis-full md:basis-1/2 md:flex flex-wrap">
          <span className="mb-5 block basis-full">
            {' '}
            <span className="text-2xl font-semibold">Belgium</span>
          </span>
          <div className="basis-full md:basis-1/2">
            <span className="block mb-2">
              <span className="font-semibold">Native Name:</span> België
            </span>
            <span className="block mb-2">
              <span className="font-semibold">Population:</span> 11,589,623
            </span>
            <span className="block mb-2">
              <span className="font-semibold">Region:</span> Europe
            </span>
            <span className="block mb-2">
              <span className="font-semibold">Subregion:</span> Western Europe
            </span>
            <span className="block mb-2">
              <span className="font-semibold">Capital:</span> Brussels
            </span>
          </div>

          <div className="mt-8 md:mt-0 basis-full md:basis-1/2">
            <span className="block mb-2">
              <span className="font-semibold">Top Level Domain:</span> .be
            </span>
            <span className="block mb-2">
              <span className="font-semibold">Currency:</span> Euro
            </span>
            <span className="block mb-2">
              <span className="font-semibold">Language:</span> Dutch, French, German
            </span>
          </div>

          <div className="mt-8 basis-full md:basis-none md:flex md:flex-wrap md:items-center">
            <span className="block md:mr-2 mt-3">
              <strong>Border Countries:</strong>{' '}
            </span>
            <div className="mt-4 flex flex-wrap justify-start gap-3">
              <button className="py-3 md:py-1 px-4 bg-gray-700 text-white rounded-md">
                Country 1
              </button>
              <button className="py-3 md:py-1 px-4 bg-gray-700 text-white rounded-md">
                Country 2
              </button>
              <button className="py-3 md:py-1 px-4 bg-gray-700 text-white rounded-md">
                Country 3
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
