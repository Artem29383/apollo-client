const fetch = require('node-fetch');


module.exports = {
  async postMovie(_, args, { db }) {
    const newFilm = {
      ...args.input
    };
    
    const { insertedIds } = await db.collection('movies').insertOne(newFilm);
    newFilm.id = insertedIds;
    return newFilm;
  },
  async postDirector(_, args, { db }) {
    const newDirector = {
      ...args.input,
      token: Date.now()
    };
    
    newDirector.id = await db.collection('directors').insertOne(newDirector);
    
    return newDirector
    
  },
  async authDirector(_, { input: { login, password } }, { db }) {
    try {
      const director = await db.collection('directors').findOne({ login: login });
      if (!director) throw new Error('Unknown user');
      
      if (password !== director.password) throw new Error('Invalid password');
      
      return {director};
      
    } catch (message) {
      throw new Error(message);
    }
  }
};