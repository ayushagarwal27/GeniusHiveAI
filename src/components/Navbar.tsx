import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800/50 backdrop-blur fixed z-20 left-0 right-0 top-0">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center justify-center text-white">
              <Link href={"/"} className={"font-bold cursor-pointer"}>
                <span
                  className={
                    "bg-green-100 p-2 rounded-full rounded-br-none mr-1 text-green-900"
                  }
                >
                  G
                </span>
                ENIUS HIVE AI
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        {/*<div className="space-y-1 px-2 pb-3 pt-2">*/}
        {/*  <a*/}
        {/*    href="#"*/}
        {/*    className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"*/}
        {/*    aria-current="page"*/}
        {/*  >*/}
        {/*    Dashboard*/}
        {/*  </a>*/}
        {/*  <a*/}
        {/*    href="#"*/}
        {/*    className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"*/}
        {/*  >*/}
        {/*    Team*/}
        {/*  </a>*/}
        {/*  <a*/}
        {/*    href="#"*/}
        {/*    className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"*/}
        {/*  >*/}
        {/*    Projects*/}
        {/*  </a>*/}
        {/*  <a*/}
        {/*    href="#"*/}
        {/*    className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"*/}
        {/*  >*/}
        {/*    Calendar*/}
        {/*  </a>*/}
        {/*</div>*/}
      </div>
    </nav>
  );
};

export default Navbar;
