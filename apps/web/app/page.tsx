import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { getMoviesData } from '@/services/movies';
import { MovieScheduleByDay } from '@/widgets/MovieScheduleByDay';
import { Cinemas } from '@/widgets/Cinemas';

const IndexPage = async () => {
  const data = await getMoviesData();

  return (
    <div className="space-y-8">
      <MovieScheduleByDay movies={data.movies} />
      <Cinemas cinemas={data.cinemas} />
    </div>
  );
};

export default IndexPage;
