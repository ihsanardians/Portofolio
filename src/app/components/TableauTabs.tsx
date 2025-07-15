// src/app/components/TableauTabs.tsx
"use client";

import React, { useState } from "react";

type Tab = {
  name: string;
  embedUrl: string;
};

type TableauTabsProps = {
  tabs: Tab[];
};

const TableauTabs: React.FC<TableauTabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      {/* Tombol Tab */}
      <div className="mb-4 border-b border-gray-700">
        <nav
          className="-mb-px flex space-x-8 overflow-x-auto"
          aria-label="Tabs"
        >
          {tabs.map((tab, index) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(index)}
              className={`${
                activeTab === index
                  ? "border-cyan-400 text-cyan-400"
                  : "border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-300"
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors`}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Konten Tab (Dashboard) */}
      {/* ===== KODE INI SEKARANG MENGGABUNGKAN DUA TAMPILAN ===== */}
      <div
        className="w-full bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 
                   h-[600px] md:h-[85vh] overflow-x-auto md:overflow-hidden"
      >
        {tabs.map((tab, index) => (
          <div
            key={tab.name}
            className={`${
              activeTab === index ? "block" : "hidden"
            } w-full h-full`}
          >
            {/* Div ini memastikan dashboard punya ruang di mobile */}
            <div className="w-[800px] md:w-full h-full">
              <iframe
                src={tab.embedUrl}
                width="100%"
                height="100%"
                style={{ border: "none" }}
                title={tab.name}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableauTabs;
