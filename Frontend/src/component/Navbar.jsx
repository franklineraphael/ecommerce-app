import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets-2/frontend_assets/img7.png";
import image from "../assets-2/frontend_assets/search_icon.png";
import image1 from "../assets-2/frontend_assets/profile_icon.png";
import image2 from "../assets-2/frontend_assets/cart_icon.png";
import image3 from "../assets-2/frontend_assets/menu_icon.png";
import image4 from "../assets-2/frontend_assets/dropdown_icon.png";
import { ShopContext } from "../ShopContext/shopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between font-medium">
      <Link to={"/"}>
        <img src={logo} className="w-40" />
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>Collection</p>
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About</p>
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>Contact</p>
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img
          onClick={() => setShowSearch(true)}
          src={image}
          alt=""
          className="w-5 cursor-pointer"
        />
        <div className="group relative">
          <img src={image1} alt="" className="w-5 cursor-pointer" />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 rounded text-gray-500">
              <p className="cursor-pointer hover:text-black">My profile</p>
              <p className="cursor-pointer hover:text-black">Order</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={image2} alt="" className="w-5 min-w-5" />
          <p className="absolute w-4 right-[-5px] bottom-[-5px] leading-4 text-center bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={image3}
          alt=""
          className="sm:hidden w-5 cursor-pointer"
        />
      </div>
      {/* sidebar for smaller screen */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : " w-0 "
        } `}
      >
        <div className="flex flex-col">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center p-3 gap-4 cursor-pointer"
          >
            <img src={image4} className="h-4 rotate-180" alt="" />
            <p>back</p>
          </div>
          <NavLink
            className="py-2 pl-6 border"
            onClick={() => setVisible(false)}
            to="/"
          >
            HOME
          </NavLink>

          <NavLink
            className="py-2 pl-6 border"
            onClick={() => setVisible(false)}
            to="/collection"
          >
            COLLECTION
          </NavLink>

          <NavLink
            className="py-2 pl-6 border"
            onClick={() => setVisible(false)}
            to="/about"
          >
            ABOUT
          </NavLink>

          <NavLink
            className="py-2 pl-6 border"
            onClick={() => setVisible(false)}
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
