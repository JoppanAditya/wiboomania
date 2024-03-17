"use client";

import { useEffect, useState } from "react";
import Notification from "../Utilities/Notification";

const CommentInput = ({ anime_mal_id, user_email, username, user_image, anime_title }) => {
  const [isCreated, setIsCreated] = useState(false);
  const [comment, setComment] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const time = setTimeout(() => {
      setShowNotification(false);
    }, 4500);

    return () => clearTimeout(time);
  }, [showNotification]);

  const handleInput = (e) => {
    setComment(e.target.value);
  };

  const handleSent = async (e) => {
    e.preventDefault();
    setComment("");

    if (!comment.length > 0 || comment.trim() == "") return;

    const data = { anime_mal_id, user_email, comment, username, user_image, anime_title };
    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const postComment = await response.json();

    if (postComment.isCreated) {
      setIsCreated(true);
      setShowNotification(true);
      setType("success");
      setMessage("Berhasil mengirim komentar!");
    } else {
      setShowNotification(true);
      setType("error");
      setMessage("Gagal mengirim komentar!");
    }
    return;
  };

  return (
    <div>
      <div className="flex flex-col gap-4">
        {isCreated && <Notification type={type} message={message} showNotification={showNotification} setShowNotification={setShowNotification} />}
        <textarea
          value={comment}
          onChange={handleInput}
          className="text-lg p-2 w-full bg-color-dark-200 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-color-light-300 focus:ring-offset-2 focus:ring-offset-color-accent"
          placeholder="Tulis komentar..."
        />
        <button onClick={handleSent} className="w-full md:w-52 rounded-md py-2 px-3 bg-color-primary  hover:bg-opacity-10 hover:text-color-primary border-2 border-color-primary transition-all">
          Kirim Komentar
        </button>
      </div>
    </div>
  );
};

export default CommentInput;
