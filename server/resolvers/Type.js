module.exports = {
  Movie: {
    id: parent => parent.id || parent._id,
    created: async (parent, _, { db }) => {
      const director = await db.collection('directors').findOne({ login: parent.directorLogin });
      return director;
    }
  },
  Director: {
    id: parent => parent.id || parent._id,
  }
};