import { gql } from 'apollo-boost';

export const ROOT_QUERY = gql`
  query allMovies {
    allMovies {
      id
      name
      genre
    }
  }
`;