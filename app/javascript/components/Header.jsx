import React from "react";
import { Link } from "react-router-dom";
import { useUserSession } from "./userSesssion"

const Header = () => {
  const { signUserOut } = useUserSession()
  const headers = [
    { text: "Home", path: "/" },
    { text: "Workouts", path: "/workouts" },
    { text: "Exercises", path: "/exercises" },
    { text: "New Workout", path: "/new-workout" },
  ];

  return (
    <div className="w-full h-20 shadow-md flex items-center justify-between">
      <div className="flex divide-x-2 mx-20">
        {headers.map((header) => (
          <div className="px-12 h-12 flex items-center">
            <Link to={header.path}>{header.text}</Link>
          </div>
        ))}
      </div>
      <button onClick={signUserOut}>
          Sign Out
      </button>
    </div>
  );
};

export default Header
