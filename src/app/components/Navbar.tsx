// src/app/components/Navbar.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const navLinks = [
    { id: 1, name: "Tentang Saya", path: "/about" },
    { id: 2, name: "Proyek", path: "/projects" },
    { id: 3, name: "Kontak", path: "/contact" },
  ];

  return (
    // ===== PERUBAHAN 1: Tambahkan 'relative' =====
    <nav className="fixed top-0 left-0 w-full h-[80px] flex justify-between items-center px-4 md:px-8 bg-gray-900/30 backdrop-blur-md text-gray-300 z-50 relative">
      {/* Logo / Nama (Sisi Kiri) */}
      <div className="z-10">
        <Link href="/">
          <h1 className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
            Ihsan Ardiansyah
          </h1>
        </Link>
      </div>

      {/* ===== PERUBAHAN 2: Menu Desktop diposisikan di tengah secara absolut ===== */}
      <ul className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center space-x-8">
        {navLinks.map(({ id, name, path }) => (
          <li key={id}>
            <Link
              href={path}
              className="hover:text-cyan-400 transition-colors duration-300 px-3 py-2 rounded-md"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Ikon Sosial Media (Sisi Kanan) */}
      <div className="hidden md:flex items-center space-x-4 z-10">
        <a
          href="https://www.linkedin.com/in/ihsanardiansyah"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            size={25}
            className="hover:text-cyan-400 transition-colors duration-300"
          />
        </a>
        <a
          href="https://github.com/ihsanardians"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            size={25}
            className="hover:text-cyan-400 transition-colors duration-300"
          />
        </a>
      </div>

      {/* Ikon Hamburger untuk Mobile */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <HiMenu size={30} /> : <HiX size={30} />}
      </div>

      {/* Menu untuk Mobile (Tidak ada perubahan di sini) */}
      <ul
        className={
          nav
            ? "absolute top-0 left-0 w-full h-screen bg-gray-900 flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        {/* ... (isi menu mobile tetap sama) ... */}
      </ul>
    </nav>
  );
};

export default Navbar;
