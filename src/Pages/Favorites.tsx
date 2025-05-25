import type { JSX } from "react";
import lap from "../assets/lap.jpg";
import Footer from "../Component/Footer";
import Header from "../Component/Header";

export default function Favorites(): JSX.Element {
  return (
    <>
      <Header />
      <main>
        <p className="px-5 py-3 font-extrabold text-[#444343]">
          Saved Products
        </p>
        <section>
          <ul className="flex flex-col items-center justify-center gap-2 p-5">
            <li className="w-full bg-50  rounded-sm py-4 px-2 relative shadow-[0_0_10px_rgba(0,0,0,0.2)]">
              <div className="flex gap-5">
                <div className="w-[20%] h-[70px] bg-white flex-shrink-0 flex justify-center items-center overflow-hidden">
                  <img src={lap} alt="" />
                </div>
                <p className="text-[0.85rem] font-semibold mt-2 flex flex-col">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos, cupiditate.
                  <strong className="mt-2 font-extrabold">₦ 600,000</strong>
                </p>
              </div>
              <div className="flex justify-between px-5 mt-5 item-center">
                <button className="font-semibold text-600">Remove</button>
                <button className=" text-white flex justify-center items-center font-bold h-[20px] bg-600 right-0 p-5 rounded-md shadow-">
                  Add to Cart
                </button>
              </div>
            </li>
            <li className="w-full bg-50 rounded-sm py-4 px-2 relative shadow-[0_0_10px_rgba(0,0,0,0.2)]">
              <div className="flex gap-5">
                <div className="w-[20%] h-[70px] bg-white flex-shrink-0 flex justify-center items-center overflow-hidden">
                  <img src={lap} alt="" />
                </div>
                <p className="text-[0.85rem] font-semibold mt-2 flex flex-col">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos, cupiditate.
                  <strong className="mt-2 font-extrabold">₦ 600,000</strong>
                </p>
              </div>
              <div className="flex justify-between px-5 mt-5 item-center">
                <button className="font-semibold text-600">Remove</button>
                <button className=" text-white flex justify-center items-center font-bold h-[20px] bg-600 right-0 p-5 rounded-md shadow-">
                  Add to Cart
                </button>
              </div>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
