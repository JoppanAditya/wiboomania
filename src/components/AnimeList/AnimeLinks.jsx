"use client";

import { Star } from "@phosphor-icons/react";
import Image from "next/image";
import CollectionButton from "@/components/AnimeList/CollectionButton";
import Link from "next/link";
import { useCallback } from "react";

const AnimeLinks = ({ anime, user, id, collection }) => {
  const scrollToSection = useCallback(() => {
    const element = document.getElementById("info");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const originalSiteUrl = anime.data.external.find((ori) => ori.name === "Official Site")?.url;

  const renderStreamingLinks = () => {
    if (anime.data.streaming.length > 0) {
      return anime.data.streaming.map((stream, i) => (
        <Link href={stream.url} key={i} className="block text-color-light-200 hover:text-color-primary transition-all w-fit">
          {stream.name}
        </Link>
      ));
    } else {
      return <span className="text-color-light-200">-</span>;
    }
  };

  const renderExternalLinks = () => {
    if (anime.data.external.length > 0) {
      return anime.data.external.map((external, i) => (
        <div key={i}>
          {external.name !== "Official Site" && (
            <Link href={external.url} className="block text-color-light-200 hover:text-color-accent transition-all w-fit">
              {external.name}
            </Link>
          )}
        </div>
      ));
    } else {
      return <span className="text-color-light-200">-</span>;
    }
  };

  return (
    <div className="py-4 lg:pt-2 pr-4 lg:pr-0">
      <div className="flex gap-4">
        <Image src={anime.data.images.webp.image_url} alt={`Poster ${anime.data.title}`} width={400} height={600} className="rounded-lg object-cover aspect-[4/6] md:w-[400px] w-[150px] h-auto lg:hidden" />
        <div className="md:hidden">
          <p className="text-2xl flex items-center justify-start gap-2">
            <Star weight="fill" className="text-color-primary" />
            {anime.data.score}
            <span className="text-color-light-200 text-base">({anime.data.scored_by.toLocaleString("id-ID")})</span>
          </p>
          <p className="text-color-accent text-lg">Peringkat #{anime.data.rank}</p>

          <p className="text-xl md:text-2xl pt-4">
            {anime.data.type}
            <span className="text-color-light-200"> ({anime.data.episodes} episode)</span>
          </p>

          <p className="text-xl md:text-2xl py-4">{anime.data.studios[0].name}</p>

          <button onClick={scrollToSection} className="text-color-primary active:text-color-accent text-lg">
            Lihat Semua
          </button>
        </div>
      </div>

      <div className="py-4 flex max-w-screen-sm md:flex-col gap-2 md:gap-4 min-w-full md:w-full">
        {originalSiteUrl && (
          <Link href={originalSiteUrl} target="_blank" className="py-3 w-full md:w-auto flex items-center justify-center bg-color-primary hover:bg-opacity-10 hover:text-color-primary border-2 border-color-primary transition-all rounded-md">
            Website Original
          </Link>
        )}
        {user && <CollectionButton anime_mal_id={id} user_email={user?.email} anime_image={anime.data.images.webp.image_url} anime_title={anime.data.title} collection={collection} />}
      </div>

      <div className="pt-4 mt-2 border-t border-color-dark-200 text-lg flex justify-between md:block">
        <div className="md:pb-2">
          <h2>Tonton di:</h2>
          {renderStreamingLinks()}
        </div>

        <div className="md:mt-2 md:pt-4 md:border-t md:border-color-dark-200">
          <h2>Sumber:</h2>
          {renderExternalLinks()}
        </div>
      </div>
    </div>
  );
};

export default AnimeLinks;
