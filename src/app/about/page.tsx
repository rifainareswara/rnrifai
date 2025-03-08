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
            Ohayou! I am a DevSecOps Engineer with over 7 years of experience in managing and scaling IT infrastructure. I specialize in cloud architecture, containerization, and implementing DevSecOps practices to ensure high availability and efficiency. My expertise spans platforms like AWS, Alibaba, Google Cloud, and tools such as Ansible, Jenkins, Docker and Kubernetes. Currently, I’m focused on mastering Rust, drawn to its potential for building secure, high-performance system-level applications. I believe Rust can enhance the optimization and security of cloud infrastructure, and I’m eager to leverage it in future projects.
          </p>
        </div>
        <div className="md:max-w-2xl mx-auto flex justify-start mt-6">
          <div className="flex">
            <a href="https://www.linkedin.com/in/rizqinrifai/" target="_blank">
              <SiLinkedin className="text-4xl m-2 text-gray-800 hover:bg-white hover:text-blue-500" />
            </a>
            <a href="https://www.instagram.com/rifainareswara" target="_blank">
              <SiInstagram className="text-4xl m-2 text-gray-800 hover:bg-pink-500 hover:text-white" />
            </a>
            <a href="https://github.com/rifainareswara" target="_blank">
              <SiGithub className="text-4xl m-2 text-gray-800 hover:bg-purple-800 hover:text-white" />
            </a>
            <a href="https://medium.com/@rifainareswara" target="_blank">
              <SiMedium className="text-4xl m-2 text-gray-800 hover:bg-white hover:text-black" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
