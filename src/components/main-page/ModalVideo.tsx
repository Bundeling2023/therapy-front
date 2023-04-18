import React, { useState } from "react";
import ModalVideoBlock from "react-modal-video";
import 'node_modules/react-modal-video/scss/modal-video.scss';

const ModalVideo = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="relative pt-10 pb-10 w-90% max-w-1560 mx-auto">
      <div className="bg-[url('/video_bgr.png')] flex items-center mx-auto max-h-[750px] pl-[14.5%] bg-no-repeat bg-center bg-cover aspect-video w-full max-w-1560 rounded-full">
        <button
          className="relative flex flex-col gap-1 lg:gap-6"
          onClick={() => setOpen(true)}
        >
          <span className="lg:w-[240px] lg:h-[240px] w-[54px] h-[54px] left-auto right-auto z-0 absolute rounded-full animate-ping bg-[#C2D3E4]" />
          <svg
            viewBox="0 0 240 240"
            fill="none"
            className="relative z-10 lg:w-[240px] lg:h-[240px] w-[54px] h-[54px]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_b_20_263)">
              <circle
                cx="120"
                cy="120"
                r="120"
                fill="#2C2E80"
                fillOpacity="0.08"
              />
            </g>
            <g filter="url(#filter1_b_20_263)">
              <circle
                cx="120"
                cy="120.001"
                r="101.176"
                fill="url(#paint0_radial_20_263)"
              />
            </g>
            <g filter="url(#filter2_b_20_263)">
              <circle
                cx="120.47"
                cy="120.47"
                r="82.8235"
                fill="url(#paint1_radial_20_263)"
              />
            </g>
            <path
              d="M142 116.072C147.333 119.151 147.333 126.849 142 129.928L110.5 148.115C105.167 151.194 98.5 147.345 98.5 141.187V104.813C98.5 98.6551 105.167 94.8061 110.5 97.8853L142 116.072Z"
              fill="#2C2E80"
            />
            <defs>
              <filter
                id="filter0_b_20_263"
                x="-4"
                y="-4"
                width="248"
                height="248"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_20_263"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_20_263"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_b_20_263"
                x="14.8235"
                y="14.8244"
                width="210.353"
                height="210.353"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_20_263"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_20_263"
                  result="shape"
                />
              </filter>
              <filter
                id="filter2_b_20_263"
                x="33.647"
                y="33.6469"
                width="173.647"
                height="173.647"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_20_263"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_20_263"
                  result="shape"
                />
              </filter>
              <radialGradient
                id="paint0_radial_20_263"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(120 18.8244) rotate(90) scale(202.353)"
              >
                <stop stopColor="#F4F7FF" stopOpacity="0.83" />
                <stop offset="1" stopColor="white" stopOpacity="0.42" />
              </radialGradient>
              <radialGradient
                id="paint1_radial_20_263"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(120.47 37.6469) rotate(90) scale(165.647)"
              >
                <stop stopColor="#4DF4FF" stopOpacity="0.42" />
                <stop offset="1" stopColor="#CBFCFF" stopOpacity="0.42" />
              </radialGradient>
            </defs>
          </svg>
          <p className="text-sm font-semibold lg:text-5xl">Bekijk video</p>
        </button>
      </div>
      <ModalVideoBlock
        channel="youtube"
        isOpen={isOpen}
        videoId="vM-Bja2Gy04"
        onClose={() => setOpen(false)}
      />
    </section>
  );
};

export default ModalVideo;
