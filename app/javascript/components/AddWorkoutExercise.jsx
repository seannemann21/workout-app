import React, { useEffect } from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import { useMutation, gql } from "@apollo/client";

const CREATE_WORKOUT_EXERCISE_QUERY = gql`
  mutation(
    $workoutId: ID!
    $exerciseId: ID!
    $strengthSets: [StrengthSetInput!]
  ) {
    addWorkoutExercise(
      input: {
        params: {
          workoutId: $workoutId
          exerciseId: $exerciseId
          strengthSets: $strengthSets
        }
      }
    ) {
      workout {
        id
      }
    }
  }
`;

const AddWorkoutExercise = ({ workoutId, back, exercise }) => {
  const [createWorkoutExercise, { data }] = useMutation(
    CREATE_WORKOUT_EXERCISE_QUERY
  );

  useEffect(() => {
    if (data) {
      back();
    }
  }, [data]);

  return (
    <div>
      {exercise.name}
      <Formik
        initialValues={{ exerciseSets: [{ lbs: 0, reps: 0 }] }}
        onSubmit={(values) => {
          createWorkoutExercise({
            variables: {
              workoutId,
              exerciseId: exercise.id,
              strengthSets: values.exerciseSets.map((set) => ({
                lbs: parseInt(set.lbs, 10),
                reps: parseInt(set.reps, 10),
              })),
            },
          });
        }}
      >
        {({ values }) => (
          <Form>
            <FieldArray
              name="exerciseSets"
              render={(arrayHelpers) => (
                <div>
                  {values.exerciseSets.map((exerciseSet, index) => (
                    <div key={index}>
                      <Field name={`exerciseSets[${index}].lbs`} />
                      <Field name={`exerciseSets[${index}].reps`} />
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                      >
                        -
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => arrayHelpers.push({ lbs: 0, reps: 0 })}
                  >
                    +
                  </button>
                  <div>
                    <button type="submit">Submit</button>
                  </div>
                </div>
              )}
            />
          </Form>
        )}
      </Formik>
      <div>
        <button onClick={back}>Back</button>
      </div>
    </div>
  );
};

export default AddWorkoutExercise;
