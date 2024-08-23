import React from "react";

const TotalPriceAndCheckout = () => {
  return (
    <div className="bg-orange-50 text-right pr-5 ">
      <div className="pb-5">
        <p className="text-xl py-4">Total (0 item) : RM1000</p>
        <button className="border bg-orange-400 rounded px-5 py-1">
          CHECK OUT
        </button>
      </div>
    </div>
  );
};

export default TotalPriceAndCheckout;
