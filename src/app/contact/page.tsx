import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col md:justify-center p-4 md:p-8 md:mt-20 items-center">
      <div className="md:max-w-2xl md:text-justify mx-auto">
        <p>
          Do not hesitate to contact me if you need any marketing things, you
          can connect me on Linkedin. Or directly send me a message on email at
          rifairizqi.hao@gmail.com or even DM through my social media.
        </p>
      </div>
      <div className="flex p-4">
        <div className="p-4">
          <div className="text-md md:text-xl">
            <h1 className="font-bold">From</h1>
            <p>Bekasi, Indonesia.</p>
            <p>UTC/GMT +7 hours</p>
          </div>
        </div>
        <div className="p-4">
          <div className="text-md md:text-xl">
            <h1 className="font-bold">Contact Me</h1>
            <p>
              <a
                className="text-gray-800 hover:bg-orange-500 hover:text-white"
                href="mailto:rifairizqi.hao@gmail.com"
              >
                Email
              </a>
            </p>
            <p>
              <a
                className="text-gray-800 hover:bg-orange-500 hover:text-white"
                href="https://www.linkedin.com/in/rnrifai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>
            <p>
              <a
                className="text-gray-800 hover:bg-orange-500 hover:text-white"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
