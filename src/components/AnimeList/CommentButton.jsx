"use client";

import { useEffect, useState } from "react";
import Notification from "../Utilities/Notification";
import { CheckCircle, X, XCircle } from "@phosphor-icons/react";

const CommentButton = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const time = setTimeout(() => {
      setShowNotification(false);
    }, 4500);

    return () => clearTimeout(time);
  }, [showNotification]);

  const handleSent = (e) => {
    e.preventDefault();
    setShowNotification(true);
    setType("success");
    setMessage("Berhasil mengirim komentar!");
  };

  console.log(showNotification);

  return (
    <>
      <button onClick={handleSent} className="w-52 rounded-md py-2 px-3 bg-color-primary">
        Kirim Komentar
      </button>
    </>
  );
};

export default CommentButton;
