import React from 'react'

export default function carousel2() {
    let slides = [
        {
          href: "",
          img: "/EcconomyPage.png",
        },
        {
          href: "",
          img: "/GastifyPage.png",
        },
        {
          href: "",
          img: "/abogadoPage.png",
        },
      ];
    //   let [current, setCurrent] = useState(0);

    //   let previousSlide = () => {
    //     if (current === 0) setCurrent(slides.length - 1);
    //     else setCurrent(current - 1);
    //   };
    
    //   let nextSlide = () => {
    //     if (current === slides.length - 1) setCurrent(0);
    //     else setCurrent(current + 1);
    //   };
    
  return (
    <section>
    <div className="flex flex-col justify-center items-center ">
      <div class=" items-center flex flex-col text-center pb-10">
        <h2 class="text-4xl text-white p-3">Proyectos</h2>
        <h5 class="text-white">Realizados</h5>
      </div>
      <div className="overflow-hidden relative shadow-[0px_10px_107px_5px_rgba(253,_253,_253,_0.2)] rounded-3xl sm:w-[800px]">
        <a href={""}>
          <div
            className={`flex transition ease-out duration-700 hs-carousel-body`}
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {slides.map((slide) => {
              return <img src={slide.img} alt="Slides de proyectos" key="" />;
            })}
          </div>
        </a>
      </div>
      <div className=" flex sm:absolute w-full justify-center sm:justify-between items-center text-white pt-5 sm:pt-0 px-2 sm:px-10 text-3xl">
        <button
          onClick={previousSlide}
          className="relative overflow-hidden rounded-md px-5 py-2.5 text-white transition-all duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:-translate-y-1 active:scale-x-90 active:scale-y-110"
        >
          {/* <Left /> */}
        </button>
        <button
          onClick={nextSlide}
          className="relative overflow-hidden rounded-md px-5 py-2.5 text-white transition-all duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:-translate-y-1 active:scale-x-90 active:scale-y-110"
        >
          {/* <Right /> */}
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
  )
}
