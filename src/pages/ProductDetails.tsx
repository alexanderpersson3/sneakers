import React, { useState } from "react";
import DetailsSlider from "../components/DetailsSlider";
import { products } from "../components/Data";
import { GoPlus } from "react-icons/go";
import { FaMinus } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import Backdrop from "../components/Backdrop";
import { addToCart } from "../store/cartSlice";

import { useDispatch } from "react-redux";

type Props = {};

const ProductDetails = (props: Props) => {
  const [quantity, setQuantity] = useState(1);
  const [activeLightBox, setActiveLightBox] = useState(true);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const dispatch = useDispatch();

  const product = {
    company: products[0].company,
    title: products[0].title,
    description: products[0].description,
    price: products[0].price,
    discount: products[0].discount,
    regularPrice: products[0].regularPrice,
    images: products[0].images,
    id: products[0].id,
    quantity: quantity,
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setQuantity(1);
  };

  // Price calculator
  const regularPrice = products[0].regularPrice;
  const discountPercentage = products[0].discount;
  const netPrice = regularPrice - (discountPercentage / 100) * regularPrice;

  return (
    <>
      <div className="flex flex-col relative md:pl-10">
        <div className=" md:px-[15px] lg:px-[8vw] md:pt-10 mb-10 ">
          <div className=" grid grid-cols-1 md:pb-20 md:grid-cols-2">
            {/* Image */}
            <section className="bg-white md:mb-10 rounded-b-xl ">
              <div className="w-[100%] flex justify-center">
                <DetailsSlider images={products[0].images} h={350} />
              </div>
            </section>

            {/* Text */}
            <section className="md:pt-7 md:ml-10">
              <div className="px-3 md:ml-10">
                <p className="text-sm  font-bold text-[#FF7E1B] my-2">
                  {products[0].company}
                </p>
                <h1 className="text-3xl mb-3 font-bold ">
                  {products[0].title}
                </h1>
                <p className="text-tertiary">{products[0].description}</p>

                <div className="flex flex-row md:flex-col justify-between">
                  <div className="flex flex-row items-center">
                    <p className="text-xl md:text-2xl font-bold my-5 text-[black]">
                      ${netPrice.toFixed(2)}
                    </p>
                    <p className="text-[#FF7E1B] text-sm bg-[#FFEEE2] line-through ml-3 px-1 rounded">
                      {products[0].discount}%
                    </p>
                  </div>
                  <p className="text-[#B6BCC8] font-bold  line-through md:-translate-y-3 my-5 md:my-0">
                    ${products[0].regularPrice.toFixed(2)}
                  </p>
                </div>

                <div className="flex flex-col md:flex-row items-center">
                  <div className="bg-[#F6F8FD] w-full md:w-fit md:h-fit text-lg font-bold px-4 py-2 md:mr-3  flex flex-row justify-between  items-center rounded">
                    <button
                      className="text-lg text-[#FF731B]"
                      onClick={handleDecrement}
                    >
                      <FaMinus />
                    </button>
                    <span className="mx-4">{quantity}</span>
                    <button
                      className="text-lg text-[#FF731B]"
                      onClick={handleIncrement}
                    >
                      <GoPlus />
                    </button>
                  </div>
                  <button
                    className="bg-[#FF7E1B] text-lg w-full md:w-fit md:px-6 my-4 py-2 px-4 text-white font-bold rounded-lg flex flex-row items-center justify-center"
                    onClick={handleAddToCart}
                  >
                    <BsCart3 className="inline mx-2 font-bold text-white" /> Add
                    to Cart
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>

        {activeLightBox ? (
          <div className="hidden md:block">
            <Backdrop />
            <div className="fixed z-40 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-[40%] h-[710px] w-[550px]">
              <MdClose
                onClick={() => {
                  setActiveLightBox(false);
                }}
                className="text-white text-2xl font-bold absolute right-1 -translate-y-7 cursor-pointer hover:text-primary"
              />
              <DetailsSlider
                images={products[0].images}
                h={350}
                setActiveLightBox={setActiveLightBox}
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default ProductDetails;
