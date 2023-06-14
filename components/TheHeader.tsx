import Link from "next/link";
import React from "react";
import { Navigation } from "./Navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

const TheHeader = () => {
  return (
    <header className="bg-gray-700 text-gray-100 flex gap-7 justify-center py-5">
      <Navigation navLinks={navItems} />
    </header>
  );
};

export { TheHeader };
