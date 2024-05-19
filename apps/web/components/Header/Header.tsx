import Link from "next/link";
import { Logo } from "@/components/Logo";

export const Header = () => {
  return (
    <header className="w-full border-b border-slate-600">
      <div className="container mx-auto">
        <nav className="flex py-4 rounded-xl shadow-lg justify-between items-center">
          <div className="flex gap-12 items-center">
            <Link className="" href="/">
              <Logo size="sm" />
            </Link>
            <ul className="flex space-x-6">
              <li>
                <Link className="text-white" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-white" href="/events">
                  Categories
                </Link>
              </li>
              <li>
                <Link className="text-white" href="/popular">
                  Popular
                </Link>
              </li>
              <li>
                <Link className="text-white" href="/cinemas">
                  Cinemas
                </Link>
              </li>
            </ul>
          </div>
          <Link className="text-white" href="/login">
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};
