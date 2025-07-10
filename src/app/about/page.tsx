// src/app/about/page.tsx

import PageWrapper from "@/app/components/PageWrapper";
import React from "react";
import Image from "next/image";
import {
  FaPhp,
  FaLaravel,
  FaJs,
  FaPython,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFileExcel,
} from "react-icons/fa";
import {
  SiMysql,
  SiTableau,
  SiTailwindcss,
  SiBootstrap,
  SiCplusplus,
  SiCss3,
  SiPandas,
  SiTensorflow,
  SiNumpy,
  SiJquery,
} from "react-icons/si";
import { IconType } from "react-icons";

// Komponen kecil untuk menampilkan ikon keahlian
const SkillIcon = ({ icon: Icon, name }: { icon: IconType; name: string }) => (
  <div className="flex flex-col items-center gap-2 p-4 bg-gray-800/50 rounded-lg transition-transform hover:scale-110 hover:bg-gray-700">
    <Icon size={40} className="text-cyan-400" />
    <span className="text-sm text-gray-300">{name}</span>
  </div>
);

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="container mx-auto max-w-4xl px-4 py-28 md:py-32 text-center">
        {/* Bagian Perkenalan */}
        <div className="flex flex-col items-center gap-6">
          <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg">
            <Image
              src="/images/foto.jpg" // GANTI DENGAN NAMA FILE FOTO ANDA DI FOLDER /public/images
              alt="Foto Profil Ihsan Ardiansyah"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              IHSAN ARDIANSYAH
            </h1>
            <p className="text-xl text-gray-400 mt-2">
              Mahasiswa Informatika & Calon Pengembang Perangkat Lunak
            </p>
          </div>
          <p className="max-w-2xl text-gray-300 leading-relaxed">
            Saya adalah mahasiswa Informatika (IPK 3.73) yang memiliki dedikasi
            tinggi untuk menerjemahkan ide menjadi solusi digital. Dengan
            fondasi kuat di bidang Web Development, Machine Learning, dan
            Analisis Data, saya antusias untuk terus belajar dan berkontribusi
            dalam proyek-proyek teknologi yang menantang.
          </p>
        </div>

        {/* Garis Pemisah */}
        <hr className="my-12 border-gray-700" />

        {/* Bagian Keahlian */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8">Keahlian</h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            <SkillIcon icon={SiCplusplus} name="C++" />
            <SkillIcon icon={FaPhp} name="PHP" />
            <SkillIcon icon={FaJs} name="JavaScript" />
            <SkillIcon icon={SiCss3} name="CSS" />
            <SkillIcon icon={SiTailwindcss} name="Tailwind CSS" />
            <SkillIcon icon={SiBootstrap} name="Bootstrap CSS" />
            <SkillIcon icon={FaLaravel} name="Laravel" />
            <SkillIcon icon={FaReact} name="React/Next.js" />
            <SkillIcon icon={SiJquery} name="JQuery" />
            <SkillIcon icon={SiMysql} name="MySQL" />
            <SkillIcon icon={FaGitAlt} name="Git" />
            <SkillIcon icon={FaGithub} name="GitHub" />
            <SkillIcon icon={FaPython} name="Python" />
            <SkillIcon icon={SiPandas} name="Pandas" />
            <SkillIcon icon={SiTensorflow} name="TensorFlow" />
            <SkillIcon icon={SiNumpy} name="Numpy" />
            <SkillIcon icon={SiTableau} name="Tableau" />
            <SkillIcon icon={FaFileExcel} name="Excel" />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
