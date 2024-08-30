import React, { useRef, useState } from "react";
import homeBG from "../assets/netflix-BG.jpg";
import { checkValidData } from "../utils/validateData";
import { auth } from "../utils/firebase";
import {
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmitForm = () => {
    const message = checkValidData(email.current.value, password.current.value);
    console.log(message);
    setErrorMsg(message);

    //If any error, don't go to sign in/sign up logic
    if (message !== "") return;

    //If no errors found, then go to sign in/sign up logic
    if (!isSignInForm) {
      console.log("Sign Up rendered!");
      //debugger;
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid, email, displayName })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMsg(error);
            });
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          console.log(error);
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " : " + errorMessage);
        });
    } else {
      console.log("Sign In rendered!");
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          console.log(error);
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " : " + errorMessage);
        });
    }
  };

  const handleisSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <>
      <Header />
      <div className="authForm">
        <img src={homeBG} alt="" className="homeBG" />

        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h2>{isSignInForm ? "Sign In" : "Sign Up"}</h2>

          {!isSignInForm && (
            <input
              type="text"
              ref={name}
              placeholder="Full Name"
              className="form-control"
            />
          )}

          <input
            type="text"
            ref={email}
            placeholder="Email Address"
            className="form-control"
          />

          <input
            type="password"
            ref={password}
            placeholder="Password"
            className="form-control"
          />

          {errorMsg && <h6>{errorMsg}</h6>}

          <button className="btn btn-danger" onClick={handleSubmitForm}>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p
            onClick={() => {
              handleisSignInForm();
            }}
          >
            {isSignInForm
              ? "New to Netflix? Sign Up Now."
              : "Already registered? Sign In here."}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
