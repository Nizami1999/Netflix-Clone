import React, { useState } from "react";
import "./Sign.scss";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase-config";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

const Sign = () => {
  const history = useHistory();

  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpPasswordConfirm, setSignUpPasswordConfirm] = useState("");
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const clearFields = () => {
    setSignUpEmail("");
    setSignUpPassword("");
    setSignUpPasswordConfirm("");
    setSignInEmail("");
    setSignInPassword("");
  };

  const signUp = async (e) => {
    e.preventDefault();
    try {
      if (signUpPassword === signUpPasswordConfirm) {
        await createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword);
        clearFields();
        history.push("/");
        Swal.fire({
          icon: "success",
          title: "Welcome!",
          text: "You are signed up",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Password and confirm password do not match",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    }
  };

  const signIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, signInEmail, signInPassword);
      clearFields();
      history.push("/");
      Swal.fire({
        icon: "success",
        title: "Good job!",
        text: "You are signed in",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    }
  };

  return (
    <div className="sign-form">
      <div className="sign-form-wrapper">
        <div className="sign-form-item">
          <div className="title">Sign In</div>
          <form action="" onSubmit={signIn}>
            <input
              type="email"
              onChange={(e) => setSignInEmail(e.target.value)}
              placeholder="Email"
              value={signInEmail}
            />
            <input
              type="password"
              onChange={(e) => setSignInPassword(e.target.value)}
              placeholder="Password"
              value={signInPassword}
            />
            <button className="btn-sign" onClick={signIn} type="submit">
              Sign in
            </button>
          </form>
        </div>
        <div className="sign-form-item">
          <div className="title">Sign Up</div>
          <form action="" onSubmit={signUp}>
            <input
              onChange={(e) => setSignUpEmail(e.target.value)}
              type="email"
              placeholder="Email"
              value={signUpEmail}
            />
            <input
              onChange={(e) => setSignUpPassword(e.target.value)}
              value={signUpPassword}
              type="password"
              placeholder="Password"
            />
            <input
              type="password"
              onChange={(e) => setSignUpPasswordConfirm(e.target.value)}
              placeholder="Confirm password"
              value={signUpPasswordConfirm}
            />
            <button onClick={signUp} className="btn-sign">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sign;
