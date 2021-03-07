import React, { useContext } from "react";
import fire from "../../firebase/firebase";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faGlobeAmericas,
  faIdCard,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { AuthenticationContext } from "../../context/Authentication";

const Left = () => {
  const { userSignedIn, setUserSignedIn } = useContext(AuthenticationContext);
  const history = useHistory();
  // Sign the user out.
  const handleUserSignOut = () => {
    fire
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        console.log("User is signed out");
        setUserSignedIn(false)
        history.push("/signin");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <nav className="inline-flex flex-col items-center w-1/6 py-2">
      <div className="logo text-white font-bold text-lg text-left">
        <Link to="/home">
          <h1>CRASMA</h1>
        </Link>
      </div>
      <div className="flex flex-col justify-center">
        <Link to="/" className="text-white my-5 font-bold">
          <FontAwesomeIcon icon={faHouseUser} className="mr-2" />
          Home
        </Link>
        <Link to="/about" className="text-white my-5 font-bold">
          <FontAwesomeIcon icon={faGlobeAmericas} className="mr-2" />
          Explore
        </Link>
        <Link to="/services" className="text-white my-5 font-bold">
          <FontAwesomeIcon icon={faIdCard} className="mr-2" />
          Profile
        </Link>
        <Link to="/signin" className="text-white my-5 font-bold">
          <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
          Sign in
        </Link>
      </div>
      <button className="bg-blue-400 text-white font-bold py-3 px-6 rounded-3xl mt-4 border-0">
        Send Message
      </button>
      <button
        className="bg-blue-400 text-white font-bold py-3 px-6 rounded-3xl mt-4 border-0"
        onClick={handleUserSignOut}
      >
        Log out
      </button>
    </nav>
  );
};

export default Left;
