import React from "react";
import { useContext } from "react";
import { shopContext } from "../ShopContext/shopContext";
import Title from "./Title";

const LatestCollection = () => {
  const { products } = useContext(shopContext);
  console.log(products);
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={LATEST} text2={COLLECTIONS} />
      </div>
    </div>
  );
};

export default LatestCollection;
