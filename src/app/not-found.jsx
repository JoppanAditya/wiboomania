"use client";

import { FileX } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import React from "react";

const NoPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col gap-8 justify-center items-center text-center">
      <FileX size={100} weight="fill" className="text-color-accent" />
      <h1 className="text-color-primary md:text-4xl text-3xl font-bold">Halaman Tidak Ditemukan</h1>
      <button onClick={() => router.back()} className="text-color-light-100 bg-color-primary py-3 px-16 text-xl rounded-full hover:bg-color-accent transition-all">
        Kembali
      </button>
    </div>
  );
};

export default NoPage;
