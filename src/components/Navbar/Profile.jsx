"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Profile = ({ user }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleLinkClick = () => {
    setIsDropdownOpen(false);
  };

  const profileVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      y: -50,
      x: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative">
      <button className="text-center rounded-full text-sm active:ring-2 active:ring-color-light-100 active:ring-offset-2 active:ring-offset-color-accent" onClick={handleDropdownToggle} aria-expanded={isDropdownOpen}>
        <Image className="h-8 w-8 rounded-full" src={user.image} alt={`Foto Profil ${user.name}`} width={50} height={50} />
      </button>
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            key="dropdown"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={profileVariants}
            className="z-10 w-32 absolute rounded-md text-color-light-100 bg-color-dark-200 border border-color-dark-300 top-full right-0 mt-1"
          >
            <ul>
              <li>
                <Link onClick={handleLinkClick} href={`/user/${user.name}`}>
                  <p className="w-full py-2 text-center hover:bg-color-dark-300 transition-all">Profil</p>
                </Link>
              </li>
              <li>
                <Link onClick={handleLinkClick} href="/api/auth/signout">
                  <p className="w-full py-2 text-center hover:bg-color-dark-300 transition-all">Keluar</p>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Profile;
