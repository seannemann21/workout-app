import React, { useEffect } from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import { useMutation, gql } from "@apollo/client";

const CREATE_WORKOUT_EXERCISE_QUERY = gql`
  mutation (
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
    <div className="flex items-center flex-col">
      <div>
        <h1>{exercise.name}</h1>
      </div>
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
            <div>
              <FieldArray
                name="exerciseSets"
                render={(arrayHelpers) => (
                  <div>
                    <label
                      id="reps-label"
                      className="w-12 mr-4 inline-block"
                    >
                      Reps
                    </label>
                    <label id="lbs-label">Lbs</label>
                    {values.exerciseSets.map((exerciseSet, index) => (
                      <div key={index}>
                        <Field
                          name={`exerciseSets[${index}].reps`}
                          className="border-b-4 focus:outline-none focus:border-blue-300  w-12 mr-4"
                          aria-labelledby="reps-label"
                        />
                        <Field
                          name={`exerciseSets[${index}].lbs`}
                          className="border-b-4 focus:outline-none focus:border-blue-300"
                          aria-labelledby="lbs-label"
                        />

                        <button
                          type="button"
                          onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                          className="font-bold"
                        >
                          -
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => arrayHelpers.push({ lbs: 0, reps: 0 })}
                      className="font-bold w-full my-6 float-right bg-green-300 hover:bg-green-500 px-2 py-1 rounded-md"
                    >
                      +
                    </button>
                    <div>
                      <button onClick={back}>Back</button>
                    </div>
                    <div>
                      <button type="submit">Submit</button>
                    </div>
                  </div>
                )}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddWorkoutExercise;
