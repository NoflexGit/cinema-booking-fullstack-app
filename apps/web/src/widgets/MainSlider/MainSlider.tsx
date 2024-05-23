'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

const items = [
  {
    id: '1',
    name: 'The Matrix',
    media: 'https://via.placeholder.com/300',
    categories: [{ id: '1', name: 'Action' }],
  },
  {
    id: '2',
    name: 'The Matrix Reloaded',
    media: 'https://via.placeholder.com/300',
    categories: [{ id: '1', name: 'Action' }],
  },
  {
    id: '3',
    name: 'The Matrix Revolutions',
    media: 'https://via.placeholder.com/300',
    categories: [{ id: '1', name: 'Action' }],
  },
];

export const MainSlider = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="grid grid-cols-7 gap-4">
        <div className="col-span-5 h-[500px] w-full">
          <Swiper className="h-full w-full">
            {items.map((movie: any) => (
              <SwiperSlide key={movie.id}>
                <div className="relative h-full">
                  <Image
                    className="h-full w-full object-cover object-center"
                    src={movie.media}
                    alt={movie.name}
                    width={1000}
                    height={500}
                  />
                  <div
                    className={
                      'absolute bottom-0 left-0 w-full bg-gradient-to-t from-gray-800 p-4 backdrop-blur-sm'
                    }
                  >
                    <h3 className="text-lg text-white">{movie.name}</h3>
                    {movie.categories.map((category: any) => (
                      <span key={category.id} className="text-white">
                        {category.name}
                      </span>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="col-span-2 bg-blue-500">124</div>
      </div>
    </section>
  );
};
