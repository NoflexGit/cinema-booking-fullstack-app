import Link from 'next/link';
import { Logo } from '@/components/Logo';

export const Header = () => {
  return (
    <header className="w-full border-b border-slate-600">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between rounded-xl py-4 shadow-lg">
          <div className="flex items-center gap-12">
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
                <Link className="text-white" href="/cinemas" prefetch>
                  Cinemas
                </Link>
              </li>
            </ul>
          </div>
          <Link
            className="text-white"
            href="/login"
            data-test-id="login-button"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};
