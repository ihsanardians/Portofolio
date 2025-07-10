// src/app/projects/[slug]/page.tsx

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { projectsData, ProjectType } from "@/lib/projects";
import TableauTabs from "@/app/components/TableauTabs";
import PageWrapper from "@/app/components/PageWrapper";
import type { Metadata } from "next";

// Data spesifik untuk tab Tableau
const dashboardTabs = [
  {
    name: "Dashboard 1",
    embedUrl:
      "https://public.tableau.com/views/influencer_17520676506680/Dashboard1?:embed=y&:showVizHome=no&:display_count=no",
  },
  {
    name: "Dashboard 2",
    embedUrl:
      "https://public.tableau.com/views/influencer_17520676506680/Dashboard2?:embed=y&:showVizHome=no&:display_count=no",
  },
  {
    name: "Dashboard 3",
    embedUrl:
      "https://public.tableau.com/views/influencer_17520676506680/Dashboard3?:embed=y&:showVizHome=no&:display_count=no",
  },
];

// Mendefinisikan tipe untuk props halaman (FIXED)
type Props = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

// Fungsi untuk membuat judul tab browser menjadi dinamis (FIXED)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectData(params.slug);

  if (!project) {
    return { title: "Proyek Tidak Ditemukan" };
  }

  return {
    title: `${project.title} | Portofolio Ihsan`,
    description: project.description,
  };
}

// Fungsi untuk mendapatkan data proyek
function getProjectData(slug: string): ProjectType | undefined {
  return projectsData[slug];
}

// Fungsi untuk menghasilkan halaman statis saat build
export function generateStaticParams() {
  const slugs = Object.keys(projectsData);
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Komponen Halaman Utama
export default function ProjectPage({ params }: Props) {
  const project = getProjectData(params.slug);

  if (!project) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-160px)] text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold">404</h1>
          <p className="text-xl">Proyek tidak ditemukan.</p>
          <Link
            href="/"
            className="text-cyan-400 hover:underline mt-4 inline-block"
          >
            Kembali ke Halaman Utama
          </Link>
        </div>
      </div>
    );
  }

  return (
    <PageWrapper>
      <div
        className={`container mx-auto px-4 md:px-8 pt-28 pb-16 ${
          params.slug === "dashboard-influencer" ? "max-w-full" : "max-w-4xl"
        }`}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
          {project.title}
        </h1>
        <p className="text-lg text-gray-400 mb-8">{project.course}</p>

        {/* Tampilan Kondisional untuk Gambar atau Dashboard */}
        {params.slug === "dashboard-influencer" ? (
          <TableauTabs tabs={dashboardTabs} />
        ) : (
          <div className="w-full my-8">
            <Image
              src={project.imageUrl}
              alt={`Tampilan Proyek ${project.title}`}
              width={1200}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        )}

        <h2 className="text-2xl font-semibold mb-4 mt-8">Tentang Proyek</h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          {project.description}
        </p>

        {/* BAGIAN BARU KHUSUS UNTUK PROYEK KLASIFIKASI GENDER */}
        {params.slug === "klasifikasi-gender" && (
          <>
            <h3 className="text-xl font-semibold mb-3">Arsitektur Model CNN</h3>
            <ul className="list-disc list-inside bg-gray-800/50 p-4 rounded-md mb-8 space-y-2">
              <li>
                Conv2D (32 filter, kernel 3x3, aktivasi ReLU) + MaxPooling2D
              </li>
              <li>
                Conv2D (64 filter, kernel 3x3, aktivasi ReLU) + MaxPooling2D
              </li>
              <li>
                Conv2D (128 filter, kernel 3x3, aktivasi ReLU) + MaxPooling2D
              </li>
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
                  src="/images/grafik-model.png"
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
          </>
        )}

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

        {/* Tombol Aksi */}
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
