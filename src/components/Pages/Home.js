import React from "react";
import Navbar from "../Navbar";
import Signin from "../Signin/Signin";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Signin />
    </div>
  );
};

export default Home;