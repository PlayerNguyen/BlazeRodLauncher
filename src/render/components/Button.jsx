import React from "react";

function Button({ text }) {
  return (
    <button
      className="px-2 py-1 bg-sky-500 border-2 border-black shadow-sm shadow-sky-300 text-xl hover:bg-sky-600 
      transition-colors duration-400 ease-in-out hover:text-sky-300"
    >
      {text}
    </button>
  );
}

export default Button;
