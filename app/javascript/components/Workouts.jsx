import React from "react";

import { useQuery, gql } from "@apollo/client";

const WORKOUTS = gql`
  query {
    fetchUser(email: "sean@gmail.com") {
      workouts {
        id
        startedAt
        workoutExercises {
          exercise {
            name
          }
          strengthSets {
            id
            reps
            lbs
          }
        }
      }
    }
  }
`;

const Workouts = () => {
  const { loading, error, data } = useQuery(WORKOUTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const {
    fetchUser: { workouts },
  } = data;
  return (
    <div>
      <div>Workouts</div>
      {workouts.map((workout) => (
        <div>
          <div>{workout.startedAt}</div>
          {workout.workoutExercises.map((workoutExercise) => (
            <div>
              <div>{workoutExercise.exercise.name}</div>
              <div>
                {workoutExercise.strengthSets.map((set) => (
                  <div>
                    <div>{set.reps}</div>
                    <div>{set.lbs}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Workouts;
