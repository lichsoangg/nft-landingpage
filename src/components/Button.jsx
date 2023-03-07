import React from "react";

const Button = ({children, className = "", link = "", ...props}) => {
  if (link.length > 0)
    return (
      <a
        href={link}
        className={`flex items-center justify-center gap-x-3 px-8 rounded-2xl text-white btn-effect ${
          className || ""
        }`}
        {...props}
      >
        {" "}
        {children}
      </a>
    );
  return (
    <button
      className={`flex items-center justify-center gap-x-3 px-8 rounded-2xl text-white btn-effect ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
