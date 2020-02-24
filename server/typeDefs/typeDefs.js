const { gql } = require('apollo-server-express');

const typeDefs = gql`
  
  type Movie {
    id: ID!
    name: String!
    genre: String!
    created: Director!
  }
  
  type Query {
    allMovies: [Movie!]!
    directors: [Director!]!
  }
  
  type Director {
    id: ID!
    name: String!
    age: Int!
    token: String!
    login: String!
    password: String!
    createdMovies(input: getCreatedMoviesInput!): [Movie!]!
  }
  
  type Mutation {
    authDirector(input: PostDirectorDataInput!): authPayload!
    postDirector(input: PostDirectorInput): Director!
    postMovie(input: PostMovieInput!): Movie!
  }
  
  type authPayload {
    director: Director!
  }
  
  input PostDirectorDataInput {
    login: String!
    password: String!
  }
  
  input getCreatedMoviesInput {
    token: String!
  }
  
  input PostDirectorInput {
    name: String!
    age: Int!
    login: String!
    password: String!
  }
  
  input PostMovieInput {
    name: String!
    genre: String!
    directorLogin: String!
  }
  `;


module.exports = typeDefs;