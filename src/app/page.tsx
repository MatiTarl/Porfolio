"use client"

import "../ui/global.css"
import Image from "next/image";
import SocialBar from "./components/socialBar/Social"
import MatiImage from "../ui/images/MatiImageSinFondo1.png"
import CucrriculumButton from "./components/buttons/CurriculumButton"
import Carousel from "./components/carousel/CarouselReact"

export default function Home() {
  return (
    <header className="w-full flex flex-col mt-5">
      <div className="mx-auto flex md:flex-row flex-col py-20 md:space-x-20 w-9/12 items-center justify-center">
        <div className="flex flex-col items-center max-w-xl">
          <div className="flex justify-center">
            <div className="text-center">
              <h2 className="text-5xl tracking-tight font-normal text-white">
                Matias Tari
              </h2>
              <h4 className="text-white font-normal text-2xl pt-2">
                FullStack Web Developer
              </h4>
            </div>
          </div>
          <p className="text-white text-center w-11/12 pt-5 text-xl"></p>
          <p className="text-white text-center w-11/12 pt-5">
            Bienvenido/a! Graduado del bootcamp de Henry, descubrí la inmensidad del
            mundo de la programación y su potencial para soluciones infinitas.
            Contáctame por cualquier consulta.
          </p>
          <CucrriculumButton/>
        </div>
        <div className="max-w-40 sm:max-w-60 md:max-w-80 items-center flex justify-center">
          <Image
            className="img rounded-3xl"
            src={MatiImage}
            alt="MatiImage"
          />
        </div>
      </div>
      <SocialBar />
      <div className="pt-20 px-5 flex justify-center">
        <Carousel />
      </div>
    </header>

  );
}
