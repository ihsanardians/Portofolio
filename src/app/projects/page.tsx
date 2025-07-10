// src/app/projects/page.tsx

import React from "react";
import DigitalMind from "@/app/components/DigitalMind";
import PageWrapper from "@/app/components/PageWrapper";

// Ini adalah Server Component yang benar, tanpa async
export default function ProjectsPage() {
  return (
    <PageWrapper>
      <DigitalMind />
    </PageWrapper>
  );
}
