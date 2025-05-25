import type { JSX, SetStateAction } from "react";
import search from "../assets/search.svg";
import back from "../assets/chevron-left.svg";

interface SearchProps {
  openSearch: boolean;
  setOpenSearch: React.Dispatch<SetStateAction<boolean>>;
}
export default function Search({
  openSearch,
  setOpenSearch,
}: SearchProps): JSX.Element {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[11] bg-[#00000052] backdrop-blur-2xl text-sm">
      <div className="flex items-center justify-center w-full gap-2 px-4 py-5">
        <button onClick={() => setOpenSearch(!openSearch)}>
          <img src={back} className="w-[34px]" alt="back" />
        </button>
        <input
          type="search"
          className="w-[80%] py-2 px-4 rounded-tl-full rounded-bl-full outline-none"
          placeholder="search by brand, name or categories"
        />
        <button className="px-4 py-2 -ml-6 rounded-tr-full rounded-br-full bg-600">
          <img src={search} className="w-[1.3rem]" alt="" />
        </button>
      </div>
    </div>
  );
}
