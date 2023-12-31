"use client";
import Image from "next/image";
import React, { useState } from "react";
import Navmenu from "./nav-menu";
import Link from "next/link";
import NavHamMenu from "./nav-ham-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <div className="p-3 bg-zinc-200 sticky top-0 z-50">
      <div className="max-w-6xl m-auto flex items-center justify-between">
        <div className="relative w-24 h-14">
          <Link href="/" className="cursor-pointer">
            <Image
              src={"/assets/logo.png"}
              fill
              className="object-contain w-full h-full"
              alt="HS Associates"
            />
          </Link>
        </div>
        <div className="mx-auto hidden md:block">
          <Navmenu />
        </div>
        <div className="md:hidden">
          <NavHamMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
