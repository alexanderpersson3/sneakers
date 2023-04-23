import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Product } from "../../type";
// type Props = {
//   type:number,
// }

const Cart = () => {
  const cartItems: Product[] = useSelector(
    (state: RootState) => state.cart.items
  );
  const item: number = cartItems.length;

  return (
    <div className="w-[315px] md:w-[360] h-[256px]  rounded-xl bg-white shadow-lg relative ">
      <h1 className=" p-5 font-bold text-second">Cart</h1>
      <hr />
      <div className="p-5">
        {item === 0 && (
          <h1 className="text-center text-tertiary">Your Cart is Empty</h1>
        )}

        {item !== 0 && (
          <div className="overflow-y-scroll max-h-20   hide-scroll">
            {cartItems.map((item) => (
              <CartItem
                key={`${item.id}cart`}
                title={item.title}
                price={item.price}
                images={item.images}
                quantity={item.quantity}
                discount={item.discount}
                regularPrice={item.regularPrice}
              />
            ))}
          </div>
        )}

        {item !== 0 && (
          <button className="bottom-0 rounded-lg  bg-primary w-full py-3 text-white font-bold">
            Checkout
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
