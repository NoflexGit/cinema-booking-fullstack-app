"use client";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import { MovieScheduleByDay } from "../widgets/MovieScheduleByDay/MovieScheduleByDay";

const IndexPage = () => {
  return (
    <div className="space-y-8">
      <MovieScheduleByDay />
    </div>
  );
};

export default IndexPage;
