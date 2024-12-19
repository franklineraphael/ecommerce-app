import React, { useEffect, useState } from "react";
import { products } from "../asset2/frontend_assets/assets";
import { useParams } from "react-router-dom";
import { shopContext } from "../ShopContext/shopContext";
import { useContext } from "react";
const product = () => {
  const { productId } = useParams();
  const { products } = useContext(shopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === protectId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };
  useEffect(() => {
    fetchProductData();
  }, [productID]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* product Data */}
      <div className="flex gap-2 sm:gap-12 flex-col m:flex-row">
        {/* product images */}
        <div className="flex-1 flex flex-col-reversegap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal m:w-[18.7%] w-full ">
            {productData.image.map((item) => (
              <img src={item} alt="" key={index} className="" />
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
