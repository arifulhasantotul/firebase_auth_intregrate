import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
   const { SignInUsingGoogle, SignInUsingGithub } = useAuth();
   return (
      <div>
         <h2>Please Login</h2>
         <button onClick={SignInUsingGoogle}>Google Sign In</button>
         <button onClick={SignInUsingGithub}>Github Sign In</button>
         <br />

         <Link to="/register">New User?</Link>
      </div>
   );
};

export default Login;
