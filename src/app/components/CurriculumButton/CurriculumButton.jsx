import React from 'react'
import Download from "../../../ui/icons/Download"
import { saveAs } from "file-saver";

export default function CurriculumButton() {

  // const DescargarPDF = () => {
  //   saveAs("", "./CurriculumMatias.pdf");
  // };

  const DescargarPDF = () => {
    const pdfUrl = "./CurriculumMatias.pdf"; // Ruta relativa al archivo PDF
    window.open(pdfUrl, "_blank");
  };

  return (
    <div className="text-white w-full h-auto flex justify-center p-4">
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
