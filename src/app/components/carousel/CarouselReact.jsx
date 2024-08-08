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
    <section className="container">
      <div className="items-center flex flex-col text-center pb-10">
        <h2 className="text-4xl text-white p-3">Proyectos</h2>
        <h5 className="text-white">Realizados</h5>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
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
        className="relative items-center justify-center h-[600px] hover:animate-desplazarArriba animate-volverAbajo"
      >
        {slides.map((slide) => {
          return (
            <>
              <SwiperSlide className="sm:max-w-[30rem] ">
                <div className="sm:max-w-[30rem] ">
                  <a href="https://www.google.com.ar">
                    <img
                      src={slide.img}
                      className="rounded-xl sm:max-w-[30rem] hover:blur-[1px] hover: transition duration-700 "
                      alt="Slides de proyectos"
                    />
                  </a>
                </div>
              </SwiperSlide>
            </>
          );
        })}

        {/* <div className="relative pb-8 flex items-center justify-center">
          <div className="swiper-button-prev">
            <Right></Right>
          </div>
          <div className="swiper-button-next">
            <Left></Left>
          </div>
          <div className="swiper-pagination"></div>
        </div> */}
      </Swiper>
    </section>
  );
}
