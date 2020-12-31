import React from 'react'
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from './Home'
import WorkoutFlow from './WorkoutFlow'
import Workouts from './Workouts'
import Exercises from './Exercises'


const SignedInRoutes = () => {
  return (
    <>
      <Switch>
        <Route path="/workouts">
          <Workouts />
        </Route>
        <Route path="/exercises">
          <Exercises />
        </Route>
        <Route path="/new-workout">
          <WorkoutFlow />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default SignedInRoutes
