import React from "react";
import Image from "next/image";
import { SiLinkedin, SiInstagram, SiGithub, SiMedium } from "react-icons/si";

export default function Page() {
  return (
    <div className="flex flex-col md:justify-center md:flex-row p-4 md:p-8 md:mt-20">
      <div className="p-4">
        <div className="md:max-w-2xl mx-auto">
          <div className="rounded-3xl overflow-hidden">
            <Image
              src="/assets/qq2.jpg"
              width={280}
              height={300}
              alt="Rizqi Nur Rifai"
            />
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="md:max-w-2xl mx-auto">
          <p className="text-md md:text-xl md:text-justify">
            Ohayou! Call Me Rizqi, DevOps Engineer at Digital Nayaka Abhinaya. I
            have a strong interest in Information Technology such as Docker,
            Kubernetes, Nginx, Jenkins, Express, React, Next (M.E.R.N) and
            other Technologies. In my role I focus on efficiently integrating
            software development and operations, ensuring reliable software
            delivery. I love to stay up to date with the latest in the industry
            and am always eager to learn new things. Additionally, I have
            expertise in leveraging React.js to build responsive and interactive
            user interfaces. I am passionate about tackling technology
            challenges and contributing to innovative projects. If you have any
            questions or need assistance in Information Technology, DevOps or
            M.E.R.N, please do not hesitate to contact me. Thank You!
          </p>
        </div>
        <div className="md:max-w-2xl mx-auto flex justify-start mt-6">
          <div className="flex">
            <a href="https://www.linkedin.com/in/rnrifai/" target="_blank">
              <SiLinkedin className="text-4xl m-2 text-gray-800 hover:bg-white hover:text-blue-500" />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <SiInstagram className="text-4xl m-2 text-gray-800 hover:bg-purple-500 hover:text-white" />
            </a>
            <a href="https://github.com/rifai-rizqi3" target="_blank">
              <SiGithub className="text-4xl m-2 text-gray-800 hover:bg-purple-800 hover:text-white" />
            </a>
            <a href="https://medium.com/@rifai.rizqi3" target="_blank">
              <SiMedium className="text-4xl m-2 text-gray-800 hover:bg-white hover:text-black" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
