import * as express from "express";
import { ApolloServer } from "apollo-server-express";
import { schema } from "./schema";

const app = express();

const apolloServer = new ApolloServer({ schema });
apolloServer.applyMiddleware({ app });

app.listen(4000, () => {
  console.log(
    "Server is listening on http://localhost:4000\nGraphQL Playground is listening on http://localhost:4000/graphql"
  );
});
