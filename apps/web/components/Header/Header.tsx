import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="w-full border-b border-slate-600">
      <div className="container mx-auto">
        <nav className="flex py-4 px-8 rounded-xl shadow-lg justify-between items-center">
          <div className="flex gap-12 items-center">
            <Link
              className="text-2xl font-extrabold tracking-widest text-center text-white uppercase"
              href="/"
            >
              <span className="text-indigo-400">n</span>
              <span className="text-purple-400">o</span>
              <span className="text-pink-400">m</span>
              <span className="text-rose-300">o</span>
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
                <Link className="text-white" href="/popular">
                  New
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
