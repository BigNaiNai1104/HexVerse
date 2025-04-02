import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="flex min-h-screen flex-col items-center justify-center gap-8 bg-[radial-gradient(hsl(0,72%,65%,40%),hsl(24,62%,73%,40%),hsl(var(--background))_60%)] px-4 text-center text-balance">
        <h1 className="m-4 text-6xl font-bold tracking-tight lg:text-7xl xl:text-8xl">
          HexVerse
        </h1>
        <p className="max-w-screen-xl text-lg lg:text-3xl">
          Forecast your future with ancient divination methods.
        </p>
        <div className="flex items-center gap-4">
          <Link href={"/fortune"}>
            <Button>命理</Button>
          </Link>
          <Link href={"/ren"}>
            <Button>小六壬</Button>
          </Link>
          <Link href={"/yao"}>
            <Button>六爻</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
