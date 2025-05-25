import { useState, type JSX } from "react";
import notification from "../assets/bell.svg";
import search from "../assets/search.svg";
import logo from "../assets/logo.png";
import Search from "./Search";

export default function Header(): JSX.Element {
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <header className="sticky top-0 w-full z-[10] bg-white p-5">
      <nav className="flex justify-between px-5">
        <button>
          <img src={notification} alt="notification" />
        </button>
        <div className="absolute top-0 left-[50%] translate-x-[-50%]">
          <img src={logo} className="w-[80px]" alt="logo" />
        </div>
        <div className="flex gap-5">
          <button onClick={() => setOpenSearch(true)}>
            <img src={search} alt="" />
          </button>
        </div>
      </nav>
      <div
        className={`transition-all duration-300 ease-in-out ${openSearch ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <Search openSearch={openSearch} setOpenSearch={setOpenSearch} />
      </div>
    </header>
  );
}
