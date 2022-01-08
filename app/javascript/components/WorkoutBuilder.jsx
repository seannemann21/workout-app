import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useQuery, useMutation, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faDumbbell } from "@fortawesome/free-solid-svg-icons";
import AddWorkoutExercise from "./AddWorkoutExercise";
import { useUserSession } from "./userSesssion";

const GET_WORKOUT_QUERY = gql`
  query ($id: ID!) {
    fetchWorkout(id: $id) {
      id
      startedAt
      workoutType
      possibleExercises {
        id
        name
      }
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
`;

const COMPLETE_WORKOUT = gql`
  mutation ($id: ID!) {
    completeWorkout(input: { id: $id }) {
      workout {
        id
      }
    }
  }
`;

const ExerciseCard = ({ title }) => (
  <div className="flex-col w-56">
    <div className="h-20 bg-gray-500 hover:bg-gray-600 flex justify-center items-center">
      <div className="text-xl font-bold text-white">{title}</div>
    </div>
  </div>
);

const WorkoutBuilder = () => {
  const { updateCurrentWorkout } = useUserSession();
  const [workout, setWorkout] = useState();
  const [selectedExercise, setSelectedExercise] = useState();
  const { id } = useParams();
  const { data, refetch } = useQuery(GET_WORKOUT_QUERY, {
    variables: { id },
  });
  const [sendCompleteWorkout, { data: completedData }] =
    useMutation(COMPLETE_WORKOUT);

  useEffect(() => {
    if (data) {
      setWorkout(data.fetchWorkout);
    }
  }, [data]);

  if (completedData) {
    updateCurrentWorkout(null);
    return <Redirect to="/" />;
  }

  const completeWorkout = () => {
    sendCompleteWorkout({ variables: { id } });
  };

  if (!workout) {
    return <div>loading...</div>;
  }

  if (selectedExercise) {
    return (
      <AddWorkoutExercise
        workoutId={workout.id}
        exercise={selectedExercise}
        back={() => {
          refetch();
          setSelectedExercise(null);
        }}
      />
    );
  }

  return (
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
      <div className="flex border-b-2 ml-4 mr-4 justify-between w-9/12">
        <div className="text-3xl">Add Exercise</div>
        <button
          onClick={completeWorkout}
          className="bg-green-300 hover:bg-green-500 px-2 py-1 rounded-md text-xl bottom-1 relative"
        >
          Complete
        </button>
      </div>
      <div className="flex">
        {workout.possibleExercises.map((exercise) => (
          <div className="m-4">
            <button onClick={() => setSelectedExercise(exercise)}>
              <ExerciseCard title={exercise.name} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutBuilder;
