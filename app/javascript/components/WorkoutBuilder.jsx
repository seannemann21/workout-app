import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useQuery, useMutation, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faDumbbell } from "@fortawesome/free-solid-svg-icons";
import AddWorkoutExercise from "./AddWorkoutExercise";
import { useUserSession } from "./userSesssion";

const GET_WORKOUT_QUERY = gql`
  query($id: ID!) {
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
  mutation($id: ID!) {
    completeWorkout(input: { id: $id }) {
      workout {
        id
      }
    }
  }
`;

const WorkoutBuilder = () => {
  const { updateCurrentWorkout } = useUserSession()
  const [workout, setWorkout] = useState();
  const [selectedExercise, setSelectedExercise] = useState();
  const { id } = useParams();
  const { data, refetch } = useQuery(GET_WORKOUT_QUERY, {
    variables: { id },
  });
  const [sendCompleteWorkout, { data: completedData }] = useMutation(
    COMPLETE_WORKOUT
  );

  useEffect(() => {
    if (data) {
      setWorkout(data.fetchWorkout);
    }
  }, [data]);

  if (completedData) {
    updateCurrentWorkout(null)
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
      <button onClick={completeWorkout}>Complete Workout</button>
      <div>Add Exercise</div>
      {workout.possibleExercises.map((exercise) => (
        <div>
          <button onClick={() => setSelectedExercise(exercise)}>
            {exercise.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default WorkoutBuilder;
