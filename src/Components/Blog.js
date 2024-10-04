import { ArrowUpRight } from "lucide-react";
import React from "react";

const Blog = () => {
  return (
    <main className="px-5 md:px-24">
      <div className="flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/2">
          <div className="flex-col justify-start items-start space-y-2">
            <div className="text-[#6840c6] text-base font-semibold font-['Inter'] leading-normal">
              Our blog
            </div>
            <div className="text-[#0f1728] text-3xl md:text-4xl font-semibold font-['Inter'] leading-10">
              Latest blog posts
            </div>
            <div className="text-[#475466] text-lg md:text-xl font-normal font-['Inter'] leading-loose">
              Tools and strategies modern teams need to help their companies
              grow.
            </div>
          </div>
        </div>

        <button className="flex justify-center items-center gap-3 mt-4 md:mt-0 max-md:hidden px-5 py-3 bg-[#7e56d8] rounded-lg shadow border border-[#7e56d8]">
          <span className="text-white text-base font-semibold font-['Inter'] leading-normal">
            View all posts
          </span>
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-y-16 gap-4  mt-10">
        <div className="flex flex-col gap-6">
          <img
            className="h-60 object-contain"
            src="./assets/design.png"
            alt="Blog Post"
          />
          <div className="h-44 flex flex-col gap-2">
            <span className="text-[#6840c6] text-sm font-semibold">Design</span>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <h2 className="text-[#0f1728] text-2xl font-semibold">
                  UX review presentations
                </h2>
                <ArrowUpRight />
              </div>
              <p className="text-[#475466] text-base font-normal">
                How do you create compelling presentations that wow your
                colleagues and impress your managers?
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="./assets/avatar.jpg"
                className="w-10 h-10 rounded-full border border-[#0f1728]"
              />
              <div className="flex flex-col">
                <span className="text-[#0f1728] text-sm font-semibold">
                  Olivia Rhye
                </span>
                <span className="text-[#475466] text-sm font-normal">
                  20 Jan 2024
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <img className="h-60" src="./assets/A-2.png" alt="Blog Post" />
          <div className="h-44 flex flex-col gap-2">
            <span className="text-[#6840c6] text-sm font-semibold">
              Product
            </span>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <h2 className="text-[#0f1728] text-2xl font-semibold">
                  Migrating to Linear 101
                </h2>
                <ArrowUpRight />
              </div>
              <p className="text-[#475466] text-base font-normal">
                Linear helps streamline software projects, sprints, tasks, and
                bug tracking. Here’s how to get started.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="./assets/avatar.jpg"
                className="w-10 h-10 rounded-full border border-[#0f1728]"
              />
              <div className="flex flex-col">
                <span className="text-[#0f1728] text-sm font-semibold">
                  Phoenix Baker
                </span>
                <span className="text-[#475466] text-sm font-normal">
                  19 Jan 2024
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <img className="h-60" src="./assets/A-3.png" alt="Blog Post" />
          <div className="h-44 flex flex-col gap-2">
            <span className="text-[#6840c6] text-sm font-semibold">
              Software Engineering
            </span>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <h2 className="text-[#0f1728] text-2xl font-semibold">
                  Building your API stack
                </h2>
                <ArrowUpRight />
              </div>
              <p className="text-[#475466] text-base font-normal">
                The rise of RESTful APIs has been met by a rise in tools for
                creating, testing, and managing them.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="./assets/avatar.jpg"
                className="w-10 h-10 rounded-full border border-[#0f1728]"
              />
              <div className="flex flex-col">
                <span className="text-[#0f1728] text-sm font-semibold">
                  Lana Steiner
                </span>
                <span className="text-[#475466] text-sm font-normal">
                  18 Jan 2024
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="flex justify-center items-center gap-3 mt-20 md:hidden px-5 py-3 bg-[#7e56d8] rounded-lg shadow border border-[#7e56d8] w-full">
        <span className="text-white text-base font-semibold font-['Inter'] leading-normal">
          View all posts
        </span>
      </button>
    </main>
  );
};

export default Blog;
