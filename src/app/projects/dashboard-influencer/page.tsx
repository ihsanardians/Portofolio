// src/app/projects/dashboard-influencer/page.tsx

import React from "react";
import Link from "next/link";
import { projectsData } from "@/lib/projects";
import PageWrapper from "@/app/components/PageWrapper";
import TableauTabs from "@/app/components/TableauTabs";

const project = projectsData["dashboard-influencer"];

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

export default function DashboardPage() {
  if (!project) return <div>Proyek tidak ditemukan.</div>;

  return (
    <PageWrapper>
      <div className="container mx-auto max-w-full px-4 md:px-8 pt-28 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
          {project.title}
        </h1>
        <p className="text-lg text-gray-400 mb-8">{project.course}</p>

        <div className="w-full my-8">
          <TableauTabs tabs={dashboardTabs} />
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 mt-8">Tentang Proyek</h2>
          <p className="text-gray-300 leading-relaxed mb-8">
            {project.description}
          </p>

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
      </div>
    </PageWrapper>
  );
}
