import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="absolute z-50 w-full top-4">
      <div className="container mx-auto">
        <nav className="flex py-4 px-8 bg-indigo-500 rounded-xl shadow-lg justify-between items-center">
          <div className="flex gap-12 items-center">
            <Link
              className="text-lg font-bold text-center text-white uppercase"
              href="/"
            >
              Moviemate
            </Link>
            <ul className="flex space-x-6">
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
