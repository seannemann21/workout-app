import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faDumbbell } from "@fortawesome/free-solid-svg-icons";
import AddWorkoutExercise from "./AddWorkoutExercise";

const GET_WORKOUT_QUERY = gql`
  query($id: ID!) {
    fetchWorkout(id: $id) {
      id
      startTime
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

const WorkoutBuilder = () => {
  const [workout, setWorkout] = useState();
  const [selectedExercise, setSelectedExercise] = useState();
  let { id } = useParams();
  const { data, refetch } = useQuery(GET_WORKOUT_QUERY, {
    variables: { id },
  });

  useEffect(() => {
    if (data) {
      setWorkout(data.fetchWorkout);
    }
  }, [data]);

  if (!workout) {
    return <div>loading...</div>;
  }

  if (selectedExercise) {
    return (
      <AddWorkoutExercise
        workoutId={workout.id}
        exercise={selectedExercise}
        back={() => {
          refetch()
          setSelectedExercise(null);
        }}
      />
    );
  }

  return (
    <div>
      <div>{workout.startTime}</div>
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
