import React from "react";
import Left from "../MainWrapper/Left";
import Center from "../MainWrapper/Center/Center";

const MainWrapper = () => {
    return(
      <div
      className="container mx-auto min-h-screen flex"
      style={{ background: "#15202b" }}
    >
      <Left />
      <Center />
    </div>
    );
};

export default MainWrapper;