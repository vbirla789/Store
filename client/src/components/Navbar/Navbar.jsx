import React, { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import Menudropdown from "./Menudropdown";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const products = useSelector((state) => state.cart.products);

  const [navState, setNavState] = useState(false);

  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  return (
    <div
      className={
        !navState
          ? "z-50 flex items-center gap-[30vh] absolute text-xl md:gap-[5vh] py-5 pl-10 md:pl-5"
          : "fixed top-0 left-0 right-0 h-[10vh] flex items-center justify-around md:justify-between z-50 bg-[#E4E4E4] opacity-80 text-xl"
      }
    >
      <div className="flex gap-4 pt-2 ml-5 md:hidden">
        <div className="flex ">
          <span>INR</span>
          <KeyboardArrowDownIcon />
        </div>
        <div>
          <Link to="products/1">Men</Link>
        </div>
        <div>
          <Link to="products/2">Women</Link>
        </div>
        <div>
          <Link to="products/1">Children</Link>
        </div>
        <div>
          <Link to="products/2">Accesories</Link>
        </div>
      </div>
      <div>
        <Link to="/">
          {" "}
          <h1 className="text-4xl font-semibold md:pt-2 md:pl-1">STORE</h1>
        </Link>
      </div>
      <div className="flex gap-4 pt-2 mr-5 ">
        <div className="md:hidden">
          <Link to="/">Home</Link>
        </div>
        <div className="md:hidden">
          <Link>About</Link>
        </div>
        <div className="md:hidden">
          <Link>Contact</Link>
        </div>
        <div className="md:hidden">
          <Link>Stores</Link>
        </div>

        <div>
          <SearchIcon fontSize="medium" />
        </div>
        <div>
          <PersonOutlineIcon fontSize="medium" />
        </div>
        <div>
          <FavoriteBorderIcon fontSize="medium" />
        </div>
        <div onClick={() => setOpen(!open)} className="relative">
          <ShoppingCartIcon fontSize="medium" />
          <span className="absolute top-0 left-4 text-white text-sm rounded-full bg-gray-500 h-[20px] w-[20px] flex items-center justify-center">
            {products.length}
          </span>
        </div>
        <div className="hidden md:block mt-1 ml-2">
          <RxHamburgerMenu onClick={() => setIsMenuOpen(!isMenuOpen)} />
          {isMenuOpen && <Menudropdown />}
        </div>
        <div
          className={
            isMenuOpen
              ? "absolute top-[40vh] right-[50vh] hidden md:block md:right-[5vh] md:top-4"
              : "hidden"
          }
        >
          <RxCross1
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black"
          />
        </div>
      </div>

      {open && <Cart />}
    </div>
  );
};

export default Navbar;
