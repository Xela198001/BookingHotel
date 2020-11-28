import React from "react";
import EmptyBox from "./EmptyBox";
import Details from "../Details/Details";

const Booking = () => {
  return (
    <div className="w-full pt-12 pb-16">
      <div className="container">
        <div className="pt-8 flex">
          <EmptyBox />
        </div>
        <Details />
      </div>
    </div>
  );
};

export default Booking;
