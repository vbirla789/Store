import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const ProductItem = ({ val: { id, img1, title, price } }) => {
  const dispatch = useDispatch();

  const addCart = () => {
    const item = { id, title, img1, price };
    dispatch(addToCart(item));
  };
  return (
    <div className="flex flex-row py-20 justify-center" key={id}>
      <div className="flex gap-2 ml-10">
        <img src={img1} className="w-[70vh] h-[100vh]" />
        {/* <img src={img1} className="w-[70vh] h-[100vh]" /> */}
      </div>
      <div className="flex flex-col ml-10 w-[65vh] mt-10">
        <div className="flex flex-col gap-5">
          <h1 className="text-xl font-semibold">{title}</h1>
          <span className="text-2xl font-medium">${price}</span>
          <span>Green/White/Brown</span>
          <button
            className="bg-slate-900 text-white py-3 rounded w-[100%]"
            onClick={addCart}
          >
            Add
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <p className="mt-2">find in store</p>
          <p>Standard delivery in 2-7 days</p>
          <p className="font-semibold">Delivery and Payment</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
