import React from "react";
import { Link } from "react-router-dom";

const Items = ({ id, img1, img2, title, price, ifExists }) => {
  return (
    <Link className="link">
      <div className="w-[35vh] flex flex-col ">
        <div className="image">
          <img src={ifExists ? img1 : img2} alt="" className="mainImg" />
        </div>
        <h2 className="font-normal mt-2">{title}</h2>
        <div className="prices">
          <h3>${price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Items;
