"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { MovieCard } from "@/components/MovieCard";
import { MOVIE_SLIDER_BREAKPOINTS } from "@/constants";

type Props = {
  movies: Array<{
    id: string;
    name: string;
    media: string;
    categories: Array<{
      id: string;
      name: string;
    }>;
  }>;
};

export const MovieScheduleByDay = ({ movies }: Props) => {
  return (
    <section className="container mx-auto px-4">
      <h3 className="text-white text-xl font-semibold">In our cinemas</h3>
      <div className="mt-4">
        <Swiper breakpoints={MOVIE_SLIDER_BREAKPOINTS}>
          {movies.map((movie: any) => (
            <SwiperSlide key={movie.id}>
              <MovieCard
                id={movie.id}
                key={movie.id}
                title={movie.name}
                imageUrl={movie.media}
                categories={movie.categories}
                price={9.99}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
