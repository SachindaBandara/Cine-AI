import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInFrom] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInFrom(!isSignInForm);
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

      <form className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4 text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 m-2 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 m-2 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 m-2 w-full bg-gray-700"
        />
        <button className="p-4 m-2 text-white bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="py-4 text-white cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netfilx? Sign Up now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
