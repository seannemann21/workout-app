import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useLazyQuery, gql } from "@apollo/client";
import { useUserSession } from "./userSesssion";

const GET_USER_QUERY = gql`
  query($email: String!) {
    fetchUser(email: $email) {
      id
      email
      currentWorkout{
        id
      }
    }
  }
`;

const SignInForm = ({ setUser }) => {
  const { signUserIn } = useUserSession();
  const [getUser, { loading, data }] = useLazyQuery(GET_USER_QUERY);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      getUser({ variables: { email: values.email } });
    },
  });

  useEffect(() => {
    if (data && !data.errors) {
      signUserIn(data.fetchUser);
    }
  }, [data]);

  return (
    <div className="flex justify-center">
      <div className="text-2xl mt-52">
        <form onSubmit={formik.handleSubmit}>
          <div className="my-6">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="border-b-4 focus:outline-none focus:border-blue-300"
            />
          </div>
          <button className="my-6 float-right bg-green-300 hover:bg-green-500 px-2 py-1 rounded-md">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
