import { gql } from '@apollo/client';
import { getClient } from '@/appolo/client';

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
    heroSlides {
      id
      title
      subtitle
      media
      movie {
        id
        media
        name
      }
    }
  }
`;

export const getMoviesData = async () => {
  const { data } = await getClient().query({
    query: GET_MOVIES,
  });
  return data;
};
