import React from "react";
import Image from "next/image";
import { SiLinkedin, SiInstagram, SiGithub, SiMedium } from "react-icons/si";

export default function Page() {
  return (
    // Menambahkan `md:items-center` untuk menyejajarkan gambar & teks secara vertikal di desktop
    // Menambahkan `md:gap-12` untuk spasi yang lebih baik antar kolom
    <div className="flex flex-col md:flex-row md:items-center md:justify-center p-4 md:p-8 md:mt-20 md:gap-12">
      
      {/* --- KOLOM GAMBAR --- */}
      <div className="p-4 flex-shrink-0">
        {/* - Menambahkan shadow-xl, transisi, dan efek hover:scale-105
          - `flex-shrink-0` mencegah gambar menyusut di layout flex
        */}
        <div className="rounded-3xl overflow-hidden shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
          <Image
            src="/assets/qq2.jpg"
            width={280}
            height={300}
            alt="Rizqi Nur Rifai"
            className="object-cover" // Memastikan gambar mengisi area tanpa distorsi
          />
        </div>
      </div>

      {/* --- KOLOM KONTEN --- */}
      <div className="p-4 md:max-w-2xl">
        {/* --- TYPOGRAPHY (HIERARKI) --- */}
        <div>
          {/* - "Ohayou!" ditarik keluar sebagai Judul Utama
            - Menambahkan Sub-Judul (text-orange-500) untuk peran Anda
          */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Ohayou!
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-orange-500 mt-2 mb-6">
            Sr. DevOps Engineer
          </h2>

          {/* - Bio dipecah menjadi 2 paragraf (menggunakan <div space-y-4>)
            - Mengubah `md:text-left` menjadi `text-justify` agar rata kiri-kanan
            - Mengubah warna teks agar lebih lembut (text-gray-700)
          */}
          
          {/* === PERUBAHAN DI SINI === */}
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
              {/* Anda menyebutkan Rust, yang saya tahu Anda minati! 
                Saya beri highlight sedikit di sini.
              */}
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
        {/* - Mengubah ikon menjadi bulat (`rounded-full`) dengan padding (`p-3`)
          - Menambahkan efek hover `scale` dan transisi yang konsisten
          - Menyesuaikan warna hover agar lebih konsisten dengan brand
          - Ukuran ikon diubah ke `text-3xl` agar lebih pas di dalam lingkaran
        */}
        <div className="flex justify-start mt-8 space-x-3">
          <a
            href="https://www.linkedin.com/in/rizqinrifai/"
            target="_blank"
            rel="noopener noreferrer" // Penting untuk keamanan saat menggunakan target="_blank"
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
            href="https://github.com/rifainareswara"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full text-gray-700 transition-all duration-300 ease-in-out hover:bg-purple-800 hover:text-white hover:scale-110"
          >
            <SiGithub className="text-3xl" />
          </a>
          <a
            href="https://medium.com/@rifainareswara"
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