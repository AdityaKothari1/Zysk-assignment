import { ArrowRight } from "lucide-react";
import React from "react";

const Analytics = () => {
  return (
    <main>
      <div className="flex flex-col items-center gap-4 px-3">
        <div className="px-4 py-2 bg-[#f9f5ff] rounded-2xl border border-[#e9d7fe] flex justify-center">
          <div className="text-center text-[#6840c6] text-base md:text-sm font-medium font-['Inter'] leading-tight">
            Features
          </div>
        </div>
        <div className="text-center text-[#0f1728] text-3xl md:text-4xl font-semibold font-['Inter'] leading-10">
          Cutting-edge features for advanced analytics
        </div>
        <div className="text-center text-[#475466] text-lg md:text-xl font-normal font-['Inter']  max-w-3xl">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </div>
      </div>
      <div className="w-[60%] mx-auto py-10 max-md:hidden">
        <img src="./assets/Assing.png" alt="analytics" />
      </div>
      <div className="py-10 md:hidden">
        <img className="pl-10" src="./assets/Assign-2.png" alt="analytics" />
      </div>
      <div className="grid  md:grid-cols-3 gap-x-10 gap-y-10 md:gap-y-16 px-2 md:px-24 mt-12">
        <div className="flex flex-col items-center">
          <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_633_2634)">
              <rect x="2" y="1" width="48" height="48" rx="10" fill="white" />
              <rect
                x="2.5"
                y="1.5"
                width="47"
                height="47"
                rx="9.5"
                stroke="#EAECF0"
              />
              <path
                d="M20.0944 24.2288C20.0322 23.8282 20 23.4179 20 23C20 18.5817 23.6052 15 28.0526 15C32.4999 15 36.1052 18.5817 36.1052 23C36.1052 23.9981 35.9213 24.9535 35.5852 25.8345C35.5154 26.0175 35.4804 26.109 35.4646 26.1804C35.4489 26.2512 35.4428 26.301 35.4411 26.3735C35.4394 26.4466 35.4493 26.5272 35.4692 26.6883L35.8717 29.9585C35.9153 30.3125 35.9371 30.4895 35.8782 30.6182C35.8266 30.731 35.735 30.8205 35.6211 30.8695C35.4911 30.9254 35.3146 30.8995 34.9617 30.8478L31.7765 30.3809C31.6101 30.3565 31.527 30.3443 31.4512 30.3448C31.3763 30.3452 31.3245 30.3507 31.2511 30.3661C31.177 30.3817 31.0823 30.4172 30.893 30.4881C30.0097 30.819 29.0524 31 28.0526 31C27.6344 31 27.2237 30.9683 26.8227 30.9073M21.6316 35C24.5965 35 27 32.5376 27 29.5C27 26.4624 24.5965 24 21.6316 24C18.6667 24 16.2632 26.4624 16.2632 29.5C16.2632 30.1106 16.3603 30.6979 16.5395 31.2467C16.6153 31.4787 16.6532 31.5947 16.6657 31.6739C16.6786 31.7567 16.6809 31.8031 16.6761 31.8867C16.6714 31.9668 16.6514 32.0573 16.6113 32.2383L16 35L18.9948 34.591C19.1583 34.5687 19.24 34.5575 19.3114 34.558C19.3865 34.5585 19.4264 34.5626 19.5001 34.5773C19.5701 34.5912 19.6742 34.6279 19.8823 34.7014C20.4306 34.8949 21.0191 35 21.6316 35Z"
                stroke="#344054"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_633_2634"
                x="0"
                y="0"
                width="52"
                height="52"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_633_2634"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_633_2634"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <h3 className="text-center text-[#0f1728] text-xl font-semibold font-['Inter'] leading-loose">
            Share team inboxes
          </h3>
          <p className="text-center text-[#475466] text-base font-normal font-['Inter'] leading-normal">
            Whether you have a team of 2 or 200, our shared team inboxes keep
            everyone on the same page and in the loop.
          </p>
          <button className="text-[#6840c6] text-base font-semibold font-['Inter'] leading-normal flex items-center gap-x-2 pt-5">
            Learn More
            <ArrowRight />
          </button>
        </div>
        <div className="flex flex-col items-center">
          <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_633_2634)">
              <rect x="2" y="1" width="48" height="48" rx="10" fill="white" />
              <rect
                x="2.5"
                y="1.5"
                width="47"
                height="47"
                rx="9.5"
                stroke="#EAECF0"
              />
              <path
                d="M20.0944 24.2288C20.0322 23.8282 20 23.4179 20 23C20 18.5817 23.6052 15 28.0526 15C32.4999 15 36.1052 18.5817 36.1052 23C36.1052 23.9981 35.9213 24.9535 35.5852 25.8345C35.5154 26.0175 35.4804 26.109 35.4646 26.1804C35.4489 26.2512 35.4428 26.301 35.4411 26.3735C35.4394 26.4466 35.4493 26.5272 35.4692 26.6883L35.8717 29.9585C35.9153 30.3125 35.9371 30.4895 35.8782 30.6182C35.8266 30.731 35.735 30.8205 35.6211 30.8695C35.4911 30.9254 35.3146 30.8995 34.9617 30.8478L31.7765 30.3809C31.6101 30.3565 31.527 30.3443 31.4512 30.3448C31.3763 30.3452 31.3245 30.3507 31.2511 30.3661C31.177 30.3817 31.0823 30.4172 30.893 30.4881C30.0097 30.819 29.0524 31 28.0526 31C27.6344 31 27.2237 30.9683 26.8227 30.9073M21.6316 35C24.5965 35 27 32.5376 27 29.5C27 26.4624 24.5965 24 21.6316 24C18.6667 24 16.2632 26.4624 16.2632 29.5C16.2632 30.1106 16.3603 30.6979 16.5395 31.2467C16.6153 31.4787 16.6532 31.5947 16.6657 31.6739C16.6786 31.7567 16.6809 31.8031 16.6761 31.8867C16.6714 31.9668 16.6514 32.0573 16.6113 32.2383L16 35L18.9948 34.591C19.1583 34.5687 19.24 34.5575 19.3114 34.558C19.3865 34.5585 19.4264 34.5626 19.5001 34.5773C19.5701 34.5912 19.6742 34.6279 19.8823 34.7014C20.4306 34.8949 21.0191 35 21.6316 35Z"
                stroke="#344054"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_633_2634"
                x="0"
                y="0"
                width="52"
                height="52"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_633_2634"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_633_2634"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <h3 className="text-center text-[#0f1728] text-xl font-semibold font-['Inter'] leading-loose">
            Share team inboxes
          </h3>
          <p className="text-center text-[#475466] text-base font-normal font-['Inter'] leading-normal">
            Whether you have a team of 2 or 200, our shared team inboxes keep
            everyone on the same page and in the loop.
          </p>
          <button className="text-[#6840c6] text-base font-semibold font-['Inter'] leading-normal flex items-center gap-x-2 pt-5">
            Learn More
            <ArrowRight />
          </button>
        </div>
        <div className="flex flex-col items-center">
          <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_633_2634)">
              <rect x="2" y="1" width="48" height="48" rx="10" fill="white" />
              <rect
                x="2.5"
                y="1.5"
                width="47"
                height="47"
                rx="9.5"
                stroke="#EAECF0"
              />
              <path
                d="M20.0944 24.2288C20.0322 23.8282 20 23.4179 20 23C20 18.5817 23.6052 15 28.0526 15C32.4999 15 36.1052 18.5817 36.1052 23C36.1052 23.9981 35.9213 24.9535 35.5852 25.8345C35.5154 26.0175 35.4804 26.109 35.4646 26.1804C35.4489 26.2512 35.4428 26.301 35.4411 26.3735C35.4394 26.4466 35.4493 26.5272 35.4692 26.6883L35.8717 29.9585C35.9153 30.3125 35.9371 30.4895 35.8782 30.6182C35.8266 30.731 35.735 30.8205 35.6211 30.8695C35.4911 30.9254 35.3146 30.8995 34.9617 30.8478L31.7765 30.3809C31.6101 30.3565 31.527 30.3443 31.4512 30.3448C31.3763 30.3452 31.3245 30.3507 31.2511 30.3661C31.177 30.3817 31.0823 30.4172 30.893 30.4881C30.0097 30.819 29.0524 31 28.0526 31C27.6344 31 27.2237 30.9683 26.8227 30.9073M21.6316 35C24.5965 35 27 32.5376 27 29.5C27 26.4624 24.5965 24 21.6316 24C18.6667 24 16.2632 26.4624 16.2632 29.5C16.2632 30.1106 16.3603 30.6979 16.5395 31.2467C16.6153 31.4787 16.6532 31.5947 16.6657 31.6739C16.6786 31.7567 16.6809 31.8031 16.6761 31.8867C16.6714 31.9668 16.6514 32.0573 16.6113 32.2383L16 35L18.9948 34.591C19.1583 34.5687 19.24 34.5575 19.3114 34.558C19.3865 34.5585 19.4264 34.5626 19.5001 34.5773C19.5701 34.5912 19.6742 34.6279 19.8823 34.7014C20.4306 34.8949 21.0191 35 21.6316 35Z"
                stroke="#344054"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_633_2634"
                x="0"
                y="0"
                width="52"
                height="52"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_633_2634"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_633_2634"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <h3 className="text-center text-[#0f1728] text-xl font-semibold font-['Inter'] leading-loose">
            Share team inboxes
          </h3>
          <p className="text-center text-[#475466] text-base font-normal font-['Inter'] leading-normal">
            Whether you have a team of 2 or 200, our shared team inboxes keep
            everyone on the same page and in the loop.
          </p>
          <button className="text-[#6840c6] text-base font-semibold font-['Inter'] leading-normal flex items-center gap-x-2 pt-5">
            Learn More
            <ArrowRight />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Analytics;
