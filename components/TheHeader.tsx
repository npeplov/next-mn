import Link from "next/link";
import React from "react";

const TheHeader = () => {
  return (
    <header className="bg-gray-700 text-gray-100 flex gap-7 justify-center py-5">
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/about">About</Link>
    </header>
  );
};

export { TheHeader };
