import React from "react";
import Image from "next/image";
import { SiLinkedin, SiInstagram, SiGithub, SiMedium } from "react-icons/si";

export default function Page() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-center p-4 md:p-8 md:mt-20 md:gap-12">
      {/* --- KOLOM GAMBAR --- */}
      <div className="p-4 flex-shrink-0">
        {/*
         * === PERUBAHAN DI SINI ===
         * 1. 'relative' ditambahkan (wajib untuk prop 'fill' di Image).
         * 2. 'aspect-[14/15]' ditambahkan untuk menjaga rasio gambar (280/300).
         * 3. 'w-full max-w-[280px] mx-auto' untuk mobile.
         * 4. 'md:w-[280px]' untuk desktop.
         */}
        <div className="relative w-full max-w-[280px] mx-auto md:w-[280px] md:max-w-none md:mx-0 rounded-3xl overflow-hidden shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl aspect-[14/15]">
          <Image
            src="/assets/rifai.jpeg"
            alt="Rizqi Nur Rifai"
            /*
             * === PERUBAHAN DI SINI ===
             * 1. 'fill' prop ditambahkan.
             * 2. 'width' dan 'height' DIHAPUS.
             * 3. className hanya 'object-cover'.
             */
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* --- KOLOM KONTEN --- */}
      <div className="p-4 md:max-w-2xl">
        {/* --- TYPOGRAPHY (HIERARKI) --- */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Ohayou!
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-orange-500 mt-2 mb-6">
            Sr. DevOps Engineer
          </h2>

          <div className="space-y-4 text-md md:text-xl text-justify text-gray-700">
            <p>
              I am a DevSecOps Engineer with over 7 years of experience in
              managing and scaling IT infrastructure. I specialize in cloud
              architecture, containerization, and implementing DevSecOps
              practices to ensure high availability and efficiency. My
              expertise spans platforms like AWS, Alibaba, Google Cloud, and
              tools such as Ansible, Jenkins, Docker and Kubernetes.
            </p>
            <p>
              Currently, I’m focused on mastering{" "}
              <span className="font-bold text-gray-900">Rust</span>, drawn
              to its potential for building secure, high-performance
              system-level applications. I believe Rust can enhance the
              optimization and security of cloud infrastructure, and I’m
              eager to leverage it in future projects.
            </p>
          </div>
        </div>

        {/* --- SOCIAL ICONS --- */}
        <div className="flex justify-start mt-8 space-x-3">
          <a
            href="https://www.linkedin.com/in/rizqinrifai/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full text-gray-700 transition-all duration-300 ease-in-out hover:bg-blue-600 hover:text-white hover:scale-110"
          >
            <SiLinkedin className="text-3xl" />
          </a>
          <a
            href="https://www.instagram.com/rifainareswara"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full text-gray-700 transition-all duration-300 ease-in-out hover:bg-pink-500 hover:text-white hover:scale-110"
          >
            <SiInstagram className="text-3xl" />
          </a>
          <a
            href="httpsf://github.com/rifainareswara"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full text-gray-700 transition-all duration-300 ease-in-out hover:bg-purple-800 hover:text-white hover:scale-110"
          >
            <SiGithub className="text-3xl" />
          </a>
          <a
            href="httpsf://medium.com/@rifainareswara"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full text-gray-700 transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:scale-110"
          >
            <SiMedium className="text-3xl" />
          </a>
        </div>
      </div>
    </div>
  );
}