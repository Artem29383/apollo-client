import { gql } from 'apollo-boost';

export const AUTH_MUTATION = gql`
  mutation authDirector($input: PostDirectorDataInput!) {
    authDirector(input: $input) {
      director {
        name
        token
        age
        password
        login
      }
    }
  }
`;

export const POST_MOVIE = gql`
  mutation postMovie($input: PostMovieInput!) {
    postMovie(input: $input) {
      name
      genre
      created {
        name
        age
        login
      }
    }
  }
`;