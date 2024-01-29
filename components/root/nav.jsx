"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import DropDownMenu from "../auth/drop-down";

const navLinks = [
  { id: 1, text: "HOME" },
  { id: 2, text: "INTRO" },
  { id: 2, text: "ABOUT US" },
  { id: 3, text: "CONTACT" },
];

const Nav = () => {
  const router = useRouter();
  const isLoggedIn = true;
  return (
    <nav className="fixed top-0 left-0 right-0 bg-blue-100 max-md:pl-3 md:px-6 py-3 flex flex-row z-10">
      <div className="flex items-center" onClick={() => router.push("/")}>
        <Image
          src="/assets/cv.png"
          alt="Logo"
          width={40}
          height={44}
          className="w-10 h-10"
        />
        <span className="text-2xl ml-2 font-montserrat font-bold">
          Resume Builder
        </span>
      </div>
      <div className="">
        <ul className="hidden md:flex items-center space-x-20 mt-3 ml-40">
          {navLinks.map((link) => (
            <li key={link.id} className="hover:text-blue-500 cursor-pointer">
              {link.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="ml-auto flex mr-1">
        {isLoggedIn ? (
          <DropDownMenu />
        ) : (
          <Button variant="custom" onClick={() => router.push("/sign-in")}>
            LOG IN
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Nav;
