import React, { useEffect, useState } from "react";
import "./Header.scss";
// import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
// ES6 Modules or TypeScript
import Swal from "sweetalert2";

const Header = () => {
  const [handleScroll, setHandleScroll] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setHandleScroll(true);
      } else {
        setHandleScroll(false);
      }
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logOut = async (e) => {
    e.preventDefault();

    await Swal.fire({
      title: "Are you sure you would like to sign out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#E42114",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        signOut(auth);
        Swal.fire({
          icon: "success",
          title: "Goodbye",
          text: "See you soon!",
        });
      }
    });
  };

  return (
    <nav className={`${handleScroll && "nav-mobile"}`}>
      <div className="container">
        <Link to="/" className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
            alt="Netflix logo"
          />
        </Link>
        {user?.email ? (
          <div className="signed-user-wrapper">
            <h6 className="user">{user.email}</h6>
            <button type="button" onClick={logOut} className="sign-btn">
              Sign out
            </button>
          </div>
        ) : (
          <Link to="/sign-in" className="sign-btn">
            Sign in
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
