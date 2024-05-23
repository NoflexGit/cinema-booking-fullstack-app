import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { getMoviesData } from '@/services/movies';
import { MovieScheduleByDay } from '@/widgets/MovieScheduleByDay';
import { Cinemas } from '@/widgets/Cinemas';
import { MainSlider } from '@/widgets/MainSlider';

const IndexPage = async () => {
  const data = await getMoviesData();

  return (
    <div className="mt-8 space-y-8">
      <MainSlider />
      <MovieScheduleByDay movies={data.movies} />
      <Cinemas cinemas={data.cinemas} />
    </div>
  );
};

export default IndexPage;
