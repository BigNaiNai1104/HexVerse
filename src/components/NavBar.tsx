import Link from "next/link";
import React from "react";
import ToggleTheme from "./ToggleTheme";

export default function NavBar() {
  return (
    <header className="bg-background/95 border-border flex w-full border-b py-6 shadow-xl">
      <nav className="container mx-auto flex items-center gap-10 px-8 font-semibold">
        <Link href="/" className="mr-auto">
          HexVerse
        </Link>
        <Link href={"/yao"} className="text-lg">
          六爻
        </Link>
        <Link href={"/ren"} className="text-lg">
          小六壬
        </Link>
        <Link href={"/fortune"} className="text-lg">
          命理
        </Link>
        <ToggleTheme />
      </nav>
    </header>
  );
}
