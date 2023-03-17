import React from "react";

const Button = ({ text, submit }) => {
  return (
    <button
      type={submit ? "submit" : null}
      className="bg-violet-500 text-white py-3 hover:bg-violet-600 duration-300 mt-5"
    >
      {text}
    </button>
  );
};

export default Button;
