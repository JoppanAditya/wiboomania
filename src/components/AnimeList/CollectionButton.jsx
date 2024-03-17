"use client";

import { Bookmark } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import Notification from "../Utilities/Notification";

const CollectionButton = ({ anime_mal_id, user_email, anime_image, anime_title, collection }) => {
  const [showNotification, setShowNotification] = useState(false);
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [iconFill, setIconFill] = useState("");
  const id = collection?.id;

  useEffect(() => {
    setButtonText(collection ? "Hapus dari Koleksi" : "Simpan ke Koleksi");
    setIconFill(collection ? "fill" : "regular");
  }, [collection]);

  useEffect(() => {
    const time = setTimeout(() => {
      setShowNotification(false);
    }, 4500);

    return () => clearTimeout(time);
  }, [showNotification]);

  const handleCollection = async (e) => {
    e.preventDefault();

    const data = { anime_mal_id, user_email, anime_image, anime_title, id: id?.toString() };

    if (collection != null) {
      const response = await fetch("/api/v1/collection", {
        method: "DELETE",
        body: JSON.stringify(data),
      });
      const deletion = await response.json();

      if (deletion.status === 200) {
        setButtonText("Simpan ke Koleksi");
        setIconFill("regular");
        setShowNotification(true);
        setType("success");
        setMessage("Berhasil menghapus anime dari koleksi!");
      } else {
        setShowNotification(true);
        setType("error");
        setMessage("Gagal menambahkan anime ke koleksi!");
      }
    } else {
      const response = await fetch("/api/v1/collection", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const creation = await response.json();

      if (creation.status === 200) {
        setButtonText("Hapus dari Koleksi");
        setIconFill("fill");
        setShowNotification(true);
        setType("success");
        setMessage("Berhasil menambahkan anime ke koleksi!");
      } else {
        setShowNotification(true);
        setType("error");
        setMessage("Gagal menambahkan anime ke koleksi!");
      }
    }
  };

  return (
    <>
      <Notification type={type} message={message} showNotification={showNotification} setShowNotification={setShowNotification} />
      <button onClick={handleCollection} className="px-2 py-3 w-full rounded-md border-2 border-color-accent flex items-center justify-center transition-all text-color-accent hover:text-color-light-100 hover:bg-color-accent">
        <Bookmark size={20} weight={iconFill} />
        {buttonText}
      </button>
    </>
  );
};

export default CollectionButton;
