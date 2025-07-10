// src/app/projects/klasifikasi-gender/page.tsx

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/lib/projects";
import PageWrapper from "@/app/components/PageWrapper";

const project = projectsData["klasifikasi-gender"];

export default function KlasifikasiGenderPage() {
  if (!project) return <div>Proyek tidak ditemukan.</div>;

  return (
    <PageWrapper>
      <div className="container mx-auto max-w-4xl px-4 md:px-8 pt-28 pb-16">
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

        {/* Bagian Khusus Proyek ML */}
        <h3 className="text-xl font-semibold mb-3">Arsitektur Model CNN</h3>
        <ul className="list-disc list-inside bg-gray-800/50 p-4 rounded-md mb-8 space-y-2">
          <li>Conv2D (32 filter, kernel 3x3, aktivasi ReLU) + MaxPooling2D</li>
          <li>Conv2D (64 filter, kernel 3x3, aktivasi ReLU) + MaxPooling2D</li>
          <li>Conv2D (128 filter, kernel 3x3, aktivasi ReLU) + MaxPooling2D</li>
          <li>Flatten</li>
          <li>Dropout (rate 0.5) untuk mencegah overfitting</li>
          <li>Dense (128 neuron, aktivasi ReLU)</li>
          <li>Dense (2 neuron, aktivasi Softmax) sebagai output layer</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Hasil & Evaluasi</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="text-center bg-gray-800/50 p-4 rounded-lg">
            <p className="text-gray-400 mb-2">Grafik Performa Training</p>
            <Image
              src="/images/grafik-training.png"
              alt="Grafik Training dan Validasi"
              width={500}
              height={400}
              className="w-full h-auto"
            />
          </div>
          <div className="text-center bg-gray-800/50 p-4 rounded-lg">
            <p className="text-gray-400 mb-2">Confusion Matrix</p>
            <Image
              src="/images/confusion-matrix.png"
              alt="Confusion Matrix"
              width={400}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>

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
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-md"
          >
            Lihat Kode
          </a>
          {project.liveDemoUrl !== "#" && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-md"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </PageWrapper>
  );
}
