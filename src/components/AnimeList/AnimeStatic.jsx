"use client";

import { Star } from "@phosphor-icons/react";

const AnimeStatic = ({ anime }) => {
  return (
    <>
      <div className="max-w-fit flex-shrink-0">
        <p className="text-center px-4 lg:px-0 rounded-md bg-color-primary">Skor</p>

        <div className="inline-flex gap-1 items-center justify-center">
          <div className="text-color-accent">
            <Star size={46} weight="fill" />
          </div>
          <div>
            <p className="text-center mt-2 flex justify-center items-center text-2xl font-bold">
              {anime.data.score}
              <span className="text-color-light-200 text-lg font-normal">/10</span>
            </p>
            <p className="text-color-light-200 text-center text-sm">{anime.data.scored_by.toLocaleString("id-ID")}</p>
          </div>
        </div>
      </div>

      <div className="max-w-fit">
        <p className="text-center">Popularitas</p>
        <p className="text-center mt-2 text-2xl font-bold">#{anime.data.popularity}</p>
      </div>

      <div className="max-w-fit">
        <p className="text-center">Peringkat</p>
        <p className="text-center mt-2 text-2xl font-bold">#{anime.data.rank}</p>
      </div>

      <div className="max-w-fit">
        <p className="text-center">Member</p>
        <p className="text-center mt-2 text-2xl font-bold">{anime.data.members}</p>
      </div>
    </>
  );
};

export default AnimeStatic;
