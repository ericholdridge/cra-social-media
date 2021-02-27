import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Signin = () => {
  return (
    <div className="container mx-auto py-20 flex-col items-center">
      <div className="pb-10">
        <h1 className="text-center text-2xl font-bold">
          Sign in to your account
        </h1>
        <div className="text-center pt-2">
          <span className="text-gray-600 font-medium">Or</span>
          <Link
            to="/register"
            className="font-medium text-blue-600 ml-1 tracking-wide"
          >
            register for an account
          </Link>
        </div>
      </div>
      <div className="flex">
        <form className="rounded-md shadow-md p-10 bg-white inline-block mx-auto border border-gray-100">
          <div className="flex flex-col">
            <label htmlFor="email" className="font-medium text-gray-700 pb-1">
              Email address
            </label>
            <input type="text" className="h-10 border-2 rounded-lg pl-2" />
          </div>
          <div className="flex flex-col mt-6">
            <label
              htmlFor="password"
              className="font-medium text-gray-700 pb-1"
            >
              Password
            </label>
            <input type="text" className="h-10 border-2 rounded-lg pl-2" />
          </div>
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
          <button className="bg-blue-600 py-3 text-white font-medium w-full rounded-lg mt-6 tracking-wide">
            Sign in
          </button>
          <div className="py-6 flex items-center justify-between">
            <div className="w-28 bg-gray-200" style={{ height: "2px" }}></div>
            <div className="text-medium text-gray-600 text-lg text-center">
              Or continue with
            </div>
            <div className="w-28 bg-gray-200" style={{ height: "2px" }}></div>
          </div>
          <div className="flex justify-between">
            <Link
              to="/google"
              className="py-2 rounded-md border-2 w-36 text-center"
            >
              <FontAwesomeIcon
                icon={faGoogle}
                className="text-gray-600 text-xl"
              />
            </Link>
            <Link
              to="/twitter"
              className="py-2 rounded-md border-2 w-36 text-center"
            >
              {" "}
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-gray-600 text-xl"
              />
            </Link>
            <Link
              to="/github"
              className="py-2 rounded-md border-2 w-36 text-center"
            >
              {" "}
              <FontAwesomeIcon
                icon={faGithub}
                className="text-gray-600 text-xl"
              />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
