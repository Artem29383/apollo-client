const { ObjectID } = require('mongodb');


module.exports = {
  allMovies: (parent, args, { db }) => db.collection('movies').find().toArray(),
};