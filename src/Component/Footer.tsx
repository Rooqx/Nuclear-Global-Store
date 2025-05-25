import type { JSX } from "react";
import cart from "../assets/shopping-cart.svg";
import user from "../assets/user-round.svg";
import home from "../assets/house.svg";
import fav from "../assets/heart.svg";
import category from "../assets/category_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg";

export default function Footer(): JSX.Element {
  return (
    <footer className="fixed flex items-center justify-center w-full bottom-2">
      <ul className="bg-600 w-[90%] h-[60px] flex rounded-full justify-center items-center text-[0.65rem] overflow-hidden footer">
        <li className="flex justify-center hover:bg-[#00000098] items-center py-4 text-white w-full h-full">
          <a
            className="border-r border-white w-full h-[20px] flex justify-center items-center flex-col gap-2"
            href="/"
          >
            <img src={home} className="w-[16px]" alt="home" />
            Home
          </a>
        </li>
        <li className="flex justify-center hover:bg-[#00000098] items-center py-4 text-white w-full h-full">
          <a
            className="border-r border-white w-full h-[20px] flex justify-center items-center flex-col gap-2"
            href="/categories"
          >
            <img src={category} className="w-[16px]" alt="Account" />
            Categories
          </a>
        </li>
        <li className="flex justify-center hover:bg-[#00000098] items-center py-4 text-white w-full h-full">
          <a
            className="border-r border-white w-full h-[20px] flex justify-center items-center flex-col gap-2"
            href="/favorites"
          >
            <img src={fav} className="w-[16px]" alt="" />
            Favorites
          </a>
        </li>
        <li className="flex justify-center hover:bg-[#00000098] items-center py-4 text-white w-full h-full">
          <a
            className="border-r border-white w-full h-[20px] flex justify-center items-center flex-col gap-2 "
            href="/cart"
          >
            <img src={cart} className="w-[16px]" alt="cart" />
            Cart
          </a>
        </li>
        <li className="flex justify-center hover:bg-[#00000098] items-center py-4 text-white w-full ">
          <a
            className="flex flex-col items-center justify-center w-full gap-2 "
            href="/user"
          >
            <img src={user} className="w-[16px]" alt="Account" />
            Account
          </a>
        </li>
      </ul>
    </footer>
  );
}
