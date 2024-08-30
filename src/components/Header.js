import React from "react";
import logo from "../assets/netflix-logo.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  console.log(user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened (redirect to error page).
      });
  };
  return (
    <div className="header">
      <img src={logo} alt="Netflix Logo" />
      {user !== null && (
        <div className="signOutWrap">
          <p>
            Hello <strong>{user?.displayName}</strong>,{" "}
          </p>
          <button className="btn btn-primary btn-sm" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
