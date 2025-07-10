// src/app/contact/page.tsx
"use client";

import PageWrapper from "@/app/components/PageWrapper";
import React from "react"; // Kita tidak butuh useState lagi
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

// Komponen ContactInfo tidak berubah
const ContactInfo = ({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: any;
  title: string;
  value: string;
  href: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg transition-colors hover:bg-gray-700"
  >
    <Icon className="text-cyan-400" size={24} />
    <div>
      <p className="text-gray-400 text-sm">{title}</p>
      <p className="text-white font-medium">{value}</p>
    </div>
  </a>
);

export default function ContactPage() {
  // Fungsi handleSubmit sekarang lebih sederhana
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch(
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSFFCOuOLkAYtmvmS4Yz7t1eCKyF9QUwAW3TJQIIARG1NPkdaQ/formResponse",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      );
      // ===== INI BAGIAN YANG DIUBAH =====
      alert("Terima kasih! Pesan Anda telah berhasil terkirim.");
      form.reset(); // Ini akan mengosongkan form setelah berhasil dikirim
    } catch (e) {
      console.error(e);
      alert("Terjadi kesalahan, silakan coba lagi.");
    }
  };

  // Kita tidak butuh blok "if (submitted)" lagi
  return (
    <PageWrapper>
      <div className="container mx-auto max-w-4xl px-4 py-28 md:py-32">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Mari Terhubung!
          </h1>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Saya selalu terbuka untuk diskusi mengenai proyek, peluang
            kolaborasi, atau sekadar bertukar pikiran tentang teknologi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-4">
            <ContactInfo
              icon={FaEnvelope}
              title="Email"
              value="ardiansyahihsan01@gmail.com"
              href="mailto:ardiansyahihsan01@gmail.com"
            />
            <ContactInfo
              icon={FaWhatsapp}
              title="WhatsApp"
              value="0877-3341-8008"
              href="https://wa.me/6287733418008"
            />
            <ContactInfo
              icon={FaLinkedin}
              title="LinkedIn"
              value="linkedin.com/in/ihsanardiansyah"
              href="https://linkedin.com/in/ihsanardiansyah"
            />
            <ContactInfo
              icon={FaGithub}
              title="GitHub"
              value="github.com/ihsanmsy"
              href="https://github.com/ihsanmsy"
            />
          </div>

          <div className="bg-gray-800/50 p-6 md:p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Atau Kirim Pesan Langsung
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-400 mb-2">
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  name="entry.2044286897"
                  required
                  className="w-full p-3 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="entry.1506428585"
                  required
                  className="w-full p-3 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-400 mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="entry.575249029"
                  required
                  rows={4}
                  className="w-full p-3 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
