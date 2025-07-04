"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md w-full top-0 left-0 z-50">
      <div className="max-w- mx-auto flex justify-between items-center ">
        <Image src={logo} alt="Logo" width={150} />
      </div>
    </header>
  );
};

export default Header;
