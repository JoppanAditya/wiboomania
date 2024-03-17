"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (e) => {
    const keyword = searchRef.current.value;
    if (keyword.length > 0 && keyword.trim() != "") {
      if (e.key === "Enter" || e.type === "click") {
        e.preventDefault();
        router.push(`/search/${keyword}`);
        searchRef.current.value = "";
      }
    }
  };

  return (
    <div className="relative md:w-fit w-full">
      <input
        type="text"
        placeholder="Cari judul anime..."
        className="py-2 px-4 rounded-full w-full bg-color-light md:w-96 focus:outline-none focus:ring-2 focus:ring-color-light-100 focus:ring-offset-2 focus:ring-offset-color-accent"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button className="absolute top-2 end-4 text-color-light-300 hover:text-color-accent" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
