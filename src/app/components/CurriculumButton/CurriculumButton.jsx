import React from 'react';
import Download from '../../../ui/icons/Download';

export default function CurriculumButton() {
  return (
    <div className="text-white w-full h-auto flex justify-center p-4">
      <a
        href="/CurriculumMatias.pdf"
        download="Curriculum Matias Tari"
        className="group w-auto px-4  h-10 flex rounded-3xl items-center relative overflow-hidden  bg-zinc-200  py-2.5 transition-all duration-200 hover:bg-zinc-300 hover:ring-offset-2 active:ring-2 active:ring-zinc-100 active:scale-110 "
      >
        <div className="pr-2">
          <Download />
        </div>
        <span className="text-slate-950">Curriculum</span>
        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
          <div className="relative h-full w-8 bg-sky-700/20"></div>
        </div>
      </a>
    </div>
  );
}
