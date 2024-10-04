import React from "react";

const Freetrial = () => {
  return (
    <main>
      <div className="bg-[#f8f9fb] rounded-2xl flex-col justify-start items-center gap-8 inline-flex w-full py-8">
        <div className="flex flex-col items-center gap-6 p-6 bg-[#f8f9fb] rounded-2xl">
          <div className="text-center">
            <div className="text-[#0f1728] text-2xl font-semibold leading-loose">
              Start your free trial
            </div>
            <div className="text-[#475466]  md:text-lg font-normal leading-7 max-w-md mx-auto">
              Join over 4,000+ startups already growing with Untitled.
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-3 w-full">
            <button className="h-12 px-5 py-3 bg-white rounded-lg shadow border border-[#cfd4dc] justify-center items-center gap-2 inline-flex max-md:w-full">
              Learn more
            </button>
            <button className="h-12 px-5 py-3 bg-[#7e56d8] rounded-lg shadow border border-[#7e56d8] justify-center items-center gap-2 inline-flex">
              <div className="text-white text-base font-semibold font-['Inter'] leading-normal">
                Get started
              </div>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Freetrial;
