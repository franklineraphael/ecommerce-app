import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../ShopContext/shopContext";
import { useContext } from "react";
import { assets } from "../assets-2/admin_assets/assets";
import asset1 from "../assets-2/frontend_assets/star_icon.png";
import asset2 from "../assets-2/frontend_assets/star_dull_icon.png";
import RelatedProduct from "../component/RelatedProduct";
const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };
  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* product images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal m:w-[18.7%] w-full ">
            {productData.image.map((item, index) => (
              <img
                src={item}
                alt=""
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex shrink-0 cursor-pointer "
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="" />
          </div>
        </div>
        {/* product info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={asset1} alt="" className="w-3 5" />
            <img src={asset1} alt="" className="w-3 5" />
            <img src={asset1} alt="" className="w-3 5" />
            <img src={asset1} alt="" className="w-3 5" />
            <img src={asset2} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8 ">
            <p>select size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-black text-white rounded-xl ${
                    item === size ? "border-blue-500 " : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            ADD TO CART
          </button>
          <hr className="mt-5 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* description & review section */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm"> Review</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            Starting with a single collection of hand-printed hoodies and tees,
            the brand quickly gained traction for its bold yet understated
            designs. Each piece was crafted with a focus on sustainability,
            using organic materials and ethical production practices.
          </p>
          <p>
            Today, Unvld is more than a clothing brand—it's a movement,
            celebrating raw individuality and mindful living.
          </p>
        </div>
      </div>

      {/* display related products */}
      <RelatedProduct
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
