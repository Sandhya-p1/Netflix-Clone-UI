import React from "react";
import { auth } from "../firebase";
import { useRef } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className=" bg-black text-white p-12 max-w-md text-center mx-auto">
      <form className="space-y-3">
        <h1 className="text-xl font-bold text-start">Sign In</h1>
        <input
          ref={emailRef}
          type="email"
          placeholder="email"
          className="bg-white text-black w-full rounded-sm px-2 py-3 outline-none"
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="password"
          className="bg-white text-black w-full rounded-sm px-2 py-3 outline-none "
        />
        <button
          onClick={signIn}
          className="text-center py-2  hover:bg-red-600 bg-red-500 font-medium border-emerald-50 w-full"
        >
          Sign In
        </button>
        <h4 className="text-gray-400 text-sm text-start">
          New to Netflix?
          <span
            onClick={register}
            className="text-white font-medium hover:underline cursor-pointer"
          >
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
