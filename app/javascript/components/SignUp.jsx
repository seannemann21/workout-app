import React, { useEffect } from "react";
import { useMutation, gql } from "@apollo/client";
import { useFormik } from "formik";
import { useUserSession } from "./userSesssion";

const ADD_USER_QUERY = gql`
  mutation($email: String!) {
    addUser(input: { params: { email: $email } }) {
      user {
        id
        email
        currentWorkout {
          id
        }
      }
    }
  }
`;

const SignUpForm = () => {
  const { signUserIn } = useUserSession();
  const [sendAddUser, { data }] = useMutation(ADD_USER_QUERY);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      sendAddUser({ variables: { email: values.email } });
    },
  });

  useEffect(() => {
    if (data && !data.errors) {
      signUserIn(data.addUser.user);
    }
  }, [data]);

  return (
    <div className="flex justify-center">
      <div className="text-2xl mt-52">
        <form onSubmit={formik.handleSubmit}>
          <div className="my-6">
            <label htmlFor="email-input">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              className="border-b-4 focus:outline-none focus:border-blue-300"
            />
          </div>
          <button className="my-6 float-right bg-green-300 hover:bg-green-500 px-2 py-1 rounded-md">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
