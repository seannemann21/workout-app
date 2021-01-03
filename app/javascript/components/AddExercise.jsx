import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";

const AddExercise = ({ back, exercise }) => {
  return (
    <div>
      {exercise.name}
      <Formik
        initialValues={{ exerciseSets: [{ lbs: 0, reps: 0 }] }}
        onSubmit={(values) =>
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
          }, 500)
        }
      >
        {({values}) => (
          <Form>
            <FieldArray
              name="exerciseSets"
              render={(arrayHelpers) => (
                <div>
                  {values.exerciseSets && values.exerciseSets.length > 0 ? (
                    values.exerciseSets.map((exerciseSet, index) => (
                      <div key={index}>
                        <Field name={`exerciseSets[${index}].lbs`} />
                        <Field name={`exerciseSets[${index}].reps`} />
                        <button
                          type="button"
                          onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                        >
                          -
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            arrayHelpers.insert(index, { lbs: 0, reps: 0 })
                          } // insert an empty string at a position
                        >
                          +
                        </button>
                      </div>
                    ))
                  ) : (
                    <button type="button" onClick={() => arrayHelpers.push("")}>
                      {/* show this when user has removed all friends from the list */}
                      Add a friend
                    </button>
                  )}
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

export default AddExercise;
