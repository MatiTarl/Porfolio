import React from "react";
import Download from "../../../ui/icons/Download";

export default function CurriculumButton() {
  return (
    <div className="text-white w-full h-auto flex justify-center p-4">
      <a
        href="/CurriculumMatias.pdf"
        download="Curriculum Matias Tari"
        className="w-auto px-4 bg-zinc-200 h-10 flex rounded-3xl items-center"
      >
        <div className="pr-2">
          <Download />
        </div>
        <div className="text-slate-950">Curriculum</div>
      </a>
    </div>
  );
}
