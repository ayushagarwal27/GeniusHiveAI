import React from "react";
import Link from "next/link";
// import { FaGithub } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 fixed z-20 left-0 bottom-0 right-0">
      <div
        className={
          "flex text-white flex-row justify-center gap-2 cursor-pointer py-5 "
        }
      >
        Made with <FaHeart color={"green"} size={23} className={"mt-[2px]"} />{" "}
        by{" "}
        <Link
          href={"https://github.com/ayushagarwal27"}
          className={"hover:text-blue-400"}
          target={"_blank"}
        >
          Ayush Agarwal
        </Link>
      </div>
      {/*<div className="flex justify-around flex-row items-center md:justify-center md:gap-8 text-white py-5 ml-5">*/}
      {/*  <Link*/}
      {/*    href={"https://github.com/ayushagarwal27/expertAI-frontend"}*/}
      {/*    target={"_blank"}*/}
      {/*    className={*/}
      {/*      "flex  flex-row items-center gap-2 cursor-pointer hover:text-gray-300"*/}
      {/*    }*/}
      {/*  >*/}
      {/*    <FaGithub size={32} /> Frontend*/}
      {/*  </Link>*/}
      {/*  <Link*/}
      {/*    href={"https://github.com/ayushagarwal27/expertAI"}*/}
      {/*    target={"_blank"}*/}
      {/*    className={*/}
      {/*      "flex flex-row items-center gap-2 cursor-pointer hover:text-gray-300"*/}
      {/*    }*/}
      {/*  >*/}
      {/*    <FaGithub size={32} /> Backend*/}
      {/*  </Link>*/}
      {/*</div>*/}
    </footer>
  );
};

export default Footer;
