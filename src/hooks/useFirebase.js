import {
   getAuth,
   GithubAuthProvider,
   GoogleAuthProvider,
   onAuthStateChanged,
   signInWithPopup,
   signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
   const [user, setUser] = useState({});
   const [error, setError] = useState("");
   const auth = getAuth();
   const googleProvider = new GoogleAuthProvider();
   const githubProvider = new GithubAuthProvider();

   const SignInUsingGoogle = () => {
      signInWithPopup(auth, googleProvider)
         .then((result) => {
            console.log(result.user);
            setUser(result.user);
         })
         .catch((error) => {
            setError(error.message);
         });
   };

   const SignInUsingGithub = () => {
      signInWithPopup(auth, githubProvider)
         .then((result) => {
            setUser(result.user);
         })
         .catch((error) => {
            setError(error.message);
         });
   };

   const handleLogOut = () => {
      signOut(auth).then(() => {
         setUser({});
      });
   };

   useEffect(() => {
      onAuthStateChanged(auth, (user) => {
         if (user) {
            console.log("inside state change", user);
            setUser(user);
         }
      });
   }, [auth]);
   return {
      user,
      error,
      SignInUsingGoogle,
      SignInUsingGithub,
      handleLogOut,
   };
};
export default useFirebase;
