import { getClient } from "../../../appolo/client";
import React from "react";
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

const CinemaPage = async () => {
  const { data } = await getClient().query<any>({
    query,
  });

  return <div className="text-white">123</div>;
};

export default CinemaPage;
