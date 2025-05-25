import type { JSX } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Header from "../Component/Header";
import NuclearLoading from "../Component/Loading";
import Footer from "../Component/Footer";
import Auto3DImageGallery from "../Component/Image3DEffect";
import lap from "../assets/lap10.png";
import lap2 from "../assets/lap.jpg";
import lap3 from "../assets/lap1.jpg";
import acer from "../assets/acer.svg";
import dell from "../assets/dell.svg";
import apple from "../assets/apple.svg";
import lenovo from "../assets/lenovo.svg";
import hp from "../assets/hp.svg";
import razer from "../assets/razer.svg";
import rog from "../assets/republicofgamers.svg";
import lg from "../assets/lg.svg";
import samsung from "../assets/samsung.svg";
import heart from "../assets/heart.svg";
import lapbg from "../assets/lapbg1.png";
import lapbg2 from "../assets/lapbg2.png";
import lapbg3 from "../assets/lapbg3.png";
import cart from "../assets/shopping-cart.svg";

export default function Home(): JSX.Element {
  const images = [
    { src: lap, alt: "Product shot 1" },
    { src: lap2, alt: "Product shot 2" },
    { src: lap3, alt: "Product shot 3" },
  ];
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  // Framer Motion hooks
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 3 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      {
        <div className="transition-opacity duration-500">
          {isLoading ? <NuclearLoading /> : null}
        </div>
      }
      <Header />
      <main>
        <motion.section
          className="px-2 py-5 "
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={sectionVariants}
        >
          <div className="w-full h-[60vh] bg-slate-400 rounded-[20px] relative  overflow-hidden flex justify-center items-center">
            <div className="bg-[#00000078] blur-xl rounded-full w-full h-full absolute z-[2] -top-[250px] left-[200px]"></div>
            <div className="bg-[#00000078] blur-xl rounded-full w-full h-full absolute z-[2] -bottom-[250px] left-[200px]"></div>
            <div className="bg-[#00000078] blur-xl rounded-full w-full h-full absolute z-[2] -top-[250px] right-[200px]"></div>
            <div className="bg-[#00000078] blur-xl rounded-full w-full h-full absolute z-[2] -bottom-[250px] right-[200px]"></div>
            <div className="absolute z-[5] text-3xl py-2 px-4 h-full flex justify-center items-center gap-2 flex-col text-white [text-shadow:_1px_1px_0_black,_-1px_-1px_0_black,_1px_-1px_0_black,_-1px_1px_0_black]">
              <p className="flex">Welcome To </p>{" "}
              <p className="w-full font-extrabold text-center ">
                Nuclear Vision Global Link Limited
              </p>
            </div>

            <Auto3DImageGallery
              images={images}
              interval={3000}
              className="product-showcase"
            />
            <button
              className="absolute bottom-5 bg-600 rounded-3xl hover:bg-500 active:bg-700 py-3 px-6 text-white font-extrabold left-[50%] translate-x-[-50%] z-[5]"
              onClick={() => navigate("/products")}
            >
              Shop Now
            </button>
          </div>
        </motion.section>
        <motion.section
          className="mt-5"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={sectionVariants}
        >
          <div className="flex flex-col items-center justify-center w-full font-bold">
            <p>Flash Sales Discount Starts In</p>
            <h1 className="text-[2.5rem]">00:00:00</h1>
          </div>
        </motion.section>
        <motion.section
          className="mt-5 overflow-hidden"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={sectionVariants}
        >
          <div className="bg-[#ffffff] py-2 relative">
            <p className="w-full py-5 text-3xl font-extrabold text-center">
              Top Brands
            </p>
            <div className="flex items-center animate-marquee whitespace-nowrap">
              <ul className="flex gap-5 py-2 min-w-max">
                {/* Original Logos */}
                {[
                  acer,
                  dell,
                  hp,
                  samsung,
                  razer,
                  rog,
                  apple,
                  lenovo,
                  rog,
                  lg,
                ].map((logo, index) => (
                  <li key={`original-${index}`}>
                    <img src={logo} className="w-[60px]" alt="" />
                  </li>
                ))}
                {/* Duplicated Logos (for seamless loop) */}
                {[
                  acer,
                  dell,
                  hp,
                  samsung,
                  razer,
                  rog,
                  apple,
                  lenovo,
                  lg,
                  rog,
                ].map((logo, index) => (
                  <li key={`duplicate-${index}`}>
                    <img src={logo} className="w-[60px]" alt="" />
                  </li>
                ))}
                {/* Duplicated Logos (for seamless loop) */}
                {[
                  acer,
                  dell,
                  hp,
                  samsung,
                  razer,
                  rog,
                  apple,
                  lenovo,
                  lg,
                  rog,
                ].map((logo, index) => (
                  <li key={`duplicate-${index}`}>
                    <img src={logo} className="w-[60px]" alt="" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>
        <section className="w-full py-10">
          <div className="flex items-center gap-3 overflow-x-auto">
            <div className="bg-50 w-[70%] h-[500px] rounded-2xl flex-shrink-0 ml-5 flex flex-col items-center py-3 relative overflow-hidden">
              <p className="p-cards">HP laptops</p>
              <img
                src={lapbg}
                className="absolute top-[100px] -right-5"
                loading="lazy"
                alt=""
              />
              <img
                src={lapbg2}
                className="absolute bottom-[20px] w-[70%]"
                loading="lazy"
                alt=""
              />
              <img
                src={lapbg3}
                className="absolute top-[100px] w-[70%] -left-10"
                loading="lazy"
                alt=""
              />
            </div>
            <div className="bg-300 w-[70%] h-[500px] rounded-2xl flex-shrink-0 flex flex-col items-center py-3 relative overflow-hidden">
              <p className="p-cards">Dell laptops</p>
              <img
                src={lapbg}
                className="absolute top-[100px] -right-5"
                loading="lazy"
                alt=""
              />
              <img
                src={lapbg2}
                className="absolute bottom-[20px] w-[70%]"
                loading="lazy"
                alt=""
              />
              <img
                src={lapbg3}
                className="absolute top-[100px] w-[70%] -left-10"
                loading="lazy"
                alt=""
              />
            </div>
            <div className="bg-50 w-[70%] h-[500px] rounded-2xl flex-shrink-0 flex flex-col items-center py-3 relative overflow-hidden">
              <p className="p-cards">MacBook</p>
              <img
                src={lapbg}
                className="absolute top-[100px] -right-5"
                loading="lazy"
                alt=""
              />
              <img
                src={lapbg2}
                className="absolute bottom-[20px] w-[70%]"
                loading="lazy"
                alt=""
              />
              <img
                src={lapbg3}
                className="absolute top-[100px] w-[70%] -left-10"
                loading="lazy"
                alt=""
              />
            </div>
            <div className="bg-400 w-[70%] h-[500px] rounded-2xl flex-shrink-0 flex flex-col items-center py-3 relative overflow-hidden">
              <p className="p-cards">Acer laptops</p>
              <img
                src={lapbg}
                className="absolute top-[100px] -right-5"
                loading="lazy"
                alt=""
              />
              <img
                src={lapbg2}
                className="absolute bottom-[20px] w-[70%]"
                loading="lazy"
                alt=""
              />
              <img
                src={lapbg3}
                className="absolute top-[100px] w-[70%] -left-10"
                loading="lazy"
                alt=""
              />
            </div>
          </div>
        </section>
        <section className="mt-5">
          <ul className="flex items-center w-full gap-2 overflow-x-auto">
            <li className="w-full flex justify-center items-center text-[0.8rem] px-4 py-2 hover:bg-black  hover:text-white rounded-3xl transition-all duration-300">
              Dell
            </li>
            <li className="w-full flex justify-center items-center text-[0.8rem] px-4 py-2 hover:bg-black  hover:text-white rounded-3xl transition-all duration-300">
              Hp
            </li>
            <li className="w-full flex justify-center items-center text-[0.8rem] px-4 py-2 hover:bg-black  hover:text-white rounded-3xl transition-all duration-300">
              MacBook
            </li>
            <li className="w-full flex justify-center items-center text-[0.8rem] px-4 py-2 hover:bg-black  hover:text-white rounded-3xl transition-all duration-300">
              Acer
            </li>
            <li className="w-full flex justify-center items-center text-[0.8rem] px-4 py-2 hover:bg-black  hover:text-white rounded-3xl transition-all duration-300">
              Asus
            </li>
            <li className="w-full flex justify-center items-center text-[0.8rem] px-4 py-2 hover:bg-black  hover:text-white rounded-3xl transition-all duration-300">
              Lenovo
            </li>
            <li className="w-full flex justify-center items-center text-[0.8rem] px-4 py-2 hover:bg-black  hover:text-white rounded-3xl transition-all duration-300">
              MSI
            </li>
            <li className="w-full flex justify-center items-center text-[0.8rem] px-4 py-2 hover:bg-black  hover:text-white rounded-3xl transition-all duration-300">
              Samsung
            </li>
            <li className="w-full flex justify-center items-center text-[0.8rem] px-4 py-2 hover:bg-black  hover:text-white rounded-3xl transition-all duration-300">
              Razer
            </li>
          </ul>
          <ul className="flex items-center gap-3 py-3 overflow-x-auto">
            <div className="w-[5px] flex-shrink-0"></div>
            <li
              className="flex-shrink-0 w-[150px] h-[270px] bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.2)] overflow-hidden  relative"
              onClick={() => navigate("/product")}
            >
              <button className="absolute top-2 right-2 w-[24px] h-[24px] bg-700 rounded-full flex justify-center items-center gap-2">
                <img src={heart} loading="lazy" className="w-[14px]" alt="" />
              </button>
              <div className="w-full h-[50%] bg-white overflow-hidden">
                <img src={lap3} alt="" />
              </div>
              <div className="flex justify-between items-center py-2 px-4 text-[0.7rem] text-[#515151]">
                <p>Brand</p>
                <p>Ratings</p>
              </div>
              <div className="w-full -mt-3 text-[0.8rem] font-extrabold leading-none py-2 px-2">
                <p>Lorem ipsum dolor sit amet.</p>
                <p className="text-[grey] font-normal mt-3 flex justify-between">
                  Price{" "}
                  <strong className="font-bold text-black">₦ 500,000</strong>
                </p>
              </div>
              <div className="flex justify-center w-full">
                <button className="bg-600 mt-1 py-2 px-4 rounded-lg text-[0.7rem] text-white   font-bold  flex justify-center items-center gap-2">
                  <img src={cart} alt="" />
                  Add Cart
                </button>
              </div>
            </li>{" "}
            <li
              className="flex-shrink-0 w-[150px] h-[270px] bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.2)] overflow-hidden  relative"
              onClick={() => navigate("/product")}
            >
              <button className="absolute top-2 right-2 w-[24px] h-[24px] bg-700 rounded-full flex justify-center items-center gap-2">
                <img src={heart} loading="lazy" className="w-[14px]" alt="" />
              </button>
              <div className="w-full h-[50%] bg-white overflow-hidden">
                <img src={lap3} alt="" />
              </div>
              <div className="flex justify-between items-center py-2 px-4 text-[0.7rem] text-[#515151]">
                <p>Brand</p>
                <p>Ratings</p>
              </div>
              <div className="w-full -mt-3 text-[0.8rem] font-extrabold leading-none py-2 px-2">
                <p>Lorem ipsum dolor sit amet.</p>
                <p className="text-[grey] font-normal mt-3 flex justify-between">
                  Price{" "}
                  <strong className="font-bold text-black">₦ 500,000</strong>
                </p>
              </div>
              <div className="flex justify-center w-full">
                <button className="bg-600 mt-1 py-2 px-4 rounded-lg text-[0.7rem] text-white   font-bold  flex justify-center items-center gap-2">
                  <img src={cart} alt="" />
                  Add Cart
                </button>
              </div>
            </li>
            <li
              className="flex-shrink-0 w-[150px] h-[270px] bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.2)] overflow-hidden  relative"
              onClick={() => navigate("/product")}
            >
              <button className="absolute top-2 right-2 w-[24px] h-[24px] bg-700 rounded-full flex justify-center items-center gap-2">
                <img src={heart} loading="lazy" className="w-[14px]" alt="" />
              </button>
              <div className="w-full h-[50%] bg-white overflow-hidden">
                <img src={lap3} alt="" />
              </div>
              <div className="flex justify-between items-center py-2 px-4 text-[0.7rem] text-[#515151]">
                <p>Brand</p>
                <p>Ratings</p>
              </div>
              <div className="w-full -mt-3 text-[0.8rem] font-extrabold leading-none py-2 px-2">
                <p>Lorem ipsum dolor sit amet.</p>
                <p className="text-[grey] font-normal mt-3 flex justify-between">
                  Price{" "}
                  <strong className="font-bold text-black">₦ 500,000</strong>
                </p>
              </div>
              <div className="flex justify-center w-full">
                <button className="bg-600 mt-1 py-2 px-4 rounded-lg text-[0.7rem] text-white   font-bold  flex justify-center items-center gap-2">
                  <img src={cart} alt="" />
                  Add Cart
                </button>
              </div>
            </li>
            <li
              className="flex-shrink-0 w-[150px] h-[270px] bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.2)] overflow-hidden  relative"
              onClick={() => navigate("/product")}
            >
              <button className="absolute top-2 right-2 w-[24px] h-[24px] bg-700 rounded-full flex justify-center items-center gap-2">
                <img src={heart} loading="lazy" className="w-[14px]" alt="" />
              </button>
              <div className="w-full h-[50%] bg-white overflow-hidden">
                <img src={lap3} alt="" />
              </div>
              <div className="flex justify-between items-center py-2 px-4 text-[0.7rem] text-[#515151]">
                <p>Brand</p>
                <p>Ratings</p>
              </div>
              <div className="w-full -mt-3 text-[0.8rem] font-extrabold leading-none py-2 px-2">
                <p>Lorem ipsum dolor sit amet.</p>
                <p className="text-[grey] font-normal mt-3 flex justify-between">
                  Price{" "}
                  <strong className="font-bold text-black">₦ 500,000</strong>
                </p>
              </div>
              <div className="flex justify-center w-full">
                <button className="bg-600 mt-1 py-2 px-4 rounded-lg text-[0.7rem] text-white   font-bold  flex justify-center items-center gap-2">
                  <img src={cart} alt="" />
                  Add Cart
                </button>
              </div>
            </li>
            <li
              className="flex-shrink-0 w-[150px] h-[270px] bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.2)] overflow-hidden  relative"
              onClick={() => navigate("/product")}
            >
              <button className="absolute top-2 right-2 w-[24px] h-[24px] bg-700 rounded-full flex justify-center items-center gap-2">
                <img src={heart} loading="lazy" className="w-[14px]" alt="" />
              </button>
              <div className="w-full h-[50%] bg-white overflow-hidden">
                <img src={lap3} alt="" />
              </div>
              <div className="flex justify-between items-center py-2 px-4 text-[0.7rem] text-[#515151]">
                <p>Brand</p>
                <p>Ratings</p>
              </div>
              <div className="w-full -mt-3 text-[0.8rem] font-extrabold leading-none py-2 px-2">
                <p>Lorem ipsum dolor sit amet.</p>
                <p className="text-[grey] font-normal mt-3 flex justify-between">
                  Price{" "}
                  <strong className="font-bold text-black">₦ 500,000</strong>
                </p>
              </div>
              <div className="flex justify-center w-full">
                <button className="bg-600 mt-1 py-2 px-4 rounded-lg text-[0.7rem] text-white   font-bold  flex justify-center items-center gap-2">
                  <img src={cart} alt="" />
                  Add Cart
                </button>
              </div>
            </li>
          </ul>
        </section>
        <section className="mt-5">
          <div className="flex py-2 px-5 justify-between font-bold text-[0.9rem] ">
            <p>Video editing and Coding</p>
            <p className="font-normal text-gray-500">See All</p>
          </div>
          <ul className="flex items-center gap-3 py-3 overflow-x-auto">
            <div className="w-[5px] flex-shrink-0"></div>
            <li
              className="flex-shrink-0 w-[150px] h-[270px] bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.2)] overflow-hidden  relative"
              onClick={() => navigate("/product")}
            >
              <button className="absolute top-2 right-2 w-[24px] h-[24px] bg-700 rounded-full flex justify-center items-center gap-2">
                <img src={heart} loading="lazy" className="w-[14px]" alt="" />
              </button>
              <div className="w-full h-[50%] bg-white overflow-hidden">
                <img src={lap3} alt="" />
              </div>
              <div className="flex justify-between items-center py-2 px-4 text-[0.7rem] text-[#515151]">
                <p>Brand</p>
                <p>Ratings</p>
              </div>
              <div className="w-full -mt-3 text-[0.8rem] font-extrabold leading-none py-2 px-2">
                <p>Lorem ipsum dolor sit amet.</p>
                <p className="text-[grey] font-normal mt-3 flex justify-between">
                  Price{" "}
                  <strong className="font-bold text-black">₦ 500,000</strong>
                </p>
              </div>
              <div className="flex justify-center w-full">
                <button className="bg-600 mt-1 py-2 px-4 rounded-lg text-[0.7rem] text-white   font-bold  flex justify-center items-center gap-2">
                  <img src={cart} alt="" />
                  Add Cart
                </button>
              </div>
            </li>{" "}
            <li
              className="flex-shrink-0 w-[150px] h-[270px] bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.2)] overflow-hidden  relative"
              onClick={() => navigate("/product")}
            >
              <button className="absolute top-2 right-2 w-[24px] h-[24px] bg-700 rounded-full flex justify-center items-center gap-2">
                <img src={heart} loading="lazy" className="w-[14px]" alt="" />
              </button>
              <div className="w-full h-[50%] bg-white overflow-hidden">
                <img src={lap3} alt="" />
              </div>
              <div className="flex justify-between items-center py-2 px-4 text-[0.7rem] text-[#515151]">
                <p>Brand</p>
                <p>Ratings</p>
              </div>
              <div className="w-full -mt-3 text-[0.8rem] font-extrabold leading-none py-2 px-2">
                <p>Lorem ipsum dolor sit amet.</p>
                <p className="text-[grey] font-normal mt-3 flex justify-between">
                  Price{" "}
                  <strong className="font-bold text-black">₦ 500,000</strong>
                </p>
              </div>
              <div className="flex justify-center w-full">
                <button className="bg-600 mt-1 py-2 px-4 rounded-lg text-[0.7rem] text-white   font-bold  flex justify-center items-center gap-2">
                  <img src={cart} alt="" />
                  Add Cart
                </button>
              </div>
            </li>
            <li
              className="flex-shrink-0 w-[150px] h-[270px] bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.2)] overflow-hidden  relative"
              onClick={() => navigate("/product")}
            >
              <button className="absolute top-2 right-2 w-[24px] h-[24px] bg-700 rounded-full flex justify-center items-center gap-2">
                <img src={heart} loading="lazy" className="w-[14px]" alt="" />
              </button>
              <div className="w-full h-[50%] bg-white overflow-hidden">
                <img src={lap3} alt="" />
              </div>
              <div className="flex justify-between items-center py-2 px-4 text-[0.7rem] text-[#515151]">
                <p>Brand</p>
                <p>Ratings</p>
              </div>
              <div className="w-full -mt-3 text-[0.8rem] font-extrabold leading-none py-2 px-2">
                <p>Lorem ipsum dolor sit amet.</p>
                <p className="text-[grey] font-normal mt-3 flex justify-between">
                  Price{" "}
                  <strong className="font-bold text-black">₦ 500,000</strong>
                </p>
              </div>
              <div className="flex justify-center w-full">
                <button className="bg-600 mt-1 py-2 px-4 rounded-lg text-[0.7rem] text-white   font-bold  flex justify-center items-center gap-2">
                  <img src={cart} alt="" />
                  Add Cart
                </button>
              </div>
            </li>
            <li
              className="flex-shrink-0 w-[150px] h-[270px] bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.2)] overflow-hidden  relative"
              onClick={() => navigate("/product")}
            >
              <button className="absolute top-2 right-2 w-[24px] h-[24px] bg-700 rounded-full flex justify-center items-center gap-2">
                <img src={heart} loading="lazy" className="w-[14px]" alt="" />
              </button>
              <div className="w-full h-[50%] bg-white overflow-hidden">
                <img src={lap3} alt="" />
              </div>
              <div className="flex justify-between items-center py-2 px-4 text-[0.7rem] text-[#515151]">
                <p>Brand</p>
                <p>Ratings</p>
              </div>
              <div className="w-full -mt-3 text-[0.8rem] font-extrabold leading-none py-2 px-2">
                <p>Lorem ipsum dolor sit amet.</p>
                <p className="text-[grey] font-normal mt-3 flex justify-between">
                  Price{" "}
                  <strong className="font-bold text-black">₦ 500,000</strong>
                </p>
              </div>
              <div className="flex justify-center w-full">
                <button className="bg-600 mt-1 py-2 px-4 rounded-lg text-[0.7rem] text-white   font-bold  flex justify-center items-center gap-2">
                  <img src={cart} alt="" />
                  Add Cart
                </button>
              </div>
            </li>
            <li
              className="flex-shrink-0 w-[150px] h-[270px] bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.2)] overflow-hidden  relative"
              onClick={() => navigate("/product")}
            >
              <button className="absolute top-2 right-2 w-[24px] h-[24px] bg-700 rounded-full flex justify-center items-center gap-2">
                <img src={heart} loading="lazy" className="w-[14px]" alt="" />
              </button>
              <div className="w-full h-[50%] bg-white overflow-hidden">
                <img src={lap3} alt="" />
              </div>
              <div className="flex justify-between items-center py-2 px-4 text-[0.7rem] text-[#515151]">
                <p>Brand</p>
                <p>Ratings</p>
              </div>
              <div className="w-full -mt-3 text-[0.8rem] font-extrabold leading-none py-2 px-2">
                <p>Lorem ipsum dolor sit amet.</p>
                <p className="text-[grey] font-normal mt-3 flex justify-between">
                  Price{" "}
                  <strong className="font-bold text-black">₦ 500,000</strong>
                </p>
              </div>
              <div className="flex justify-center w-full">
                <button className="bg-600 mt-1 py-2 px-4 rounded-lg text-[0.7rem] text-white   font-bold  flex justify-center items-center gap-2">
                  <img src={cart} alt="" />
                  Add Cart
                </button>
              </div>
            </li>
          </ul>
        </section>
        <section className="mt-5">
          <div className="flex py-2 px-5 justify-between font-bold text-[0.9rem] ">
            <p>Student Laptops</p>
            <p className="font-normal text-gray-500">See All</p>
          </div>
          <ul className="flex items-center gap-3 py-3 overflow-x-auto">
            <div className="w-[5px]  flex-shrink-0"></div>
            <li
              className="flex-shrink-0 w-[150px] h-[270px] bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.2)] overflow-hidden  relative"
              onClick={() => navigate("/product")}
            >
              <button className="absolute top-2 right-2 w-[24px] h-[24px] bg-700 rounded-full flex justify-center items-center gap-2">
                <img src={heart} loading="lazy" className="w-[14px]" alt="" />
              </button>
              <div className="w-full h-[50%] bg-white overflow-hidden">
                <img src={lap3} alt="" />
              </div>
              <div className="flex justify-between items-center py-2 px-4 text-[0.7rem] text-[#515151]">
                <p>Brand</p>
                <p>Ratings</p>
              </div>
              <div className="w-full -mt-3 text-[0.8rem] font-extrabold leading-none py-2 px-2">
                <p>Lorem ipsum dolor sit amet.</p>
                <p className="text-[grey] font-normal mt-3 flex justify-between">
                  Price{" "}
                  <strong className="font-bold text-black">₦ 500,000</strong>
                </p>
              </div>
              <div className="flex justify-center w-full">
                <button className="bg-600 mt-1 py-2 px-4 rounded-lg text-[0.7rem] text-white   font-bold  flex justify-center items-center gap-2">
                  <img src={cart} alt="" />
                  Add Cart
                </button>
              </div>
            </li>{" "}
            <li
              className="flex-shrink-0 w-[150px] h-[270px] bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.2)] overflow-hidden  relative"
              onClick={() => navigate("/product")}
            >
              <button className="absolute top-2 right-2 w-[24px] h-[24px] bg-700 rounded-full flex justify-center items-center gap-2">
                <img src={heart} loading="lazy" className="w-[14px]" alt="" />
              </button>
              <div className="w-full h-[50%] bg-white overflow-hidden">
                <img src={lap3} alt="" />
              </div>
              <div className="flex justify-between items-center py-2 px-4 text-[0.7rem] text-[#515151]">
                <p>Brand</p>
                <p>Ratings</p>
              </div>
              <div className="w-full -mt-3 text-[0.8rem] font-extrabold leading-none py-2 px-2">
                <p>Lorem ipsum dolor sit amet.</p>
                <p className="text-[grey] font-normal mt-3 flex justify-between">
                  Price{" "}
                  <strong className="font-bold text-black">₦ 500,000</strong>
                </p>
              </div>
              <div className="flex justify-center w-full">
                <button className="bg-600 mt-1 py-2 px-4 rounded-lg text-[0.7rem] text-white   font-bold  flex justify-center items-center gap-2">
                  <img src={cart} alt="" />
                  Add Cart
                </button>
              </div>
            </li>
            <li
              className="flex-shrink-0 w-[150px] h-[270px] bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.2)] overflow-hidden  relative"
              onClick={() => navigate("/product")}
            >
              <button className="absolute top-2 right-2 w-[24px] h-[24px] bg-700 rounded-full flex justify-center items-center gap-2">
                <img src={heart} loading="lazy" className="w-[14px]" alt="" />
              </button>
              <div className="w-full h-[50%] bg-white overflow-hidden">
                <img src={lap3} alt="" />
              </div>
              <div className="flex justify-between items-center py-2 px-4 text-[0.7rem] text-[#515151]">
                <p>Brand</p>
                <p>Ratings</p>
              </div>
              <div className="w-full -mt-3 text-[0.8rem] font-extrabold leading-none py-2 px-2">
                <p>Lorem ipsum dolor sit amet.</p>
                <p className="text-[grey] font-normal mt-3 flex justify-between">
                  Price{" "}
                  <strong className="font-bold text-black">₦ 500,000</strong>
                </p>
              </div>
              <div className="flex justify-center w-full">
                <button className="bg-600 mt-1 py-2 px-4 rounded-lg text-[0.7rem] text-white   font-bold  flex justify-center items-center gap-2">
                  <img src={cart} alt="" />
                  Add Cart
                </button>
              </div>
            </li>
            <li
              className="flex-shrink-0 w-[150px] h-[270px] bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.2)] overflow-hidden  relative"
              onClick={() => navigate("/product")}
            >
              <button className="absolute top-2 right-2 w-[24px] h-[24px] bg-700 rounded-full flex justify-center items-center gap-2">
                <img src={heart} loading="lazy" className="w-[14px]" alt="" />
              </button>
              <div className="w-full h-[50%] bg-white overflow-hidden">
                <img src={lap3} alt="" />
              </div>
              <div className="flex justify-between items-center py-2 px-4 text-[0.7rem] text-[#515151]">
                <p>Brand</p>
                <p>Ratings</p>
              </div>
              <div className="w-full -mt-3 text-[0.8rem] font-extrabold leading-none py-2 px-2">
                <p>Lorem ipsum dolor sit amet.</p>
                <p className="text-[grey] font-normal mt-3 flex justify-between">
                  Price{" "}
                  <strong className="font-bold text-black">₦ 500,000</strong>
                </p>
              </div>
              <div className="flex justify-center w-full">
                <button className="bg-600 mt-1 py-2 px-4 rounded-lg text-[0.7rem] text-white   font-bold  flex justify-center items-center gap-2">
                  <img src={cart} alt="" />
                  Add Cart
                </button>
              </div>
            </li>
            <li
              className="flex-shrink-0 w-[150px] h-[270px] bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.2)] overflow-hidden  relative"
              onClick={() => navigate("/product")}
            >
              <button className="absolute top-2 right-2 w-[24px] h-[24px] bg-700 rounded-full flex justify-center items-center gap-2">
                <img src={heart} loading="lazy" className="w-[14px]" alt="" />
              </button>
              <div className="w-full h-[50%] bg-white overflow-hidden">
                <img src={lap3} alt="" />
              </div>
              <div className="flex justify-between items-center py-2 px-4 text-[0.7rem] text-[#515151]">
                <p>Brand</p>
                <p>Ratings</p>
              </div>
              <div className="w-full -mt-3 text-[0.8rem] font-extrabold leading-none py-2 px-2">
                <p>Lorem ipsum dolor sit amet.</p>
                <p className="text-[grey] font-normal mt-3 flex justify-between">
                  Price{" "}
                  <strong className="font-bold text-black">₦ 500,000</strong>
                </p>
              </div>
              <div className="flex justify-center w-full">
                <button className="bg-600 mt-1 py-2 px-4 rounded-lg text-[0.7rem] text-white   font-bold  flex justify-center items-center gap-2">
                  <img src={cart} alt="" />
                  Add Cart
                </button>
              </div>
            </li>
          </ul>
        </section>
        <section className="mt-5">
          <div className="flex py-2 px-5 justify-between font-bold text-[0.9rem] ">
            <p>Gaming Laptops</p>
            <p className="font-normal text-gray-500">See All</p>
          </div>
          <ul className="flex items-center gap-3 py-3 overflow-x-auto">
            <div className="w-[5px] flex-shrink-0"></div>
            <li
              className="flex-shrink-0 w-[150px] h-[270px] bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.2)] overflow-hidden  relative"
              onClick={() => navigate("/product")}
            >
              <button className="absolute top-2 right-2 w-[24px] h-[24px] bg-700 rounded-full flex justify-center items-center gap-2">
                <img src={heart} loading="lazy" className="w-[14px]" alt="" />
              </button>
              <div className="w-full h-[50%] bg-white overflow-hidden">
                <img src={lap3} alt="" />
              </div>
              <div className="flex justify-between items-center py-2 px-4 text-[0.7rem] text-[#515151]">
                <p>Brand</p>
                <p>Ratings</p>
              </div>
              <div className="w-full -mt-3 text-[0.8rem] font-extrabold leading-none py-2 px-2">
                <p>Lorem ipsum dolor sit amet.</p>
                <p className="text-[grey] font-normal mt-3 flex justify-between">
                  Price{" "}
                  <strong className="font-bold text-black">₦ 500,000</strong>
                </p>
              </div>
              <div className="flex justify-center w-full">
                <button className="bg-600 mt-1 py-2 px-4 rounded-lg text-[0.7rem] text-white   font-bold  flex justify-center items-center gap-2">
                  <img src={cart} alt="" />
                  Add Cart
                </button>
              </div>
            </li>{" "}
            <li
              className="flex-shrink-0 w-[150px] h-[270px] bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.2)] overflow-hidden  relative"
              onClick={() => navigate("/product")}
            >
              <button className="absolute top-2 right-2 w-[24px] h-[24px] bg-700 rounded-full flex justify-center items-center gap-2">
                <img src={heart} loading="lazy" className="w-[14px]" alt="" />
              </button>
              <div className="w-full h-[50%] bg-white overflow-hidden">
                <img src={lap3} alt="" />
              </div>
              <div className="flex justify-between items-center py-2 px-4 text-[0.7rem] text-[#515151]">
                <p>Brand</p>
                <p>Ratings</p>
              </div>
              <div className="w-full -mt-3 text-[0.8rem] font-extrabold leading-none py-2 px-2">
                <p>Lorem ipsum dolor sit amet.</p>
                <p className="text-[grey] font-normal mt-3 flex justify-between">
                  Price{" "}
                  <strong className="font-bold text-black">₦ 500,000</strong>
                </p>
              </div>
              <div className="flex justify-center w-full">
                <button className="bg-600 mt-1 py-2 px-4 rounded-lg text-[0.7rem] text-white   font-bold  flex justify-center items-center gap-2">
                  <img src={cart} alt="" />
                  Add Cart
                </button>
              </div>
            </li>
            <li
              className="flex-shrink-0 w-[150px] h-[270px] bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.2)] overflow-hidden  relative"
              onClick={() => navigate("/product")}
            >
              <button className="absolute top-2 right-2 w-[24px] h-[24px] bg-700 rounded-full flex justify-center items-center gap-2">
                <img src={heart} loading="lazy" className="w-[14px]" alt="" />
              </button>
              <div className="w-full h-[50%] bg-white overflow-hidden">
                <img src={lap3} alt="" />
              </div>
              <div className="flex justify-between items-center py-2 px-4 text-[0.7rem] text-[#515151]">
                <p>Brand</p>
                <p>Ratings</p>
              </div>
              <div className="w-full -mt-3 text-[0.8rem] font-extrabold leading-none py-2 px-2">
                <p>Lorem ipsum dolor sit amet.</p>
                <p className="text-[grey] font-normal mt-3 flex justify-between">
                  Price{" "}
                  <strong className="font-bold text-black">₦ 500,000</strong>
                </p>
              </div>
              <div className="flex justify-center w-full">
                <button className="bg-600 mt-1 py-2 px-4 rounded-lg text-[0.7rem] text-white   font-bold  flex justify-center items-center gap-2">
                  <img src={cart} alt="" />
                  Add Cart
                </button>
              </div>
            </li>
            <li
              className="flex-shrink-0 w-[150px] h-[270px] bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.2)] overflow-hidden  relative"
              onClick={() => navigate("/product")}
            >
              <button className="absolute top-2 right-2 w-[24px] h-[24px] bg-700 rounded-full flex justify-center items-center gap-2">
                <img src={heart} loading="lazy" className="w-[14px]" alt="" />
              </button>
              <div className="w-full h-[50%] bg-white overflow-hidden">
                <img src={lap3} alt="" />
              </div>
              <div className="flex justify-between items-center py-2 px-4 text-[0.7rem] text-[#515151]">
                <p>Brand</p>
                <p>Ratings</p>
              </div>
              <div className="w-full -mt-3 text-[0.8rem] font-extrabold leading-none py-2 px-2">
                <p>Lorem ipsum dolor sit amet.</p>
                <p className="text-[grey] font-normal mt-3 flex justify-between">
                  Price{" "}
                  <strong className="font-bold text-black">₦ 500,000</strong>
                </p>
              </div>
              <div className="flex justify-center w-full">
                <button className="bg-600 mt-1 py-2 px-4 rounded-lg text-[0.7rem] text-white   font-bold  flex justify-center items-center gap-2">
                  <img src={cart} alt="" />
                  Add Cart
                </button>
              </div>
            </li>
            <li
              className="flex-shrink-0 w-[150px] h-[270px] bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.2)] overflow-hidden  relative"
              onClick={() => navigate("/product")}
            >
              <button className="absolute top-2 right-2 w-[24px] h-[24px] bg-700 rounded-full flex justify-center items-center gap-2">
                <img src={heart} loading="lazy" className="w-[14px]" alt="" />
              </button>
              <div className="w-full h-[50%] bg-white overflow-hidden">
                <img src={lap3} alt="" />
              </div>
              <div className="flex justify-between items-center py-2 px-4 text-[0.7rem] text-[#515151]">
                <p>Brand</p>
                <p>Ratings</p>
              </div>
              <div className="w-full -mt-3 text-[0.8rem] font-extrabold leading-none py-2 px-2">
                <p>Lorem ipsum dolor sit amet.</p>
                <p className="text-[grey] font-normal mt-3 flex justify-between">
                  Price{" "}
                  <strong className="font-bold text-black">₦ 500,000</strong>
                </p>
              </div>
              <div className="flex justify-center w-full">
                <button className="bg-600 mt-1 py-2 px-4 rounded-lg text-[0.7rem] text-white   font-bold  flex justify-center items-center gap-2">
                  <img src={cart} alt="" />
                  Add Cart
                </button>
              </div>
            </li>
          </ul>
        </section>
        <section className="mt-5">
          <div className="flex py-2 px-5 justify-between font-bold text-[0.9rem] ">
            <p>Office Laptops</p>
            <p className="font-normal text-gray-500">See All</p>
          </div>
          <ul className="flex items-center gap-3 py-3 overflow-x-auto">
            <div className="w-[5px] flex-shrink-0"></div>
            <li
              className="flex-shrink-0 w-[150px] h-[270px] bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.2)] overflow-hidden  relative"
              onClick={() => navigate("/product")}
            >
              <button className="absolute top-2 right-2 w-[24px] h-[24px] bg-700 rounded-full flex justify-center items-center gap-2">
                <img src={heart} loading="lazy" className="w-[14px]" alt="" />
              </button>
              <div className="w-full h-[50%] bg-white overflow-hidden">
                <img src={lap3} alt="" />
              </div>
              <div className="flex justify-between items-center py-2 px-4 text-[0.7rem] text-[#515151]">
                <p>Brand</p>
                <p>Ratings</p>
              </div>
              <div className="w-full -mt-3 text-[0.8rem] font-extrabold leading-none py-2 px-2">
                <p>Lorem ipsum dolor sit amet.</p>
                <p className="text-[grey] font-normal mt-3 flex justify-between">
                  Price{" "}
                  <strong className="font-bold text-black">₦ 500,000</strong>
                </p>
              </div>
              <div className="flex justify-center w-full">
                <button className="bg-600 mt-1 py-2 px-4 rounded-lg text-[0.7rem] text-white   font-bold  flex justify-center items-center gap-2">
                  <img src={cart} alt="" />
                  Add Cart
                </button>
              </div>
            </li>{" "}
            <li
              className="flex-shrink-0 w-[150px] h-[270px] bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.2)] overflow-hidden  relative"
              onClick={() => navigate("/product")}
            >
              <button className="absolute top-2 right-2 w-[24px] h-[24px] bg-700 rounded-full flex justify-center items-center gap-2">
                <img src={heart} loading="lazy" className="w-[14px]" alt="" />
              </button>
              <div className="w-full h-[50%] bg-white overflow-hidden">
                <img src={lap3} alt="" />
              </div>
              <div className="flex justify-between items-center py-2 px-4 text-[0.7rem] text-[#515151]">
                <p>Brand</p>
                <p>Ratings</p>
              </div>
              <div className="w-full -mt-3 text-[0.8rem] font-extrabold leading-none py-2 px-2">
                <p>Lorem ipsum dolor sit amet.</p>
                <p className="text-[grey] font-normal mt-3 flex justify-between">
                  Price{" "}
                  <strong className="font-bold text-black">₦ 500,000</strong>
                </p>
              </div>
              <div className="flex justify-center w-full">
                <button className="bg-600 mt-1 py-2 px-4 rounded-lg text-[0.7rem] text-white   font-bold  flex justify-center items-center gap-2">
                  <img src={cart} alt="" />
                  Add Cart
                </button>
              </div>
            </li>
            <li
              className="flex-shrink-0 w-[150px] h-[270px] bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.2)] overflow-hidden  relative"
              onClick={() => navigate("/product")}
            >
              <button className="absolute top-2 right-2 w-[24px] h-[24px] bg-700 rounded-full flex justify-center items-center gap-2">
                <img src={heart} loading="lazy" className="w-[14px]" alt="" />
              </button>
              <div className="w-full h-[50%] bg-white overflow-hidden">
                <img src={lap3} alt="" />
              </div>
              <div className="flex justify-between items-center py-2 px-4 text-[0.7rem] text-[#515151]">
                <p>Brand</p>
                <p>Ratings</p>
              </div>
              <div className="w-full -mt-3 text-[0.8rem] font-extrabold leading-none py-2 px-2">
                <p>Lorem ipsum dolor sit amet.</p>
                <p className="text-[grey] font-normal mt-3 flex justify-between">
                  Price{" "}
                  <strong className="font-bold text-black">₦ 500,000</strong>
                </p>
              </div>
              <div className="flex justify-center w-full">
                <button className="bg-600 mt-1 py-2 px-4 rounded-lg text-[0.7rem] text-white   font-bold  flex justify-center items-center gap-2">
                  <img src={cart} alt="" />
                  Add Cart
                </button>
              </div>
            </li>
            <li
              className="flex-shrink-0 w-[150px] h-[270px] bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.2)] overflow-hidden  relative"
              onClick={() => navigate("/product")}
            >
              <button className="absolute top-2 right-2 w-[24px] h-[24px] bg-700 rounded-full flex justify-center items-center gap-2">
                <img src={heart} loading="lazy" className="w-[14px]" alt="" />
              </button>
              <div className="w-full h-[50%] bg-white overflow-hidden">
                <img src={lap3} alt="" />
              </div>
              <div className="flex justify-between items-center py-2 px-4 text-[0.7rem] text-[#515151]">
                <p>Brand</p>
                <p>Ratings</p>
              </div>
              <div className="w-full -mt-3 text-[0.8rem] font-extrabold leading-none py-2 px-2">
                <p>Lorem ipsum dolor sit amet.</p>
                <p className="text-[grey] font-normal mt-3 flex justify-between">
                  Price{" "}
                  <strong className="font-bold text-black">₦ 500,000</strong>
                </p>
              </div>
              <div className="flex justify-center w-full">
                <button className="bg-600 mt-1 py-2 px-4 rounded-lg text-[0.7rem] text-white   font-bold  flex justify-center items-center gap-2">
                  <img src={cart} alt="" />
                  Add Cart
                </button>
              </div>
            </li>
            <li
              className="flex-shrink-0 w-[150px] h-[270px] bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.2)] overflow-hidden  relative"
              onClick={() => navigate("/product")}
            >
              <button className="absolute top-2 right-2 w-[24px] h-[24px] bg-700 rounded-full flex justify-center items-center gap-2">
                <img src={heart} loading="lazy" className="w-[14px]" alt="" />
              </button>
              <div className="w-full h-[50%] bg-white overflow-hidden">
                <img src={lap3} alt="" />
              </div>
              <div className="flex justify-between items-center py-2 px-4 text-[0.7rem] text-[#515151]">
                <p>Brand</p>
                <p>Ratings</p>
              </div>
              <div className="w-full -mt-3 text-[0.8rem] font-extrabold leading-none py-2 px-2">
                <p>Lorem ipsum dolor sit amet.</p>
                <p className="text-[grey] font-normal mt-3 flex justify-between">
                  Price{" "}
                  <strong className="font-bold text-black">₦ 500,000</strong>
                </p>
              </div>
              <div className="flex justify-center w-full">
                <button className="bg-600 mt-1 py-2 px-4 rounded-lg text-[0.7rem] text-white   font-bold  flex justify-center items-center gap-2">
                  <img src={cart} alt="" />
                  Add Cart
                </button>
              </div>
            </li>
          </ul>
        </section>
      </main>
      <div className="w-full h-[80px]"></div>
      <Footer />
    </>
  );
}
<div></div>;
