import React from "react";

const TotalPriceAndCheckout = ({total}) => {

 
 
  return (
    <div className="text-right pr-12 ">
      <div className="pb-5">
        <p className="text-xl py-4">Total (0 item) : RM {total}</p>
        <p className="text-xl py-4"></p>
        <button className="border bg-orange-400 rounded px-5 py-1 font-semibold hover:bg-white ">
          CHECK OUT
        </button>
      </div>
    </div>
  );
};

export default TotalPriceAndCheckout;
 