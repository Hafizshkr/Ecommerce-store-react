import React from "react";
import { NavLink } from "react-router-dom";

const EmptyCart = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col ">
        <div className="emptyCart h-[25vh] w-[50vh] "></div>
        <p className="text-3xl py-10">Your cart is empty</p>
        <button className="text-2xl border p-4 rounded-full w-[18rem] bg-red-600 text-white hover:bg-white hover:text-black">
          <NavLink to="/Store">Return to shop</NavLink>
        </button>
      </div>
    </>
  );
};

export default EmptyCart;
