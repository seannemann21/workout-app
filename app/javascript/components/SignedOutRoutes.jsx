import React from 'react'
import {
  Switch,
  Route,
} from "react-router-dom";
import SignIn from './SignIn'
import SignUp from './SignUp'
import About  from './About'

const SignedOutRoutes = ({setUser}) => {
  return (
        <Switch>
          <Route path="/sign-in">
            <SignIn setUser={setUser} />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
  );
}

export default SignedOutRoutes
