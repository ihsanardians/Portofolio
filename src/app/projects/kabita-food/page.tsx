// src/app/projects/kabita-food/page.tsx

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/lib/projects";
import PageWrapper from "@/app/components/PageWrapper";
import { FaArrowLeft } from "react-icons/fa";

// Langsung ambil data untuk proyek spesifik ini
const project = projectsData["kabita-food"];

export default function KabitaFoodPage() {
  if (!project) {
    return <div>Proyek tidak ditemukan.</div>;
  }

  return (
    <PageWrapper>
      <div className="container mx-auto max-w-4xl px-4 md:px-8 pt-28 pb-16">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
        >
          <FaArrowLeft />
          Kembali ke Semua Proyek
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
          {project.title}
        </h1>
        <p className="text-lg text-gray-400 mb-8">{project.course}</p>

        <div className="w-full my-8">
          <Image
            src={project.imageUrl}
            alt={`Tampilan Proyek ${project.title}`}
            width={1200}
            height={400}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Tentang Proyek</h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          {project.description}
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-4">Teknologi</h2>
        <div className="flex flex-wrap gap-3 mb-8">
          {project.techStack.map((tech: string) => (
            <span
              key={tech}
              className="bg-gray-700 text-cyan-300 px-3 py-1 rounded-full text-sm font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded transition-colors duration-300"
          >
            Lihat Kode
          </a>
          {project.liveDemoUrl !== "#" && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded transition-colors duration-300"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </PageWrapper>
  );
}
