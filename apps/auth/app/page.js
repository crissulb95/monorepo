import Link from "next/link";

export default function Home() {
  return (
    <>
      <span>this is home</span>
      <Link href="/register">¡Al registro!</Link>
    </>
  );
}
