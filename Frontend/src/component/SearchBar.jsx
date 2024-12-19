import React, { useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../ShopContext/shopContext";
import asset from "../assets-2/frontend_assets/search_icon.png";
import cross from "../assets-2/frontend_assets/cross_icon.png";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);

  const location = useLocation();
  const [visible, setVisible] = useState();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="flex-1 outline-none bg-inherit text-sm"
          placeholder="Search"
        />
        <img src={asset} className="w-4" alt="" />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        src={cross}
        className="cursor-pointer inline w-3"
        alt=""
      />
    </div>
  ) : null;
};

export default SearchBar;
