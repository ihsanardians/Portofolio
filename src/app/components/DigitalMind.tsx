// src/app/components/DigitalMind.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const centerNodeText = "Proyek Saya";
const centerNodeSubText = "Jelajahi Karya Saya";

const projects = [
  {
    id: 1,
    name: "Website Kabita Food",
    skill: "Web Development",
    path: "/projects/kabita-food",
  },
  {
    id: 2,
    name: "Portal Berita",
    skill: "Dynamic Web",
    path: "/projects/portal-berita",
  },
  {
    id: 3,
    name: "Dashboard Influencer",
    skill: "Data Visualization",
    path: "/projects/dashboard-influencer",
  },
  {
    id: 4,
    name: "Klasifikasi Gender",
    skill: "Deep Learning",
    path: "/projects/klasifikasi-gender",
  },
];

// Membagi proyek menjadi 2 baris untuk tampilan mobile
const topProjects = projects.slice(0, 2);
const bottomProjects = projects.slice(2, 4);

const DigitalMind = () => {
  return (
    <div className="flex min-h-[800px] w-full items-center justify-center overflow-hidden bg-gray-900 p-4">
      {/* ============================================== */}
      {/* ===== TAMPILAN DESKTOP (Lingkaran) ===== */}
      {/* Muncul hanya di layar medium ke atas (md:flex) */}
      {/* ============================================== */}
      <div
        className="hidden md:relative md:flex md:items-center md:justify-center"
        style={{ width: "600px", height: "600px" }}
      >
        <div className="z-10 flex h-48 w-48 flex-col items-center justify-center rounded-full border-2 border-cyan-400 bg-cyan-500/10 p-2 text-center">
          <h2 className="text-2xl font-bold text-white">{centerNodeText}</h2>
          <p className="text-sm text-cyan-300">{centerNodeSubText}</p>
        </div>
        {projects.map((project, index) => {
          const angle = (index / projects.length) * 2 * Math.PI;
          const radius = 200;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          return (
            <motion.div
              key={project.id}
              className="absolute z-20"
              initial={{ scale: 0, x: 0, y: 0 }}
              animate={{ scale: 1, x: x, y: y }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 12,
                delay: 0.5 + index * 0.2,
              }}
            >
              <Link href={project.path}>
                <div className="flex h-36 w-36 flex-col items-center justify-center rounded-full border border-gray-600 bg-gray-800/50 p-2 text-center transition-all duration-300 hover:scale-110 hover:border-cyan-400">
                  <p className="text-sm font-semibold text-white">
                    {project.name}
                  </p>
                  <p className="mt-1 text-xs text-cyan-400">{project.skill}</p>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* ========================================================= */}
      {/* ===== TAMPILAN MOBILE BARU (2 di atas, 2 di bawah) ===== */}
      {/* Muncul hanya di layar kecil (flex), dan hilang di medium ke atas (md:hidden) */}
      {/* ========================================================= */}
      {/* ========================================================= */}
      {/* ===== TAMPILAN MOBILE BARU (2 di atas, 2 di bawah) ===== */}
      {/* ========================================================= */}
      <div className="flex flex-col items-center justify-center gap-6 md:hidden">
        {/* Baris Atas */}
        <div className="flex justify-center gap-5">
          {topProjects.map((project, index) => (
            // Motion.div membungkus Link di sini
            <motion.div
              key={project.id}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 10,
                delay: 0.1 * index,
              }}
            >
              <Link href={project.path}>
                <div className="flex h-36 w-36 flex-col items-center justify-center rounded-full border border-gray-600 bg-gray-800/50 p-2 text-center active:scale-95 duration-300 hover:scale-110 hover:border-cyan-400">
                  <p className="text-sm font-semibold text-white">
                    {project.name}
                  </p>
                  <p className="mt-1 text-xs text-cyan-400">{project.skill}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Simpul Tengah */}
        <div className="z-10 my-2 flex h-40 w-40 flex-col items-center justify-center rounded-full border-2 border-cyan-400 bg-cyan-500/10 p-2 text-center duration-300 hover:scale-110 hover:border-cyan-400">
          <h2 className="text-xl font-bold text-white">{centerNodeText}</h2>
          <p className="text-xs text-cyan-300">{centerNodeSubText}</p>
        </div>

        {/* Baris Bawah */}
        <div className="flex justify-center gap-5">
          {bottomProjects.map((project, index) => (
            // Motion.div juga membungkus Link di sini
            <motion.div
              key={project.id}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              // delay dilanjutkan agar animasi berurutan
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 10,
                delay: 0.1 * (index + 2),
              }}
            >
              <Link href={project.path}>
                <div className="flex h-36 w-36 flex-col items-center justify-center rounded-full border border-gray-600 bg-gray-800/50 p-2 text-center duration-300 active:scale-95 hover:scale-110 hover:border-cyan-400">
                  <p className="text-sm font-semibold text-white">
                    {project.name}
                  </p>
                  <p className="mt-1 text-xs text-cyan-400">{project.skill}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigitalMind;
