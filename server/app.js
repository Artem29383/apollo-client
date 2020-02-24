const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const expressPlayground = require('graphql-playground-middleware-express').default;
const typeDefs = require('./typeDefs/typeDefs');
const resolvers = require('./resolvers/index');
const config = require('config');
const { MongoClient } = require('mongodb');

const app = express();
const MONGO_DB = config.get('MongoURI');
const start = async () => {
  try {
    //create app
    const client = await MongoClient.connect(
      MONGO_DB,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    const db = client.db();
    
    
    //Создаем новый экземпляр сервера и передаем ему объект схемы и распознователь
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      context: async ({ req }) => {
        return { db };
      }
    });
    
    server.applyMiddleware({ app });
    //create home routing
    app.get('/', (req, res) => res.end(`Welcome to the PhotoShare API`));

//create playground routing
    app.get('/playground', expressPlayground({ endpoint: '/graphql' }));

//перехватываем события на определенном роуте
    const port = config.get('port');
    app.listen({ port }, () => {
      console.log(`GraphQL server is running: http://localhost:${port}, ${server.graphqlPath}`);
    });
  } catch (e) {
    console.error('Server error...');
    process.env.exit(1); //выходим из процесса сервера если ошибка
  }
};

start();


/*
query getPhotosLenght {
  totalPhotos
}

query getArrayPhotos {
  allPhotos {
    name
    url
		postedBy {
      name
    }
  }
}

mutation newPhoto($input: PostPhotoInput!) {
 postPhoto(input:$input) {
 id
 name
 url
 description
 category
 }
}
 */


/*
query getPhotosLenght {
  totalPhotos
}

query getArrayPhotos {
  allPhotos {
    name
    description
    id
  }
}

mutation newPhoto($name: String! $description: String) {
  postPhoto(name: $name description: $description) {
    id
    name
    description
  }
}
 */