import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInFrom] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  // From validation
  const email = useRef();
  const password = useRef();
  const name = useRef();

  const toggleSignInForm = () => {
    setIsSignInFrom(!isSignInForm);
  };

  const handelButtonClick = () => {
    // validate the form data
    // console.log(email.current.value);
    // console.log(password.current.value);
    // console.log(name.current.value);
    // get the form user's input data using useRef hook
    const message = checkValidData(name.current.value, email.current.value, password.current.value);
    setErrorMessage(message);

    // Sign In or Sign Up
  };

  return (
    <div className="absolute">
      <Header />

      <div className="">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/US-en-20241216-TRIFECTA-perspective_16158377-32b2-42cc-ba71-15929be7d1f2_medium.jpg"
          alt="backgroundImg"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()} // Avoid the submit
        className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80 text-white"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 m-2 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 m-2 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 m-2 w-full bg-gray-700"
        />
        <p className="text-red-600 text-sm p-2">{errorMessage}</p>

        <button
          className="p-4 m-2  bg-red-500 w-full rounded-lg"
          onClick={handelButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4  cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netfilx? Sign Up now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
