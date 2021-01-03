import React from "react";
import { Redirect } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { useUserSession } from "./userSesssion";

const CREATE_WORKOUT_QUERY = gql`
  mutation($userId: ID!, $workoutType: String!) {
    addWorkout(
      input: {
        params: { userId: $userId, workoutType: $workoutType, completed: false }
      }
    ) {
      workout {
        id
      }
    }
  }
`;

const Card = ({ description, icon }) => (
  <div className="flex-col w-72">
    <div className="h-60 bg-gray-50 rounded-t-3xl border-t-2 border-l-2 border-r-2 border-gray-600 flex justify-center items-center">
      <div className="text-7xl text-gray-600">
        <FontAwesomeIcon icon={icon} />
      </div>
    </div>
    <div className="h-40 bg-gray-600 rounded-b-3xl flex justify-center items-center">
      <div className="text-4xl font-bold text-white">{description}</div>
    </div>
  </div>
);

const WorkoutSelector = () => {
  const { currentUser } = useUserSession();
  const [createWorkout, { data }] = useMutation(CREATE_WORKOUT_QUERY);

  const selectWorkout = (workoutType) => {
    createWorkout({
      variables: { userId: currentUser.id, workoutType: workoutType },
    });
  };

  if (data) {
    return <Redirect to={`/build-workout/${data.addWorkout.workout.id}`} />;
  }

  return (
    <div>
      <div>Workout Selector</div>
      <div className="flex justify-center">
        <div className="m-8">
          <button
            onClick={() => {
              selectWorkout("cardio");
            }}
          >
            <Card icon={faHeart} description="Cardio" />
          </button>
        </div>
        <div className="m-8">
          <button
            onClick={() => {
              selectWorkout("strength");
            }}
          >
            <Card icon={faDumbbell} description="Strength" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutSelector;
