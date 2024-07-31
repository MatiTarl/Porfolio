import React from 'react'
import Download from "../../../ui/icons/Download"
import PdfC from "../../../../public/PdfC.pdf"

export default function CurriculumButton() {
  return (
    <div class="text-white w-full h-auto flex justify-center p-4">
  <a class="w-auto px-4 bg-zinc-200 h-10 flex rounded-3xl items-center" href={PdfC} download="Curriculum Matias Tari">
    <div class="pr-2">
      <Download />
    </div>
    <div class="text-slate-950">
        Curriculum
    </div>
  </a>
</div>

  )
}
