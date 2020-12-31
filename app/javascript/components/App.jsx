import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import SignedInRoutes from "./SignedInRoutes";
import SignedOutRoutes from "./SignedOutRoutes";

const App = () => {
  const signedIn = true;
  return (
    <>
      <Router>
        {signedIn ? (
          <>
            <Header />
            <SignedInRoutes />
          </>
        ) : (
          <SignedOutRoutes />
        )}
      </Router>
    </>
  );
};

export default App;
