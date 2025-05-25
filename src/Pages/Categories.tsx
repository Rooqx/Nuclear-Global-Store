import type { JSX } from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import lap from "../assets/lapbg1.png";
import lap2 from "../assets/lapbg2.png";
import lap3 from "../assets/lapbg3.png";

export default function Categories(): JSX.Element {
  return (
    <>
      <Header />
      <main>
        <p className="text-md text-pretty font-semibold  py-3 px-5 text-[#444343]">
          Categories:
        </p>
        <section className="flex flex-col items-center justify-center w-full gap-5 px-5 py-3 mb-[100px]">
          <div className="flex-shrink-0 w-full bg-200 h-[150px] shadow-[0_0_10px_rgba(0,0,0,0.5)] rounded-xl relative  overflow-hidden">
            <img src={lap} className="absolute top-0 -left-[150px]" alt="" />
            <img
              src={lap3}
              className="absolute -top-[30px] left-[60px]"
              alt=""
            />
            <img
              src={lap2}
              className="absolute w-[200px] top-5 -right-[80px]"
              alt=""
            />
            <p className="p-card absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-xl font-extrabold text-black">
              HP laptops
            </p>
          </div>
          <div className="flex-shrink-0 w-full bg-100 h-[150px] shadow-[0_0_10px_rgba(0,0,0,0.5)] rounded-xl relative overflow-hidden">
            <img src={lap} className="absolute top-0 -left-[150px]" alt="" />
            <img
              src={lap3}
              className="absolute -top-[30px] left-[60px]"
              alt=""
            />
            <img
              src={lap2}
              className="absolute w-[200px] top-5 -right-[80px]"
              alt=""
            />
            <p className="p-card absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-xl font-extrabold text-black">
              Dell laptops
            </p>
          </div>
          <div className="flex-shrink-0 w-full bg-200 h-[150px] shadow-[0_0_10px_rgba(0,0,0,0.5)] rounded-xl relative overflow-hidden">
            <img src={lap} className="absolute top-0 -left-[150px]" alt="" />
            <img
              src={lap3}
              className="absolute -top-[30px] left-[60px]"
              alt=""
            />
            <img
              src={lap2}
              className="absolute w-[200px] top-5 -right-[80px]"
              alt=""
            />
            <p className="p-card absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-xl font-extrabold text-black">
              Acer laptops
            </p>
          </div>
          <div className="flex-shrink-0 w-full bg-300 h-[150px] shadow-[0_0_10px_rgba(0,0,0,0.5)] rounded-xl relative overflow-hidden">
            <img src={lap} className="absolute top-0 -left-[150px]" alt="" />
            <img
              src={lap3}
              className="absolute -top-[30px] left-[60px]"
              alt=""
            />
            <img
              src={lap2}
              className="absolute w-[200px] top-5 -right-[80px]"
              alt=""
            />
            <p className="p-card absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-xl font-extrabold text-black">
              Asus laptops
            </p>
          </div>
          <div className="flex-shrink-0 w-full bg-400 h-[150px] shadow-[0_0_10px_rgba(0,0,0,0.5)] rounded-xl relative overflow-hidden">
            <img src={lap} className="absolute top-0 -left-[150px]" alt="" />
            <img
              src={lap3}
              className="absolute -top-[30px] left-[60px]"
              alt=""
            />
            <img
              src={lap2}
              className="absolute w-[200px] top-5 -right-[80px]"
              alt=""
            />
            <p className="p-card absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-xl font-extrabold text-black">
              MacBook
            </p>
          </div>
          <div className="flex-shrink-0 w-full bg-200 h-[150px] shadow-[0_0_10px_rgba(0,0,0,0.5)] rounded-xl relative overflow-hidden">
            <img src={lap} className="absolute top-0 -left-[150px]" alt="" />
            <img
              src={lap3}
              className="absolute -top-[30px] left-[60px]"
              alt=""
            />
            <img
              src={lap2}
              className="absolute w-[200px] top-5 -right-[80px]"
              alt=""
            />
            <p className="p-card absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-xl font-extrabold text-black w-full text-center">
              Lenovo laptops
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
