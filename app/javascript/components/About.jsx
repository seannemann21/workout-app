import React from 'react';
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      about
      <Link to={'/sign-in'}>Sign In</Link>
      <Link to={'/sign-up'}>Sign Up</Link>
    </div>
  )
}

export default About
