"use client";

import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { MovieCard } from "@/components/MovieCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const breakpoints = {
  640: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 40,
  },
  1024: {
    slidesPerView: 6,
    spaceBetween: 50,
  },
};

const IndexPage = () => {
  return (
    <>
      <div className="space-y-8">
        <section className="container mx-auto">
          <h3 className="text-white text-xl">Popular</h3>
          <div className="mt-4">
            {/*<Swiper breakpoints={breakpoints}>*/}
            {/*  <SwiperSlide>*/}
            <MovieCard />
            {/*  </SwiperSlide>*/}
            {/*</Swiper>*/}
          </div>
        </section>
        <section className="container mx-auto">
          <h3 className="text-white text-xl">New</h3>
        </section>
      </div>
    </>
  );
};

export default IndexPage;
