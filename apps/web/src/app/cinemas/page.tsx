import { getClient } from "@/appolo/client";
import { gql } from "@apollo/client";

const query = gql`
  query {
    cinemas {
      id
      name
      address
      longitude
      latitude
      halls {
        id
        name
      }
    }
  }
`;

const CinemasPage = async () => {
  const { data } = await getClient().query<any>({
    query,
  });

  return (
    <div className="text-white">
      {data.cinemas.map((cinema: any) => {
        return <div key={cinema.id}>{cinema.name}</div>;
      })}
    </div>
  );
};

export default CinemasPage;
