import React from "react";

const Register = () => {
  return (
    <div>
      <form>
        <div className="container mx-auto border-2">
          <label htmlFor="email">Email</label>
          <input type="text" />
          <button>Create Account</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
