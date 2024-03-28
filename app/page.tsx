import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <Link href="https://rmss.bhs.sh">🍎 rmss.bhs.sh</Link>
      <Link href="https://testing.bhs.sh">🎓 testing.bhs.sh</Link>
      <Link href="https://calc.bhs.sh">🪴 calc.bhs.sh</Link>
      <Link href="https://fire.bhs.sh">🔥 fire.bhs.sh</Link>
      <Link href="https://ibgrades.bhs.sh">📊 ibgrades.bhs.sh</Link>
      <Link href="https://schedules.bhs.sh">🗓️ schedules.bhs.sh</Link>
      <Link href="https://countdown.bhs.sh">🕰️ countdown.bhs.sh</Link>
      <Link href="https://ivy.bhs.sh">🌿 ivy.bhs.sh</Link>
      <Link href="https://ivyday.bhs.sh">🎓 ivyday.bhs.sh</Link>
      <Link href="https://map.bhs.sh">🗺️ map.bhs.sh</Link>
      <Link href="https://auth.bhs.sh">🔒 auth.bhs.sh</Link>
      <Link href="https://ahc.bhs.sh">🏛️ ahc.bhs.sh</Link>
      <span className="cursor-wait">
        ⁉️ <span className="blur-sm">comingsoon</span>
        .bhs.sh
      </span>
      <span className="!mt-4">
        created with ❤️ by{" "}
        <Link href="https://eliothertenstein.com" className="underline">
          eliot
        </Link>
      </span>
    </main>
  );
}
