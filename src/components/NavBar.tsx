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
        <Link href={"/"} className="text-lg">
          Yao
        </Link>
        <Link href={"/"} className="text-lg">
          Ren
        </Link>
        <Link href={"/"} className="text-lg">
          Fortune
        </Link>
        <ToggleTheme />
      </nav>
    </header>
  );
}
