import { MovieScheduleByDay } from "../widgets/MovieScheduleByDay";
import { Cinemas } from "../widgets/Cinemas";
import { gql } from "@apollo/client";
import { getClient } from "@/appolo/client";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const GET_MOVIES = gql`
  {
    movies {
      id
      name
      media
      categories {
        id
        name
      }
    }
    cinemas {
      id
      name
      address
      longitude
      latitude
      media
      halls {
        id
        name
      }
    }
  }
`;

const IndexPage = async () => {
  const { data } = await getClient().query<any>({
    query: GET_MOVIES,
  });

  return (
    <div className="space-y-8">
      <MovieScheduleByDay movies={data.movies} />
      <Cinemas cinemas={data.cinemas} />
    </div>
  );
};

export default IndexPage;
