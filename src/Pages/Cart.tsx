import type { JSX } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Component/Header";
import img from "../assets/lap.jpg";
import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";
import trash from "../assets/trash-2.svg";
import pen from "../assets/pencil.svg";
import call from "../assets/phone.svg";
import back from "../assets/chevron-left.svg";

export default function Cart(): JSX.Element {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <main>
        <section className="flex items-center gap-2 px-5 py-2">
          <button onClick={() => navigate("/")} className="bg-600">
            <img src={back} loading="lazy" alt="" />
          </button>
          <p className="text-2xl font-bold">Cart </p>
          <div className="w-[32px] h-[32px] bg-50 rounded-full flex items-end shadow-[0_0_5px_rgba(0,0,0,0.1)] justify-center font-extrabold">
            2
          </div>
        </section>
        <section className="px-6 py-2">
          <div className="w-full px-3 text-[0.7rem] py-2 rounded-lg bg-50 relative shadow-[0_0_5px_rgba(0,0,0,0.1)]">
            <p className="mb-1 font-extrabold text-[0.8rem]">
              Shipping Address
            </p>
            <p className="font-normal w-[85%]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui id
              veritatis odio, voluptates laudantium itaque.
            </p>
            <button className="w-[30px] absolute top-[50%] h-[30px] rounded-full bg-500 right-3 flex justify-center items-center">
              <img src={pen} loading="lazy" className="w-[16px]" alt="" />
            </button>
          </div>
        </section>
        <section className="px-6 py-2">
          <div className="w-full px-3 text-[0.7rem] py-2 rounded-lg bg-50 relative shadow-[0_0_5px_rgba(0,0,0,0.1)]">
            <ul>
              <li className="flex items-center gap-5">
                <div className="bg-white w-[100px] flex-shrink-0 h-[80px] rounded-lg flex justify-center items-center overflow-hidden relative">
                  <button className="w-[30px] absolute bottom-0 h-[30px] rounded-full bg-[#e4e4e4] left-0 flex justify-center items-center">
                    <img
                      src={trash}
                      loading="lazy"
                      className="w-[16px]"
                      alt=""
                    />
                  </button>
                  <img src={img} loading="lazy" alt="product" />
                </div>
                <div>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                  <p className="mt-2">
                    Brand: <strong>HP</strong>
                  </p>
                  <div className="flex items-center justify-between w-full mt-2">
                    <span>
                      <strong>₦600,000</strong>
                    </span>
                    <div className="flex gap-3">
                      <button className="flex items-center w-[30px] h-[30px] justify-center rounded-full bg-500">
                        <img
                          src={minus}
                          loading="lazy"
                          className="w-[16px]"
                          alt=""
                        />
                      </button>
                      <input
                        type="text"
                        value={1}
                        className="w-[30px] h-[30px] rounded-full text-center"
                      />
                      <button className="flex items-center w-[30px] h-[30px] justify-center rounded-full bg-500">
                        <img
                          src={plus}
                          loading="lazy"
                          className="w-[16px]"
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <footer className="fixed bottom-0 w-full py-5 shadow-[0_0_10px_rgba(0,0,0,0.2)]">
        <div className="flex items-center justify-center gap-5">
          <button className="px-4 py-3 rounded-lg bg-600">
            <img src={call} alt="" />
          </button>

          <button className="py-3 font-extrabold text-white rounded-lg bg-600 px-9">
            Checkout
          </button>
        </div>
      </footer>
    </>
  );
}
