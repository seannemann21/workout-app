import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faDumbbell } from "@fortawesome/free-solid-svg-icons";

import { useQuery, gql } from "@apollo/client";

const WORKOUTS = gql`
  query {
    fetchUser(email: "sean@gmail.com") {
      workouts {
        id
        startedAt
        workoutType
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

const workoutIcon = (workoutType) => {
  switch (workoutType) {
    case "strength":
      return faDumbbell;
    case "cardio":
      return faHeart;
    default:
      return null;
  }
};

const CompletedExcercise = ({ workoutExercise }) => (
  <div>
    <div className="bg-gray-500 w-56 ml-4 h-16">
      <div className="text-white ml-4">{workoutExercise.exercise.name}</div>
    </div>
    <div>
      {workoutExercise.strengthSets.map((set) => (
        <div className="flex ml-8 border-solid border-2 w-48">
          <div className="w-8 border-l-solid border-r-2">{set.reps}</div>
          <div>{set.lbs}</div>
        </div>
      ))}
    </div>
  </div>
);

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
        <div className="ml-4">
          <div className="flex">
            <div className="w-16 h-16 bg-gray-100 rounded-l-3xl border-4 border-gray-600 flex justify-center items-center mb-4">
              <div className="text-4xl text-gray-600">
                <FontAwesomeIcon icon={workoutIcon(workout.workoutType)} />
              </div>
            </div>
            <div
              style={{ alignItems: "flex-start" }}
              className="w-52 h-16 text-lg border-gray-600 border-t-4 border-b-4 border-r-4 bg-gray-600 flex justify-center items-center text-white flex-col items-start"
            >
              <div className="ml-4">
                {new Date(workout.startedAt).toLocaleDateString()}{" "}
              </div>
              <div className="ml-4">
                {new Date(workout.startedAt).toLocaleTimeString()}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Workouts;
