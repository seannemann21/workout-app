import React from "react";
import { UserSessionProvider } from "./userSesssion";
import AppRouter from "./AppRouter";
import './App.css'

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <UserSessionProvider>
      <ApolloProvider client={client}>
        <AppRouter />
      </ApolloProvider>
    </UserSessionProvider>
  );
};

export default App;
