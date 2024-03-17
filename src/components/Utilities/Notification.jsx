"use client";

import { CheckCircle, X, XCircle } from "@phosphor-icons/react";
import { motion } from "framer-motion";

const Notification = ({ type, message, showNotification, setShowNotification }) => {
  const notifVariants = {
    hidden: {
      opacity: 0,
      y: -150,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const closeNotification = () => {
    setShowNotification(false);
  };

  return (
    <>
      {showNotification && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={notifVariants}
          className={`bg-color-dark-200 border-b-4 px-4 py-3 rounded-md flex items-center justify-center gap-2 w-fit fixed left-0 right-0 top-12 mx-auto z-50 ${type === "success" ? "border-color-green" : "border-color-red"}`}
          role="alert"
        >
          {type === "success" ? <CheckCircle size={28} weight="fill" className="text-color-green" /> : <XCircle size={28} weight="fill" className="text-color-red" />}

          <strong className={`${type === "success" ? "text-color-green" : "text-color-red"} block sm:inline`}>{message}</strong>
          <button onClick={closeNotification} className="text-color-light-200 hover:text-color-red h-full ">
            <X size={16} weight="bold" />
          </button>
        </motion.div>
      )}
    </>
  );
};

export default Notification;
