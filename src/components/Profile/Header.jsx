"use client";

import { ArrowLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Header = ({ title }) => {
  const router = useRouter();
  const handleBack = (e) => {
    e.preventDefault();
    router.back();
  };

  return (
    <div className="flex gap-4 items-center text-color-light-100 mb-4">
      <button onClick={handleBack} className="hover:text-color-accent text-color-light-200 transition-all">
        <ArrowLeft size={24} weight="bold" />
      </button>
      <h1 className="text-2xl font-bold">{title}</h1>
    </div>
  );
};

export default Header;
