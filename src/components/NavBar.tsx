import { MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import Cart from "./Cart";
import Backdrop from "./Backdrop";
import BackdropWhite from "./BackdropWhite";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const navItem = [
  { name: "Collection", id: 1, url: "/" },
  { name: "Men", id: 2, url: "/" },
  { name: "Wemen", id: 3, url: "/" },
  { name: "About", id: 4, url: "/" },
  { name: "Contact", id: 5, url: "/" },
];

const NavBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cartItems = useSelector((state: RootState) => state.cart.items);

  const cartItem: number = cartItems.length;

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  const [showNav, setShowNav] = useState(false);

  const NavToggleHandler = () => {
    setShowNav(!showNav);
  };

  const [showCart, setShowCart] = useState(false);

  const backdropHandler = () => {
    setShowNav(false);
    setShowCart(false);
  };

  return (
    <>
      <div className=" w-full  z-30  px-[10px] md:px-[20px] lg:px-[10%] sticky top-0 bg-white">
        <div className=" bg-white flex flex-row justify-between h-16 items-center pl-2">
          <div className="flex flex-row items-center">
            <div className="md:hidden">
              {!showNav && (
                <MdMenu
                  onClick={NavToggleHandler}
                  className="text-3xl text-tertiary font-bold cursor-pointer"
                />
              )}
            </div>

            <h1 className="text-xl font-bold md:px-0  text-[#1D2026]  mr-5 ml-5 md:ml-0">
              <Link to="/">
                <img src="/sneakers.png" alt="sneakers" />
              </Link>
            </h1>

            <ul
              className={`${
                !showNav ? "-translate-x-[110%]" : "translate-x-0"
              } md:translate-x-0 flex flex-col md:flex-row absolute md:relative top-0 px-5 pt-16 md:p-0 md:top-0 w-[70%] z-50 h-[100vh] justify-center2 md:justify-between items-start left-0 bg-white md:bg-inherit text-secondary font-bold md:font-normal md:text-tertiary md:bg-none md:h-fit`}
            >
              {showNav && (
                <MdClose
                  onClick={NavToggleHandler}
                  className=" md:hidden text-2xl cursor-pointer absolute top-5 left-5"
                />
              )}

              {navItem.map((item) => (
                <li
                  key={item.id}
                  onClick={() => {
                    setShowNav(false);
                  }}
                  className={`px-2 py-2 md:py-0 hover:text-secondary cursor-pointer`}
                >
                  <Link
                    to={item.url}
                    className={`md:hover:border-b-2 border-[#FF7E1B]  pb-8  ${
                      activeIndex === item.id
                        ? " md:border-b-2 border-[#FF7E1B] text-secondary "
                        : ""
                    }`}
                    onClick={() => handleClick(item.id)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Backdrop set up */}
            {showNav ? (
              <button onClick={backdropHandler}>
                <Backdrop />
              </button>
            ) : (
              ""
            )}
            {/* Backdrop set up */}
            {showCart ? (
              <button onClick={backdropHandler}>
                <BackdropWhite />
              </button>
            ) : (
              ""
            )}
          </div>

          <div className="flex flex-row items-center ">
            {/* cart */}
            <div className="relative" onClick={() => setShowCart(!showCart)}>
              {cartItem !== 0 && (
                <div className="absolute bg-primary h-[13px] w-[19px] flex items-center justify-center rounded-2xl py-2 px-3 text-sm font-bold text-white translate-x-2 -translate-y-2 cursor-pointer">
                  {cartItem}
                </div>
              )}
              <BsCart3 className="text-2xl cursor-pointer text-[#69707D] " />
            </div>

            {/* profile */}
            <div className="ml-4 md:ml-10 hover:bg-[#FF7E1B] rounded-full transition-all duration-300 ">
              <img
                className="h-[50px] w-[50px] m-[2px] rounded-full cursor-pointer "
                src="Photo.png"
                alt="profile"
              />
            </div>
          </div>
        </div>
        <hr className="mt-3" />
      </div>
      {showCart && (
        <>
          {/* Backdrop set up */}
          <div className=" z-40 fixed left-1/2 md:left-[80%]  top-60  transform -translate-x-1/2 -translate-y-1/2   md:top-16  md:z-50 md:translate-y-0  ">
            <Cart />
          </div>
        </>
      )}
    </>
  );
};

export default NavBar;
