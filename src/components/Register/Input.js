import React from "react";

const Input = ({ value, onChange, type, className, name}) => {
  return (
    <input
      value={value}
      onChange={onChange}
      type={type}
      className={className}
      name={name}
      required
    />
  );
};

export default Input;
