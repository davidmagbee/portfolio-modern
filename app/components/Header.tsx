"use client";

import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      {/* Social Icons | TODO: update social links && + farm/radio icons   */}
      <motion.div
        className="flex flex-row items-center"
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <SocialIcon
          url="https://github.com/davidmagbee"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/davidmagbee/"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://betterradio.airtime.pro/"
          bgColor="transparent"
        />
      </motion.div>
      <Link href="#contact">
        <motion.div
          className="flex flex-row items-center text-gray-300 cursor-pointer"
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <SocialIcon
            className="cursor-pointer"
            network="email"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Let&apos;s Connect
          </p>
        </motion.div>
      </Link>
    </header>
  );
};

export default Header;
