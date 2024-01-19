import { getClient } from "../../appolo/client";
import { gql } from "@apollo/client";
import React from "react";

const query = gql`
  query {
    events {
      id
      title
    }
  }
`;

export default async function ServerSide() {
  const { data } = await getClient().query<any>({
    query,
  });

  return (
    <div style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
      {data.events.map((event: any) => {
        return <div key={event.id}>{event.title}</div>;
      })}
    </div>
  );
}
