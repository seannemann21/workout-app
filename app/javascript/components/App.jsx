import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useLocalStorage } from 'react-use';
import Header from "./Header";
import SignedInRoutes from "./SignedInRoutes";
import SignedOutRoutes from "./SignedOutRoutes";

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
});

const App = () => {
  const [user, setUser] = useState(null)
  const [value, setValue, remove] = useLocalStorage('userSession', null);
  
  const signedIn = !!value;
  return (
    <ApolloProvider client={client}>
      <Router>
        {signedIn ? (
          <>
            <Header />
            <SignedInRoutes />
          </>
        ) : (
          <SignedOutRoutes setUser={setUser} />
        )}
      </Router>
    </ApolloProvider>
  );
};

export default App;
