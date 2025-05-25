import type { JSX } from "react";
import lap4 from "../assets/lap3.jpg";
import Header from "../Component/Header";
import cart from "../assets/shopping-cart.svg";
import Footer from "../Component/Footer";

export default function AllProduct(): JSX.Element {
  return (
    <>
      <Header />
      <div className="px-4 py-8 mx-auto max-w-7xl">
        {/* Grid Container */}
        <div className="grid grid-cols-2 gap-4">
          {" "}
          {/* Always 2 columns */}
          {/* --- Tall Card --- */}
          <div className="group relative bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-lg h-[380px] overflow-hidden">
            <div className="p-4 h-3/5 bg-gray-50">
              <img
                src={lap4}
                alt="Product"
                className="object-contain w-full h-full transition-transform group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-between p-4 h-2/5">
              <div>
                <h3 className="text-sm font-medium line-clamp-1">
                  Premium Laptop
                </h3>
                <p className="mt-1 text-xs text-gray-500">Ultrabook Pro</p>
              </div>
              <span className="text-base font-bold">₦100,299</span>

              <div className="flex items-center justify-end mt-2">
                <button className="text-xs bg-600 text-white px-3 py-1.5 rounded-md flex justify-center items-center gap-2">
                  <img src={cart} alt="" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          {/* --- Short Card --- */}
          <div className="group relative bg-white rounded- h-[320px] overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            <div className="p-3 h-1/2 bg-gray-50">
              <img
                src={lap4}
                alt="Product"
                className="object-contain w-full h-full transition-transform group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-between p-3 h-1/2">
              <div>
                <h3 className="text-sm font-medium line-clamp-1">
                  Wireless Mouse
                </h3>
                <p className="mt-1 text-xs text-gray-500">Accessories</p>
              </div>
              <span className="text-base font-bold">₦100,299</span>
              <div className="flex items-center justify-end mt-2">
                <button className="text-xs bg-600 text-white px-3 py-1.5 rounded-md flex justify-center items-center gap-2">
                  <img src={cart} alt="" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          {/* Repeat pattern... */}
        </div>
      </div>
      <div className="px-4 py-8 mx-auto max-w-7xl">
        {/* Grid Container */}
        <div className="grid grid-cols-2 gap-4">
          {" "}
          {/* Always 2 columns */}
          {/* --- Tall Card --- */}
          <div className="group relative bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-lg h-[380px] overflow-hidden">
            <div className="p-4 h-3/5 bg-gray-50">
              <img
                src={lap4}
                alt="Product"
                className="object-contain w-full h-full transition-transform group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-between p-4 h-2/5">
              <div>
                <h3 className="text-sm font-medium line-clamp-1">
                  Premium Laptop
                </h3>
                <p className="mt-1 text-xs text-gray-500">Ultrabook Pro</p>
              </div>
              <span className="text-base font-bold">₦100,299</span>

              <div className="flex items-center justify-end mt-2">
                <button className="text-xs bg-600 text-white px-3 py-1.5 rounded-md flex justify-center items-center gap-2">
                  <img src={cart} alt="" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          {/* --- Short Card --- */}
          <div className="group relative bg-white rounded- h-[320px] overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            <div className="p-3 h-1/2 bg-gray-50">
              <img
                src={lap4}
                alt="Product"
                className="object-contain w-full h-full transition-transform group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-between p-3 h-1/2">
              <div>
                <h3 className="text-sm font-medium line-clamp-1">
                  Wireless Mouse
                </h3>
                <p className="mt-1 text-xs text-gray-500">Accessories</p>
              </div>
              <span className="text-base font-bold">₦100,299</span>
              <div className="flex items-center justify-end mt-2">
                <button className="text-xs bg-600 text-white px-3 py-1.5 rounded-md flex justify-center items-center gap-2">
                  <img src={cart} alt="" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          {/* Repeat pattern... */}
          {/* --- Tall Card --- */}
          <div className="group relative bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-lg h-[380px] overflow-hidden">
            <div className="p-4 h-3/5 bg-gray-50">
              <img
                src={lap4}
                alt="Product"
                className="object-contain w-full h-full transition-transform group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-between p-4 h-2/5">
              <div>
                <h3 className="text-sm font-medium line-clamp-1">
                  Premium Laptop
                </h3>
                <p className="mt-1 text-xs text-gray-500">Ultrabook Pro</p>
              </div>
              <span className="text-base font-bold">₦100,299</span>

              <div className="flex items-center justify-end mt-2">
                <button className="text-xs bg-600 text-white px-3 py-1.5 rounded-md flex justify-center items-center gap-2">
                  <img src={cart} alt="" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          {/* --- Short Card --- */}
          <div className="group relative bg-white rounded- h-[320px] overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            <div className="p-3 h-1/2 bg-gray-50">
              <img
                src={lap4}
                alt="Product"
                className="object-contain w-full h-full transition-transform group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-between p-3 h-1/2">
              <div>
                <h3 className="text-sm font-medium line-clamp-1">
                  Wireless Mouse
                </h3>
                <p className="mt-1 text-xs text-gray-500">Accessories</p>
              </div>
              <span className="text-base font-bold">₦100,299</span>
              <div className="flex items-center justify-end mt-2">
                <button className="text-xs bg-600 text-white px-3 py-1.5 rounded-md flex justify-center items-center gap-2">
                  <img src={cart} alt="" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
