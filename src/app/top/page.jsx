"use client";

import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "@/libs/api-libs";
import Anime from "@/components/AnimeList/Anime";

const TopPage = () => {
  const [page, setPage] = useState(1);
  const [animeList, setAnimeList] = useState([]);

  const fetchAnimeData = async () => {
    const anime = await getAnimeResponse("top/anime", `filter=airing&sfw=true&page=${page}`);
    setAnimeList(anime);
  };

  useEffect(() => {
    fetchAnimeData();
  }, [page]);

  return (
    <div className="px-4">
      <HeaderMenu title={`Anime Tayang Teratas #${page}`} />
      <div className="grid xl:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
        <Anime api={animeList} />
      </div>

      <Pagination page={page} lastPage={animeList.pagination?.last_visible_page} setPage={setPage} />
    </div>
  );
};

export default TopPage;
