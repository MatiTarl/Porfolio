import Image from 'next/image';
import SocialBar from './components/socialBar/Social';
import MatiImage from '../ui/images/MatiImageSinFondo1.png';
import CucrriculumButton from './components/CurriculumButton/CurriculumButton';
import ProyectosSection from './components/proyectos/ProyectosSection';
import TecnologiasSection from './components/tecnologias/TecnologiasSection';
import CanvaCometa from './components/Cometas/CanvaCometa';

export default function Home() {
  return (
    <main className="w-full flex flex-col text-white ">
      <CanvaCometa />
      <section id="HeadSection">
        <div className=" mx-auto flex md:flex-row flex-col-reverse mb-20 mt-20 md:mt-28 lg:mt-36 md:space-x-0 lg:space-x-20 w-full items-center justify-center">
          <div className="flex flex-col items-center max-w-xl">
            <div className="flex justify-center">
              <div className="text-center font-normal ">
                <h2 className="text-5xl tracking-tight ">Matias Tari</h2>
                <h4 className="text-2xl pt-2">FullStack Web Developer</h4>
              </div>
            </div>
            <div className="w-11/12 p-5 text-center">
              <p className="text-xl">Bienvenido/a!</p>
              <div className="">
                ¡Hola! Soy Matías Tari, un desarrollador web Full Stack con una
                sólida experiencia en diversas{' '}
                <a
                  href="#tecnologias"
                  className=" text-sky-600 animate-pulse text-tecno"
                >
                  tecnologías{' '}
                </a>
                como si fueran extensiones de mi propio ser. Si hay un bug, lo
                encuentro; y si hay un diseño, lo mejoro.
              </div>
            </div>
            <CucrriculumButton />
          </div>
          <div className=" z-50 max-w-40 sm:max-w-60 md:max-w-80 items-center flex justify-center">
            <Image className="img " src={MatiImage} alt="MatiImage" />
          </div>
        </div>
      </section>
      <section id="SocialBar">
        <SocialBar />
      </section>
      <section id="proyectos">
        <div className="pt-20 pb-20 flex justify-center">
          <ProyectosSection />
        </div>
      </section>
      <section id="tecnologias">
        <div className="w-full items-center pb-10">
          <TecnologiasSection />
        </div>
      </section>
      <section id="contacto">
        <div className="pt-10 sm:pt-5 flex justify-center flex-col items-center text-center px-4">
          <h2 className="text-2xl md:text-4xl pb-6">
            Contactame para futuros proyectos
          </h2>
          <p className="max-w-xl pb-8 text-zinc-300">
            ¿Tenés una idea o un proyecto en mente? Escribime y lo charlamos.
          </p>
          <a
            href="mailto:Matiastari@outlook.com.ar"
            className="rounded-3xl bg-zinc-200 px-6 py-2.5 text-slate-950 transition-all duration-200 hover:bg-zinc-300"
          >
            Enviar un mail
          </a>
        </div>
      </section>
    </main>
  );
}
