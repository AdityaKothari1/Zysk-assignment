import { MenuIcon, Plus, User2Icon } from "lucide-react";
import React, { useState } from "react";

export const Header = () => {
  const [isNavVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };

  return (
    <div>
      <header className="header sticky top-0 border-b bg-white  flex items-center justify-between px-4 md:px-24 py-2">
        <nav>
          <div className="flex items-center gap-x-10">
            <h1 className="w-3/12">
              <svg
                width="145"
                height="38"
                viewBox="0 0 145 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_dd_633_2403)">
                  <g clip-path="url(#clip0_633_2403)">
                    <rect
                      x="3"
                      y="2"
                      width="32"
                      height="32"
                      rx="8"
                      fill="white"
                    />
                    <rect
                      x="3"
                      y="2"
                      width="32"
                      height="32"
                      rx="8"
                      fill="url(#paint0_linear_633_2403)"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.9998 4.03861C11.2892 4.03861 5.03861 10.2892 5.03861 17.9998C5.03861 25.7103 11.2892 31.9609 18.9998 31.9609C26.7103 31.9609 32.9609 25.7103 32.9609 17.9998C32.9609 10.2892 26.7103 4.03861 18.9998 4.03861ZM4.96094 17.9998C4.96094 10.2463 11.2463 3.96094 18.9998 3.96094C26.7532 3.96094 33.0386 10.2463 33.0386 17.9998C33.0386 25.7532 26.7532 32.0386 18.9998 32.0386C11.2463 32.0386 4.96094 25.7532 4.96094 17.9998Z"
                      fill="#D0D5DD"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19 14.0777C16.8338 14.0777 15.0777 15.8338 15.0777 18C15.0777 20.1662 16.8338 21.9223 19 21.9223C21.1662 21.9223 22.9223 20.1662 22.9223 18C22.9223 15.8338 21.1662 14.0777 19 14.0777ZM15 18C15 15.7909 16.7909 14 19 14C21.2091 14 23 15.7909 23 18C23 20.2091 21.2091 22 19 22C16.7909 22 15 20.2091 15 18Z"
                      fill="#D0D5DD"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.9995 15.3199C17.5196 15.3199 16.3199 16.5196 16.3199 17.9995C16.3199 19.4794 17.5196 20.6791 18.9995 20.6791C20.4794 20.6791 21.6791 19.4794 21.6791 17.9995C21.6791 16.5196 20.4794 15.3199 18.9995 15.3199ZM16.2422 17.9995C16.2422 16.4767 17.4767 15.2422 18.9995 15.2422C20.5223 15.2422 21.7568 16.4767 21.7568 17.9995C21.7568 19.5223 20.5223 20.7568 18.9995 20.7568C17.4767 20.7568 16.2422 19.5223 16.2422 17.9995Z"
                      fill="#D0D5DD"
                    />
                    <path d="M18.9609 2H19.0386V34H18.9609V2Z" fill="#D0D5DD" />
                    <path
                      d="M35 17.9609L35 18.0386L3 18.0386L3 17.9609L35 17.9609Z"
                      fill="#D0D5DD"
                    />
                    <path d="M29.6016 2H29.6792V34H29.6016V2Z" fill="#D0D5DD" />
                    <path d="M13.6406 2H13.7183V34H13.6406V2Z" fill="#D0D5DD" />
                    <path d="M24.2812 2H24.3589V34H24.2812V2Z" fill="#D0D5DD" />
                    <path d="M8.32031 2H8.39798V34H8.32031V2Z" fill="#D0D5DD" />
                    <path
                      d="M35 28.6016L35 28.6792L3 28.6792L3 28.6016L35 28.6016Z"
                      fill="#D0D5DD"
                    />
                    <path
                      d="M35 12.6406L35 12.7183L3 12.7183L3 12.6406L35 12.6406Z"
                      fill="#D0D5DD"
                    />
                    <path
                      d="M35 23.2812L35 23.3589L3 23.3589L3 23.2812L35 23.2812Z"
                      fill="#D0D5DD"
                    />
                    <path
                      d="M35 7.32031L35 7.39798L3 7.39798L3 7.32031L35 7.32031Z"
                      fill="#D0D5DD"
                    />
                    <g filter="url(#filter1_dd_633_2403)">
                      <circle
                        cx="19"
                        cy="18"
                        r="8"
                        fill="url(#paint1_linear_633_2403)"
                      />
                    </g>
                    <g filter="url(#filter2_b_633_2403)">
                      <path
                        d="M3 18H35V21.2C35 25.6804 35 27.9206 34.1281 29.6319C33.3611 31.1372 32.1372 32.3611 30.6319 33.1281C28.9206 34 26.6804 34 22.2 34H15.8C11.3196 34 9.07937 34 7.36808 33.1281C5.86278 32.3611 4.63893 31.1372 3.87195 29.6319C3 27.9206 3 25.6804 3 21.2V18Z"
                        fill="white"
                        fill-opacity="0.2"
                      />
                    </g>
                  </g>
                  <rect
                    x="3.1"
                    y="2.1"
                    width="31.8"
                    height="31.8"
                    rx="7.9"
                    stroke="#D0D5DD"
                    stroke-width="0.2"
                  />
                </g>
                <path
                  d="M54.005 10.4531H56.6399V19.956C56.6399 20.9976 56.3937 21.9138 55.9013 22.7045C55.4136 23.4953 54.727 24.1132 53.8416 24.5582C52.9562 24.9986 51.9216 25.2188 50.7379 25.2188C49.5495 25.2188 48.5125 24.9986 47.6271 24.5582C46.7417 24.1132 46.0552 23.4953 45.5675 22.7045C45.0798 21.9138 44.8359 20.9976 44.8359 19.956V10.4531H47.4709V19.7358C47.4709 20.3419 47.6035 20.8816 47.8686 21.3551C48.1385 21.8286 48.5173 22.2003 49.005 22.4702C49.4927 22.7353 50.0703 22.8679 50.7379 22.8679C51.4055 22.8679 51.9832 22.7353 52.4709 22.4702C52.9633 22.2003 53.3421 21.8286 53.6072 21.3551C53.8724 20.8816 54.005 20.3419 54.005 19.7358V10.4531Z"
                  fill="#101828"
                />
                <path
                  d="M61.9613 18.6065V24.9986H59.3903V14.0895H61.8477V15.9432H61.9755C62.2264 15.3324 62.6265 14.8471 63.1758 14.4872C63.7298 14.1274 64.4139 13.9474 65.2283 13.9474C65.9812 13.9474 66.637 14.1084 67.1957 14.4304C67.7591 14.7524 68.1947 15.2188 68.5025 15.8295C68.815 16.4403 68.9689 17.1813 68.9641 18.0526V24.9986H66.3931V18.4503C66.3931 17.7211 66.2037 17.1506 65.8249 16.7386C65.4509 16.3267 64.9324 16.1207 64.2695 16.1207C63.8197 16.1207 63.4196 16.2202 63.0692 16.419C62.7236 16.6132 62.4514 16.8949 62.2525 17.2642C62.0584 17.6335 61.9613 18.081 61.9613 18.6065Z"
                  fill="#101828"
                />
                <path
                  d="M77.0252 14.0895V16.0781H70.7539V14.0895H77.0252ZM72.3022 11.4759H74.8732V21.7173C74.8732 22.063 74.9253 22.3281 75.0295 22.5128C75.1384 22.6927 75.2804 22.8158 75.4556 22.8821C75.6308 22.9484 75.8249 22.9815 76.038 22.9815C76.199 22.9815 76.3458 22.9697 76.4783 22.946C76.6157 22.9223 76.7198 22.901 76.7908 22.8821L77.2241 24.892C77.0868 24.9394 76.8903 24.9915 76.6346 25.0483C76.3836 25.1051 76.0759 25.1383 75.7113 25.1477C75.0674 25.1667 74.4873 25.0696 73.9712 24.8565C73.4551 24.6387 73.0456 24.3026 72.7425 23.848C72.4442 23.3935 72.2975 22.8253 72.3022 22.1435V11.4759Z"
                  fill="#101828"
                />
                <path
                  d="M79.1754 24.9986V14.0895H81.7464V24.9986H79.1754ZM80.468 12.5412C80.0608 12.5412 79.7105 12.4063 79.4169 12.1364C79.1233 11.8617 78.9766 11.5327 78.9766 11.1491C78.9766 10.7609 79.1233 10.4318 79.4169 10.1619C79.7105 9.88731 80.0608 9.75 80.468 9.75C80.88 9.75 81.2304 9.88731 81.5192 10.1619C81.8127 10.4318 81.9595 10.7609 81.9595 11.1491C81.9595 11.5327 81.8127 11.8617 81.5192 12.1364C81.2304 12.4063 80.88 12.5412 80.468 12.5412Z"
                  fill="#101828"
                />
                <path
                  d="M89.8377 14.0895V16.0781H83.5664V14.0895H89.8377ZM85.1147 11.4759H87.6857V21.7173C87.6857 22.063 87.7378 22.3281 87.842 22.5128C87.9509 22.6927 88.0929 22.8158 88.2681 22.8821C88.4433 22.9484 88.6374 22.9815 88.8505 22.9815C89.0115 22.9815 89.1583 22.9697 89.2908 22.946C89.4282 22.9223 89.5323 22.901 89.6033 22.8821L90.0366 24.892C89.8993 24.9394 89.7028 24.9915 89.4471 25.0483C89.1961 25.1051 88.8884 25.1383 88.5238 25.1477C87.8799 25.1667 87.2998 25.0696 86.7837 24.8565C86.2676 24.6387 85.8581 24.3026 85.555 23.848C85.2567 23.3935 85.11 22.8253 85.1147 22.1435V11.4759Z"
                  fill="#101828"
                />
                <path
                  d="M94.7933 10.4531V24.9986H92.2223V10.4531H94.7933Z"
                  fill="#101828"
                />
                <path
                  d="M102.267 25.2116C101.173 25.2116 100.228 24.9844 99.4329 24.5298C98.6422 24.0705 98.0337 23.4219 97.6076 22.5838C97.1815 21.741 96.9684 20.7491 96.9684 19.608C96.9684 18.4858 97.1815 17.5009 97.6076 16.6534C98.0385 15.8011 98.6398 15.1383 99.4116 14.6648C100.183 14.1866 101.09 13.9474 102.132 13.9474C102.804 13.9474 103.439 14.0563 104.035 14.2741C104.636 14.4872 105.167 14.8187 105.626 15.2685C106.09 15.7183 106.455 16.2912 106.72 16.9872C106.985 17.6785 107.118 18.5024 107.118 19.4588V20.2472H98.1758V18.5142H104.653C104.648 18.0218 104.542 17.5838 104.333 17.2003C104.125 16.812 103.834 16.5066 103.46 16.2841C103.091 16.0616 102.66 15.9503 102.167 15.9503C101.642 15.9503 101.18 16.0781 100.782 16.3338C100.385 16.5848 100.074 16.9162 99.8519 17.3281C99.6341 17.7353 99.5228 18.1828 99.5181 18.6705V20.1832C99.5181 20.8177 99.6341 21.3622 99.8661 21.8168C100.098 22.2666 100.422 22.6122 100.839 22.8537C101.256 23.0904 101.743 23.2088 102.302 23.2088C102.676 23.2088 103.015 23.1567 103.318 23.0526C103.621 22.9437 103.884 22.785 104.106 22.5767C104.329 22.3684 104.497 22.1103 104.61 21.8026L107.011 22.0724C106.859 22.7069 106.571 23.2609 106.145 23.7344C105.723 24.2031 105.183 24.5677 104.525 24.8281C103.867 25.0838 103.114 25.2116 102.267 25.2116Z"
                  fill="#101828"
                />
                <path
                  d="M113.341 25.1903C112.484 25.1903 111.717 24.9702 111.04 24.5298C110.363 24.0895 109.828 23.4503 109.435 22.6122C109.042 21.7741 108.845 20.7562 108.845 19.5582C108.845 18.3461 109.044 17.3234 109.442 16.4901C109.844 15.652 110.386 15.0199 111.068 14.5938C111.75 14.1629 112.51 13.9474 113.348 13.9474C113.987 13.9474 114.513 14.0563 114.925 14.2741C115.337 14.4872 115.663 14.7453 115.905 15.0483C116.146 15.3466 116.333 15.6283 116.466 15.8935H116.572V10.4531H119.151V24.9986H116.622V23.2798H116.466C116.333 23.545 116.142 23.8267 115.891 24.125C115.64 24.4186 115.308 24.6695 114.896 24.8778C114.484 25.0862 113.966 25.1903 113.341 25.1903ZM114.058 23.081C114.603 23.081 115.067 22.9342 115.45 22.6406C115.834 22.3423 116.125 21.928 116.324 21.3977C116.523 20.8674 116.622 20.2495 116.622 19.544C116.622 18.8385 116.523 18.2254 116.324 17.7045C116.13 17.1837 115.841 16.7789 115.457 16.4901C115.079 16.2012 114.612 16.0568 114.058 16.0568C113.485 16.0568 113.007 16.206 112.624 16.5043C112.24 16.8026 111.951 17.2145 111.757 17.7401C111.563 18.2656 111.466 18.867 111.466 19.544C111.466 20.2259 111.563 20.8343 111.757 21.3693C111.956 21.8996 112.247 22.3187 112.631 22.6264C113.019 22.9295 113.495 23.081 114.058 23.081Z"
                  fill="#101828"
                />
                <path
                  d="M136.134 10.4531H138.769V19.956C138.769 20.9976 138.523 21.9138 138.03 22.7045C137.542 23.4953 136.856 24.1132 135.971 24.5582C135.085 24.9986 134.051 25.2188 132.867 25.2188C131.678 25.2188 130.641 24.9986 129.756 24.5582C128.871 24.1132 128.184 23.4953 127.696 22.7045C127.209 21.9138 126.965 20.9976 126.965 19.956V10.4531H129.6V19.7358C129.6 20.3419 129.732 20.8816 129.998 21.3551C130.267 21.8286 130.646 22.2003 131.134 22.4702C131.622 22.7353 132.199 22.8679 132.867 22.8679C133.534 22.8679 134.112 22.7353 134.6 22.4702C135.092 22.2003 135.471 21.8286 135.736 21.3551C136.001 20.8816 136.134 20.3419 136.134 19.7358V10.4531Z"
                  fill="#101828"
                />
                <path
                  d="M144.268 10.4531V24.9986H141.633V10.4531H144.268Z"
                  fill="#101828"
                />
                <defs>
                  <filter
                    id="filter0_dd_633_2403"
                    x="0"
                    y="0"
                    width="38"
                    height="38"
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
                      values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_633_2403"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1.5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_633_2403"
                      result="effect2_dropShadow_633_2403"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_633_2403"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_dd_633_2403"
                    x="8"
                    y="8"
                    width="22"
                    height="22"
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
                      values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_633_2403"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1.5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_633_2403"
                      result="effect2_dropShadow_633_2403"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_633_2403"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter2_b_633_2403"
                    x="-2"
                    y="13"
                    width="42"
                    height="26"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="2.5"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_633_2403"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_633_2403"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_633_2403"
                    x1="19"
                    y1="2"
                    x2="19"
                    y2="34"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="#D0D5DD" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_633_2403"
                    x1="15"
                    y1="26"
                    x2="23"
                    y2="10"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#53389E" />
                    <stop offset="1" stop-color="#6941C6" />
                  </linearGradient>
                  <clipPath id="clip0_633_2403">
                    <rect
                      x="3"
                      y="2"
                      width="32"
                      height="32"
                      rx="8"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
            </h1>
            <ul className="flex items-center text-[#475466] text-base font-semibold font-['Inter'] leading-normal max-md:hidden">
              <li className="p-4  hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
                <a href="">Home</a>
              </li>
              <li className="p-4   hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                <a href="">Products</a>
              </li>
              <li className="p-4   hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                <a href="">Resources</a>
              </li>
              <li className="p-4   hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                <a href="">Pricing</a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="w-3/12 flex justify-end">
          <img
            className="w-9 rounded-full max-md:hidden"
            src="./assets/avatar.jpg"
            alt="avatar"
          />
          {!isNavVisible ? (
            <MenuIcon
              onClick={() => setNavVisible(!isNavVisible)}
              className="md:hidden"
            />
          ) : (
            <Plus
              onClick={() => setNavVisible(!isNavVisible)}
              className="rotate-45"
            />
          )}
        </div>
      </header>
    </div>
  );
};
