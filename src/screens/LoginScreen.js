import React, { useState } from "react";
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen";


function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
          alt="not found"
        ></img>
        <button onClick={()=>
        {
          setSignIn(true);
        }} className="loginScreen__button">Sign in</button>
        <div className="loginScreen__gradient"></div>
      </div>
      <div className="loginScreen__body">
        {signIn ? (
          <SignUpScreen></SignUpScreen>
        ) : (
          <>
            <h1>Unlimited films,TV programs and much more</h1>
            <h2> Watch anywhere. Cancel at any time</h2>
            <h3>
              {" "}
              Ready to watch ? Enter your email to create or restart your
              membership{" "}
            </h3>
            <div className="loginScreen__input">
              <form>
                <input type="email" placeholder="Email Adress"></input>
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen__setStarted"
                >
                  {" "}
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
