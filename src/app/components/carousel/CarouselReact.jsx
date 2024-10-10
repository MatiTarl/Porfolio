'use client';
import Image from 'next/image';

//-----------------Carousel-----------------
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './carousel.css';
//-----------------Carousel-----------------

export default function Carousel() {
  let slides = [
    {
      href: 'https://trendy-web-lemon.vercel.app/',
      img: '/TrendyShop.png',
      id: 1,
    },
    {
      href: 'https://gastify-cloud.vercel.app/',
      img: '/GastifyPage.png',
      id: 2,
    },
    {
      href: 'https://abogado-page.vercel.app/',
      img: '/abogadoPage.png',
      id: 3,
    },
    {
      href: 'https://justo-blush.vercel.app/',
      img: '/EcconomyPage.png',
      id: 4,
    },
    {
      href: 'https://porfolio-matitarls-projects.vercel.app/',
      img: '/PorfolioPage.png',
      id: 5,
    },
    {
      href: 'https://ingcontecnica.com/',
      img: '/IngenieriaPage.png',
      id: 6,
    },
  ];

  return (
    <section className=" w-[100%] sm:max-w-[100%] md:max-w-[100%] lg:max-w-full">
      <div className="items-center flex flex-col text-center pb-10 ">
        <h2 className="text-2xl md:text-4xl text-white p-3">Mis proyectos</h2>
      </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: 'swiper-pagination', clickable: true }}
        navigation={{
          nextEl: 'swiper-button-next',
          prevEl: 'swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="relative items-center justify-center h-[200px] sm:h-[400px] md:h-[500px] "
      >
        {slides.map((slide) => {
          return (
            <SwiperSlide
              key={slide.id}
              className="max-w-[14rem] w-auto h-auto max-h-[0px] sm:max-w-[30rem] relative items-center justify-center mt-10"
            >
              <div className="w-96 h-52 ">
                <div className="">
                  <a href={slide.href}>
                    <img
                      src={slide.img}
                      className="max-w-[14rem] w-auto h-auto rounded-xl hover:animate-desplazarArriba animate-volverAbajo sm:max-w-[30rem] transition duration-700 "
                      alt="Slides de proyectos"
                    />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
