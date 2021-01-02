import React from "react";
import Calendar from "./Calendar";
import { useUserSession } from './userSesssion';

export default () => {
  const { getCurrentUser } = useUserSession()
  const user = getCurrentUser()
  const message = `Welcome ${user.email}`

  return (
    <div>
      <div>{message}</div>
      <div className="flex ">
        <div className="w-96 h-screen hidden lg:block shadow-md">
          <div className="my-6 mt-2 mx-2 shadow-md rounded-md p-2 bg-white">
            <div>6:30 PM 12/29/2020</div>
            <div>45 minutes</div>
            <div>Run</div>
          </div>
          <div className="my-4 mx-2 shadow-md rounded-md p-2 bg-white">
            <div>5:30 PM 12/28/2020</div>
            <div>60 minutes</div>
            <div>Legs</div>
          </div>
        </div>
        <div className="flex-grow">
          <div className="mt-8 flex justify-center">
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
};
