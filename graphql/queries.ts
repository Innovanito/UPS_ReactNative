import { gql, useQuery } from "@apollo/client";

const GET_QUERY = gql`
  query MyQuery {
    getCustomers {
      name
      value {
        email
        name
      }
    }
  }
`;
