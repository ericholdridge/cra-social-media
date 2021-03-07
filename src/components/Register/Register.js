import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthenticationContext } from "../../context/Authentication";
import Input from "./Input";
import { useHistory } from "react-router-dom";
import fire from "../../firebase/firebase";

const Signin = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    registerError,
    setRegisterError,
  } = useContext(AuthenticationContext);
  const history = useHistory();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Take the user to the Sign In page if successful.
          history.push("/signin");
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          // ..
        });
    } else {
      setRegisterError("Passwords do not match. Please try again.");
    }
  };

  return (
    <>
      <div className="container mx-auto py-20 max-h-screen flex-col items-center">
        <div className="pb-10">
          <h1 className="text-center text-2xl font-bold text-white">
            Register for an account
          </h1>
          <div className="text-center pt-2">
            <span className="text-gray-600 font-medium">Or</span>
            <Link
              to="/signin"
              className="font-medium text-blue-600 ml-1 tracking-wide"
            >
              Sign in to your account
            </Link>
          </div>
        </div>
        <div className="flex w-full">
          <form className="rounded-md shadow-md p-10 bg-white inline-block mx-auto border border-gray-100">
            <div className="flex flex-col">
              <label htmlFor="email" className="font-medium text-gray-700 pb-1">
                Email address
              </label>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                name="email"
                className="h-10 border-2 rounded-lg pl-2"
              />
            </div>
            <div className="flex flex-col mt-6">
              <label
                htmlFor="password"
                className="font-medium text-gray-700 pb-1"
              >
                Password
              </label>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                minLength="9"
                className="h-10 border-2 rounded-lg pl-2"
              />
              <label
                htmlFor="password"
                className="font-medium text-gray-700 pb-1 mt-2"
              >
                Confirm Password
              </label>
              <Input
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                name="password"
                minLength="9"
                className="h-10 border-2 rounded-lg pl-2"
              />
            </div>
            {/* If there is a user register error, display the message. */}
            {registerError && (
              <p className="text-red-400 font-medium mt-2">{registerError}</p>
            )}
            <div className="flex items-center justify-between pt-6">
              <div className="flex items-center">
                <input type="checkbox" name="vehicle1" className="mr-2" />
                <label
                  htmlFor="rememberPassword"
                  className="font-medium text-gray-600"
                >
                  Remember me
                </label>
              </div>
              <Link to="/forgotpassword" className="text-blue-600 font-medium ">
                Forgot your password?
              </Link>
            </div>
            <button
              onClick={(e) => handleFormSubmit(e)}
              className="bg-blue-600 py-3 text-white font-medium w-full rounded-lg mt-6 tracking-wide"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
