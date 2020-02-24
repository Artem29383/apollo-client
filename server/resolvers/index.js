const Mutation = require('./Mutation');
const Query = require('./Query');
const Type = require('./Type');

const resolvers = {
  Query,
  Mutation,
  ...Type
};

module.exports = resolvers;