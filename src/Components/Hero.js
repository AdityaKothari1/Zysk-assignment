import { PlayCircleIcon } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <main className="md:px-20">
      <section className="flex flex-col items-center justify-center h-full">
        <div className="max-w-2xl w-full flex-col justify-start items-center gap-6 flex">
          <div className="self-stretch flex-col justify-start items-center gap-4 flex">
            <div className="pl-1 pr-2.5 py-1 mix-blend-multiply bg-[#f9f5ff] rounded-2xl border border-[#e9d7fe] justify-start items-center gap-3 inline-flex">
              <div className="px-2.5 py-0.5 bg-white rounded-2xl border border-[#d6bbfb] justify-start items-center flex">
                <div className="text-center text-[#6840c6] text-sm font-medium font-['Inter'] leading-tight">
                  New feature
                </div>
              </div>
              <div className="justify-start items-center gap-1 flex">
                <div className="text-[#6840c6] text-sm font-medium font-['Inter'] leading-tight">
                  Check out the team dashboard
                </div>
                <div className="w-4 h-4 relative" />
              </div>
            </div>
            <div className=" text-center text-[#0f1728] text-3xl md:text-4xl font-semibold font-['Inter']">
              Beautiful analytics to grow smarter
            </div>
          </div>
          <div className="w-full text-center text-[#475466] text-base md:text-lg font-normal font-['Inter'] leading-loose">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </div>
        </div>
        <div className="justify-center gap-3 flex flex-col md:flex-row mt-6 items-center w-full px-4">
          <div className="px-7 py-4 bg-white rounded-lg shadow border border-[#cfd4dc] justify-center items-center gap-3 flex  max-md:w-full">
            <div className="flex items-center gap-x-2">
              <PlayCircleIcon />
              <div className="text-[#344053] text-lg font-semibold font-['Inter'] leading-7 w-full">
                Demo
              </div>
            </div>
          </div>
          <div className="px-7 py-4 bg-[#7e56d8] rounded-lg shadow border border-[#7e56d8] justify-center items-center gap-3 flex max-md:w-full">
            <div className="text-white text-lg font-semibold font-['Inter'] leading-7">
              Sign up
            </div>
          </div>
        </div>
      </section>

      <div>
        <img className="max-md:hidden" src="./assets/Container.png" />
        <img className="md:hidden" src="./assets/Container-mb.png" />
      </div>
    </main>
  );
};

export default Hero;
