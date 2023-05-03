import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      className="bg-[#fb9f9f] text-black font-bold hover:bg-[#fdb6b6] hover:text-white min-w-fit w-[100px] p-2 ml-1 mr-1 rounded-[4px] border-[2px] border-black"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
