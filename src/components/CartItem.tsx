import React from "react";
import { MdDelete } from "react-icons/md";
import { products } from "./Data";
type Props = {
  title: string;
  price: number;
  images: string[];
  quantity: number;
  regularPrice: number;
  discount: number;
};

const CartItem = ({
  title,
  price,
  images,
  quantity,
  regularPrice,
  discount,
}: Props) => {
  // Price calculator
  const netPrice = regularPrice - (discount / 100) * regularPrice;
  const total = netPrice * quantity;

  return (
    <div className="flex flex-row my-2">
      <img className="h-[50px] w-[50px]" src={images[0]} alt={title} />
      <div className="flex flex-col pl-5">
        <h1 className="text-sm text-tertiary">{products[0].title}</h1>
        <div className="flex flex-row items-center justify-between text-sm">
          <p className="text-tertiary ">
            ${netPrice.toFixed(2)} X {quantity}
            <span className="text-secondary ml-2 font-bold ">
              ${total.toFixed(2)}
            </span>
          </p>
          <MdDelete className="text-tertiary cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
