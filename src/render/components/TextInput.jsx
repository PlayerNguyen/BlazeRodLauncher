import React from "react";

function TextInput({ ...children }) {
  return (
    <input
      className="px-2 py-1 border-2 outline-2 outline-none focus:border-sky-600 
      border-black transition-all ease-in-out duration-75 focus:shadow-sm focus:shadow-sky-300"
      {...children}
    />
  );
}

export default TextInput;
