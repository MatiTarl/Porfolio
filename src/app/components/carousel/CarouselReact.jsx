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
    <section className="flex flex-col justify-center items-center">
      <div className="overflow-hidden relative w-[60%] shadow-[0px_10px_107px_5px_rgba(253,_253,_253,_0.2)] rounded-3xl">
        <a href="#">
          <div
            className={`flex transition ease-out duration-700 hs-carousel-body`}
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          > 
            {slides.map((slide) => {
              return  <img src={slide} alt="Slides de proyectos" key=""/>
            })}
          </div>
        </a>
      </div>
      <div className="absolute w-full justify-between items-center flex text-white px-2 sm:px-10 text-3xl">
        <button onClick={previousSlide}>
          <Left />
        </button>
        <button onClick={nextSlide}>
          <Right />
        </button>
      </div>
      <div className=" bottom-0 sm:py-12 flex justify-center gap-3 w-full">
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
