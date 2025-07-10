// src/app/components/DigitalMind.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    id: 1,
    name: "Website Kabita Food",
    skill: "Web Development",
    slug: "kabita-food",
  },
  { id: 2, name: "Portal Berita", skill: "Dynamic Web", slug: "portal-berita" },
  {
    id: 3,
    name: "Dashboard Influencer",
    skill: "Data Visualization",
    slug: "dashboard-influencer",
  },
  {
    id: 4,
    name: "Klasifikasi Gender CNN",
    skill: "Deep Learning",
    slug: "klasifikasi-gender",
  },
];

const DigitalMind = () => {
  return (
    <div className="relative flex items-center justify-center w-full min-h-screen bg-gray-900 overflow-hidden pt-20 pb-10">
      {/* Central Node */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-48 h-48 md:w-56 md:h-56 bg-cyan-500/10 border-2 border-cyan-400 rounded-full flex flex-col justify-center items-center text-center p-4 z-10"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Proyek Saya
        </h2>
      </motion.div>

      {/* Project Nodes */}
      {projects.map((project, index) => {
        const angle = (index / projects.length) * 2 * Math.PI;
        const radius = 220; // Jarak dari tengah
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
              damping: 10,
              delay: 0.5 + index * 0.2,
            }}
          >
            <Link href={`/projects/${project.slug}`}>
              <div className="w-32 h-32 md:w-36 md:h-36 bg-gray-800/50 border border-gray-600 rounded-full flex flex-col justify-center items-center text-center p-2 cursor-pointer hover:border-cyan-400 hover:scale-110 transition-all duration-300">
                <p className="text-sm font-semibold text-white">
                  {project.name}
                </p>
                <p className="text-xs text-cyan-400 mt-1">{project.skill}</p>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
};

export default DigitalMind;
