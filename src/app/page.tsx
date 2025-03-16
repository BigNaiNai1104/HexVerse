import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto bg-red-50">
      <h1>Hello world</h1>
      <section>
        <Link href={"/fortune"}></Link>
      </section>
    </main>
  );
}
