"use client";

import { useState } from "react";
import AnimeStatic from "./AnimeStatic";

const AnimeDetails = ({ anime, children }) => {
  const [showAll, setShowAll] = useState(false);

  const convertDayToIndonesian = (day) => {
    const daysInIndonesian = {
      Sundays: "Minggu",
      Mondays: "Senin",
      Tuesdays: "Selasa",
      Wednesdays: "Rabu",
      Thursdays: "Kamis",
      Fridays: "Jumat",
      Saturdays: "Sabtu",
    };

    return daysInIndonesian[day];
  };

  const renderListItems = (title, items) => {
    if (items.length === 0) {
      return (
        <h2 className="text-color-light-200 mb-2">
          {title}: <span className="text-color-light-100">-</span>
        </h2>
      );
    } else {
      return (
        <h2 className="text-color-light-200 mb-2">
          {title}:{" "}
          {items.map((item, index) => (
            <span key={index}>
              <span className="inline-block text-color-light-100 break-words">{item.name}</span>
              {index !== items.length - 1 && ", "}
            </span>
          ))}
        </h2>
      );
    }
  };

  return (
    <div className="md:w-4/6 lg:w-full">
      <div className="py-4 text-lg hidden md:flex md:justify-between lg:hidden">
        <AnimeStatic anime={anime} />
      </div>

      <div className="py-4 border-t border-color-dark-200 lg:border-0 text-lg mt-2 lg:mt-0">
        <div className={showAll ? "" : "line-clamp-5"}>
          <h2>Sinopsis:</h2>
          {anime.data.synopsis.split("\n").map((line, index) => (
            <p key={index} className="text-justify mb-2 text-color-light-200">
              {line}
            </p>
          ))}

          <h2 className="mt-4">Latar Belakang:</h2>
          <p className="text-justify text-color-light-200">{anime.data.background}</p>
        </div>
        <div className="w-full flex justify-end">
          <button onClick={() => setShowAll(!showAll)} className="text-color-primary hover:text-color-accent transition-all">
            {showAll ? "Tutup" : "Selengkapnya"}
          </button>
        </div>
      </div>

      <div id="info" className="py-4 border-t border-color-dark-200 text-lg">
        <h2 className="text-color-light-200 mb-2">
          Judul Alternatif:
          {anime.data.titles.map((title, i) => {
            return (
              title.type !== "Default" && (
                <p key={i} className="text-color-light-200">
                  {title.type}: <span className="text-color-light-100">{title.title}</span>
                </p>
              )
            );
          })}
        </h2>
        {renderListItems("Rating", [{ name: anime.data.rating }])}
        {renderListItems("Tipe", [{ name: anime.data.type }])}
        {renderListItems("Episode", [{ name: anime.data.episodes }])}
        {renderListItems("Durasi", [{ name: anime.data.duration }])}
        {renderListItems("Status", [{ name: anime.data.status }])}
        {!anime.data.airing && renderListItems("Ditayangkan", [{ name: anime.data.aired.string }])}
        <h2 className="mb-2 text-color-light-200">
          Tayang perdana:{" "}
          <span className="text-color-light-100">
            {anime.data.season} {anime.data.year}
          </span>
        </h2>
        <h2 className="mb-2 text-color-light-200">
          Waktu Tayang:{" "}
          <span className="text-color-light-100">
            {convertDayToIndonesian(anime.data.broadcast.day)}, {anime.data.broadcast.time} (JST)
          </span>
        </h2>
        {renderListItems("Produser", anime.data.producers)}
        {renderListItems("Lisensor", anime.data.licensors)}
        {renderListItems("Studio", anime.data.studios)}
        {renderListItems("Genre", anime.data.genres)}
        {renderListItems("Tema", anime.data.themes)}
        {renderListItems("Demografi", anime.data.demographics)}
      </div>

      {children}
    </div>
  );
};

export default AnimeDetails;
