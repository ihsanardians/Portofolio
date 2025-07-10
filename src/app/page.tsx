// src/app/page.tsx
"use client";

import React from "react";
import { motion, Variants } from "framer-motion"; // Perubahan di sini
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function HomePage() {
  // Menambahkan tipe "Variants" untuk objek animasi
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Menambahkan tipe "Variants" untuk objek animasi
  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-light text-gray-300"
        >
          Hi, saya{" "}
          <span className="font-bold text-white">Ihsan Ardiansyah</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-2xl md:text-3xl font-bold text-cyan-400 tracking-wider"
        >
          Software Engineer
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-md md:text-lg text-gray-400 max-w-xl mx-auto"
        >
          Merancang dan membangun perangkat lunak fungsional dari ide hingga
          implementasi.
        </motion.p>

        <motion.div variants={itemVariants}>
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 mt-6 px-8 py-3 bg-cyan-500 text-white font-bold rounded-lg shadow-lg shadow-cyan-500/20 hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105"
          >
            Lihat Karya Saya
            <FaArrowRight />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
