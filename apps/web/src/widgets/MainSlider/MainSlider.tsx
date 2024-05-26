'use client';

import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import Image from 'next/image';
import { Thumbs, FreeMode, Mousewheel, Autoplay } from 'swiper/modules';
import { useState } from 'react';

type Props = {
  slides: any[];
};

export const MainSlider = ({ slides }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const onSlideChange = (swiper: SwiperClass) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <section className="container mx-auto px-4">
      <div className="grid grid-cols-7 gap-4">
        <div className="col-span-5 h-[500px] w-full overflow-hidden rounded-2xl bg-gray-800">
          <Swiper
            className="h-full w-full"
            modules={[Thumbs, Autoplay]}
            autoplay={{ delay: 5000 }}
            onSlideChange={onSlideChange}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
          >
            {slides.map((slide: any) => (
              <SwiperSlide key={slide.id}>
                <div className="relative h-full">
                  <Image
                    className="h-full w-full object-cover object-center"
                    src={slide.media}
                    alt={slide.title}
                    width={1000}
                    height={500}
                  />
                  <div className="absolute bottom-0 left-0 flex w-full items-center gap-6 bg-gradient-to-t from-gray-800 px-8 py-4">
                    <div className="h-48 w-36">
                      <Image
                        className="h-full w-full object-cover object-center"
                        src={slide.movie.media}
                        alt={slide.movie.media}
                        width={200}
                        height={300}
                      />
                    </div>
                    <div className="text-white">
                      <h3 className="text-2xl">{slide.title}</h3>
                      <p>{slide.subtitle}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="col-span-2 flex h-[500px] flex-col justify-center">
          <Swiper
            modules={[Thumbs, FreeMode, Mousewheel]}
            onSwiper={setThumbsSwiper}
            className="h-full w-full"
            spaceBetween={10}
            slidesPerView={3}
            direction="vertical"
            mousewheel
            watchSlidesProgress
            freeMode
          >
            {slides.map((slide: any, index) => (
              <SwiperSlide key={slide.id} className="w-24">
                <div
                  className={`flex h-full w-full cursor-pointer gap-8 rounded-2xl p-4 text-white transition-colors duration-200 ease-in-out
                    ${activeIndex === index ? 'bg-gray-700' : 'bg-gray-800'}
                  `}
                >
                  <div className="h-30 w-24 flex-none">
                    <Image
                      className="h-full w-full object-cover object-center"
                      src={slide.movie.media}
                      alt={slide.movie.media}
                      width={200}
                      height={300}
                    />
                  </div>
                  <div className="text-white">
                    <h3 className="text-xl">{slide.title}</h3>
                    <p className="text-sm">{slide.subtitle}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
