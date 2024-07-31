import React from 'react'
import Download from "../../../ui/icons/Download"
import { saveAs } from "file-saver";

export default function CurriculumButton() {

  const DescargarPDF = () => {
    saveAs("", "./CurriculumMatias.pdf");
  };

  return (
    <div className="text-white w-full h-auto flex justify-center p-4">
      <a href="/CurriculumMatias.pdf" download="Curriculum Matias Tari" className="w-50 w-40 bg-slate-100"></a>
  <button onClick={DescargarPDF} className="w-auto px-4 bg-zinc-200 h-10 flex rounded-3xl items-center" >
    <div className="pr-2">
      <Download />
    </div>
    <div className="text-slate-950">
        Curriculum
    </div>
  </button>
</div>

  )
}
