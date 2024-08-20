'use client';

import '../ui/global.css';
import Image from 'next/image';
import SocialBar from './components/socialBar/Social';
import MatiImage from '../ui/images/MatiImageSinFondo1.png';
import CucrriculumButton from './components/CurriculumButton/CurriculumButton';
import Carousel from './components/carousel/CarouselReact';
import ContactForm from './components/ContactForm/ContactForm';

export default function Home() {
  const elementosParaCometas = ['1', '2', '3', '4', '5', '6', '7', '8'];
  const cometas = [];
  const elementosParaCometas2 = ['1', '2', '3', '4', '5', '6', '7', '8'];
  const cometas2 = [];

  for (let i = 1; i < elementosParaCometas.length; i++) {
    cometas.push(
      <div className={`bird b${i}`}>
        <div className="body"></div>
      </div>,
    );
  }
  for (let i = 1; i < elementosParaCometas2.length; i++) {
    cometas2.push(
      <div className={`bird2 a${i}`}>
        <div className="body2"></div>
      </div>,
    );
  }

  return (
    <header className="w-full flex flex-col text-white">
      <div className="birds front ">{cometas}</div>
      <div className="birds2 front2 ">{cometas2}</div>
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
            <p className="">
              ¡Hola! Soy Matías Tari, un desarrollador web Full Stack con una
              sólida experiencia en diversas tecnologías. <br />
              Manejo{' '}
              <button className="">
                <p className=" text-sky-600 animate-pulse text-tecno">
                  estas tecnología
                </p>
              </button>{' '}
              como si fueran extensiones de mi propio ser. Si hay un bug, lo
              encuentro; si hay un diseño, lo mejoro; y si hay café, lo bebo. ☕️
            </p>
            <div></div>
          </div>
          <CucrriculumButton />
        </div>
        <div className=" z-50 max-w-40 sm:max-w-60 md:max-w-80 items-center flex justify-center">
          <Image className="img " src={MatiImage} alt="MatiImage" />
        </div>
      </div>
      <SocialBar />
      <div className="pt-20 flex justify-center">
        <Carousel />
      </div>
      <div className="pt-10 sm:pt-5 flex justify-center flex-col text-center ">
        <h1 className="text-xl sm:text-3xl md:text-4xl pb-14">
          Contactame para futuros proyectos
        </h1>
        <ContactForm />
      </div>
    </header>
  );
}
function div(arg0: string): any {
  throw new Error('Function not implemented.');
}
