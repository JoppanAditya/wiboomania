"use client";

import { getAnimeResponse } from "@/libs/api-libs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const CollectionList = ({ collect }) => {
  const [anime, setAnime] = useState([]);
  const fetchAnimeData = async () => {
    const data = await getAnimeResponse(`anime/${collect.anime_mal_id}`, "sfw=true");
    setAnime(data);
  };

  useEffect(() => {
    fetchAnimeData();
  }, []);

  return (
    <>
      <Link key={collect.id} href={`/anime/${collect.anime_mal_id}`} className="collection-card relative rounded-md text-color-light-100 border-2 border-color-primary lg:border-0 transition-all overflow-hidden h-full">
        <Image className="rounded-t-md w-full aspect-[4/6] transition-all" src={collect.anime_image} alt={`Poster ${collect.anime_title}`} width={300} height={300} />
        <div className="absolute bottom-0 w-full h-full hidden lg:flex justify-center items-center opacity-0 transition-all duration-300">
          <h3 className="text-xl text-center font-bold">{collect.anime_title}</h3>
        </div>
        <div className="w-full h-full lg:hidden justify-center bg-color-primary transition-all duration-300">
          <h3 className="text-sm text-center font-bold py-2">{collect.anime_title}</h3>
        </div>
      </Link>
    </>
  );
};

export default CollectionList;
