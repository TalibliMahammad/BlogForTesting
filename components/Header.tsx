import Link from "next/link";
import { ModeToggle } from "./ui/mode.toggle";


export default function Header() {
  return (
    <header className="border-b p-4 flex justify-between items-center sticky top-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur">
      <Link href="/" className="text-2xl font-serif font-bold">
        The Times in Azerbaijan
      </Link>
      <ModeToggle/>
    </header>
  );
}