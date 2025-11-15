// PERUBAHAN 1: Tambahkan "use client" di paling atas
"use client";

// PERUBAHAN 2: Import useState
import React, { useState } from "react";
import Image from "next/image";

// Data proyek Anda (saya pindahkan ke luar komponen agar rapi)
const projects = [
  {
    title: "AI Notataking",
    description: "Project ini dibangun dengan Golang untuk sisi backend, termasuk setup project, koneksi database Supabase, pembuatan REST API yang clean dan scalable, hingga asynchronous processing untuk embedding AI. Integrasi AI menggunakan Gemini AI, lengkap dengan teknik vector embedding, Retrieval-Augmented Generation (RAG), dan AI Workflow yang biasa digunakan aplikasi berbasis LLM di dunia nyata. Dari sisi frontend, aplikasi ini menggunakan ReactJS dengan TypeScript yang sudah diatur agar mudah dihubungkan ke backend dan API Gemini AI.",
    imageUrl: "/images/ai-notetaking.png",
    demoUrl: "https://demo-notetaking-ai.rifai.biz.id/",
    githubUrl: "https://github.com/rifainareswara/ai-notetaking-be.git",
  },
  {
    title: "DNA Company Profile",
    description: "Proyek ini adalah company profile untuk PT Digital Nayaka Abhinaya, yang dikembangkan untuk mendemonstrasikan keahlian saya menggunakan React dan Tailwind CSS.",
    imageUrl: "/images/dna.png",
    demoUrl: "https://digitalnayaka.com/",
    githubUrl: "#",
  },
  {
    title: "Project Gamma",
    description: "Proyek full-stack dengan database PostgreSQL dan backend Rust. Ini adalah contoh deskripsi yang sangat panjang sekali yang pasti akan terpotong oleh fungsionalitas 'Read more' yang baru saja kita implementasikan. Ini akan memastikan bahwa tata letak kartu tetap rapi dan seragam di seluruh grid, memberikan pengalaman pengguna yang lebih baik.",
    imageUrl: "/images/project-gamma.png",
    demoUrl: "#",
    githubUrl: "#",
  },
  // ... sisa proyek Anda
];

// Style shadow
const cardShadow = "0px 4.2px 3.4px rgba(0, 0, 0, 0.028), 0px 14.1px 11.4px rgba(0, 0, 0, 0.042), 0px 63px 51px rgba(0, 0, 0, 0.07)";

// --- PERBAIKAN 1: Definisikan Tipe Data (Interface) ---
// Ini memberi tahu TypeScript seperti apa "bentuk" dari objek 'project' Anda.
interface Project {
  title: string;
  description: string;
  imageUrl: string;
  demoUrl: string;
  githubUrl: string;
}

// PERUBAHAN 3: Kita buat komponen terpisah untuk KARTU PROYEK
// Ini memungkinkan setiap kartu mengelola state "isExpanded" miliknya sendiri.

// --- PERBAIKAN 2: Terapkan Tipe 'Project' ke props komponen ---
// Kita beri tahu fungsi ini bahwa 'project' adalah sebuah objek dengan tipe 'Project'
function ProjectCard({ project }: { project: Project }) {
  // State untuk melacak apakah deskripsi sedang ditampilkan penuh
  const [isExpanded, setIsExpanded] = useState(false);

  // Tentukan batas karakter. Sesuaikan angka ini sesuai kebutuhan.
  const maxLength = 150;

  const isLongDescription = project.description.length > maxLength;

  // Tentukan teks yang akan ditampilkan
  const displayedText = isExpanded
    ? project.description
    : `${project.description.substring(0, maxLength)}...`;

  return (
    <div
      className="flex flex-col rounded-lg overflow-hidden"
      style={{
        background: "#ffffff",
        boxShadow: cardShadow,
      }}
    >
      {/* Gambar Thumbnail */}
      {project.imageUrl && (
        <div className="relative w-full h-48">
          <Image
            src={project.imageUrl}
            alt={`Thumbnail for ${project.title}`}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Konten Kartu (Teks) */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">
          {project.title}
        </h3>

        {/* Deskripsi (dengan logika "Read more") */}
        <p className="text-gray-700 mb-4 flex-grow">
          {isLongDescription ? displayedText : project.description}
        </p>

        {/* Tombol "Read more" / "Read less" */}
        {isLongDescription && (
          <button
            onClick={() => setIsExpanded(!isExpanded)} // Toggle state
            className="text-orange-600 font-medium hover:underline text-left mb-4"
          >
            {isExpanded ? "Read less" : "Read more"}
          </button>
        )}

        {/* Link Demo & GitHub */}
        <div className="flex gap-4 mt-auto">
          <a
            href={project.demoUrl}
            className="text-orange-600 font-medium hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            className="text-gray-600 font-medium hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}


// --- KOMPONEN HALAMAN UTAMA ANDA ---
export default function page() {
  return (
    <>
      <main className="flex flex-col items-center p-8 md:p-16">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-12 text-center">
          My Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">

          {/* PERUBAHAN 4: Loop sekarang memanggil komponen ProjectCard */}
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}

        </div>
      </main>
    </>
  );
}