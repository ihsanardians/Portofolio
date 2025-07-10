// src/app/components/PageWrapper.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Posisi awal: tidak terlihat dan sedikit di bawah
      animate={{ opacity: 1, y: 0 }} // Posisi akhir: terlihat dan di posisi normal
      exit={{ opacity: 0, y: -20 }} // Posisi saat keluar: kembali tidak terlihat dan sedikit ke atas
      transition={{ duration: 0.5 }} // Durasi animasi
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
