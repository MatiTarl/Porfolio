"use client";


import { useState } from "react";
//-----------------ICONS-----------------
import Right from "../../../ui/icons/right";
import Left from "../../../ui/icons/left";
//-----------------ICONS-----------------
//-----------------Carousel-----------------
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./carousel.css"
//-----------------Carousel-----------------

export default function Carousel() {
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
    {
      href: "",
      img: "/GastifyPage.png",
    },
  ];

  return (
    <section className="container ">
      <div className="items-center flex flex-col text-center pb-10">
        <h2 className="text-4xl text-white p-3">Proyectos</h2>
        <h5 className="text-white">Realizados</h5>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        onAutoplay={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: "swiper-pagination", clickable: true }}
        navigation={{
          nextEl: "swiper-button-next",
          prevEl: "swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="relative items-center justify-center h-[600px]"
      >
        {slides.map((slide) => {
          return (
            <>
              <SwiperSlide className="max-w-[10rem] sm:max-w-[30rem] relative items-center justify-center mt-10">
                <div className="w-96 h-52 cardP ">
                  <div className="">
                    <a href="https://www.google.com.ar">
                      <img
                        src={slide.img}
                        className="max-w-[10rem] rounded-xl hover:animate-desplazarArriba animate-volverAbajo sm:max-w-[30rem] transition duration-700 "
                        alt="Slides de proyectos"
                      />
                    </a>
                  </div>
                  <div></div>
                </div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </section>
  );
}
