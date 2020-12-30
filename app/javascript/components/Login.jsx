import React from "react";
import Calendar from "./Calendar";

const LoginForm = () => (
  <div className="flex justify-center">
   <div className="text-2xl mt-52">
     <form>
       <div className="my-6">
         <label htmlFor="email-input">Email:</label>
         <input type="text" id="email-input" className="border-b-4 focus:outline-none focus:border-blue-300" />
       </div>
       <button className="my-6 float-right bg-green-300 hover:bg-green-500 px-2 py-1 rounded-md">Submit</button>
     </form>
   </div>
 </div>
)

export default LoginForm
