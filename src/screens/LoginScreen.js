import React, { useState } from "react";
import SignUpScreen from "./SignUpScreen";
function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="relative h-svh   ">
      <img
        src="https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg"
        className="h-full object-cover w-full "
      />
      <img
        src="https://bi-jingo.com/wp-content/uploads/2009/03/netflix-logo-png-clip-art.png"
        className="absolute top-0 left-0 w-36 object-contain  p-4"
      />
      <button
        onClick={() => setSignIn(true)}
        className="px-3 py-2 fixed rounded-md right-4 top-4 text-white text-sm bg-red-500 font-medium border-none"
      >
        Sign In
      </button>

      <div className="absolute top-1/3 mx-auto md:right-20 md:left-20 text-center  text-white p-4">
        {signIn ? (
          <SignUpScreen />
        ) : (
          <div>
            <h1 className="text-white font-bold text-4xl  ">
              Unlimited films, TV programs and more.
            </h1>
            <h2 className="text-lg font-medium">
              Watch anywhere.Cancel at any time.
            </h2>
            <p className="text-white">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="flex items-center justify-center my-2">
              <input
                type="email"
                placeholder="Email Address"
                className="p-2 w-60 rounded-l-md outline-none bg-white"
              />
              <button
                onClick={() => setSignIn(true)}
                className="uppercase bg-orange-600 rounded-r-md px-3 py-2 text-base text-white"
              >
                Get started
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
