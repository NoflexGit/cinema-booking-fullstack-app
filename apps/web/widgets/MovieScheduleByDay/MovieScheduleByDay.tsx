import { Swiper, SwiperSlide } from "swiper/react";
import { MovieCard } from "@/components/MovieCard";
import { MOVIE_SLIDER_BREAKPOINTS } from "@/constants";
import { gql, useQuery } from "@apollo/client";

const GET_MOVIES = gql`
  {
    movies {
      id
      name
    }
  }
`;

export const MovieScheduleByDay = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);

  return (
    <section className="container mx-auto">
      <h3 className="text-white text-xl">Popular</h3>
      <div className="mt-4">
        <Swiper breakpoints={MOVIE_SLIDER_BREAKPOINTS}>
          <SwiperSlide>
            <MovieCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
