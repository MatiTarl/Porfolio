import { useState } from "react";
import Right from "../../../ui/icons/right";
import Left from "../../../ui/icons/left";
import Image from "next/image";

export default function Carousel() {
  let slides = [
    "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
  ];
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <section>
      <div className="flex flex-col justify-center items-center">
        <div className="overflow-hidden relative sm:w-[60%] shadow-[0px_10px_107px_5px_rgba(253,_253,_253,_0.2)] rounded-3xl">
          <a href="https://google.com.ar">
            <div
              className={`flex transition ease-out duration-700 hs-carousel-body`}
              style={{
                transform: `translateX(-${current * 100}%)`,
              }}
            >
              {slides.map((slide) => {
                return <img src={slide} alt="Slides de proyectos" key="" />;
              })}
            </div>
          </a>
        </div>
        <div className=" flex sm:absolute w-full justify-center sm:justify-between items-center text-white pt-5 sm:pt-0 px-2 sm:px-10 text-3xl">
          <button
            onClick={previousSlide}
            className="relative overflow-hidden rounded-md px-5 py-2.5 text-white transition-all duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:-translate-y-1 active:scale-x-90 active:scale-y-110"
          >
            <Left />
          </button>
          <button
            onClick={nextSlide}
            className="relative overflow-hidden rounded-md px-5 py-2.5 text-white transition-all duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:-translate-y-1 active:scale-x-90 active:scale-y-110"
          >
            <Right />
          </button>
        </div>
      </div>
      <div className="hidden sm:flex bottom-0 sm:py-12 justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-5 h-5 cursor-pointer duration-700 ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </section>
  );
}
