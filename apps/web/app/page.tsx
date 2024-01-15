"use client";

import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
    <div className="space-y-8">
      <Swiper
        modules={[Autoplay, EffectFade]}
        spaceBetween={0}
        effect="fade"
        className="h-[700px] w-full"
        autoplay={{
          delay: 10000,
          disableOnInteraction: true,
        }}
        loop
      >
        <SwiperSlide>
          <img
            className="object-cover h-full w-full"
            src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover h-full w-full"
            src="https://images.unsplash.com/photo-1497015289639-54688650d173?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </SwiperSlide>
      </Swiper>
      <section className="container mx-auto">
        <h3 className="text-white text-xl">Popular</h3>
        <div className="mt-4">
          <Swiper breakpoints={breakpoints}>
            <SwiperSlide>
              <div className="h-72 w-full bg-amber-500" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-72 w-full bg-amber-500" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-72 w-full bg-amber-500" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-72 w-full bg-amber-500" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-72 w-full bg-amber-500" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-72 w-full bg-amber-500" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className="container mx-auto">
        <h3 className="text-white text-xl">New</h3>
      </section>
    </div>
  );
};

export default IndexPage;
