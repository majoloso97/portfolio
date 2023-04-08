import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white dark:bg-slate-800 text-white">
      <nav className="flex justify-between container mx-auto py-4">
        <Link href="/" className="text-slate-900 dark:text-white text-xl font-bold">
          My Portfolio
        </Link>

        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-slate-900 dark:text-white hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-slate-900 dark:text-white hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-slate-900 dark:text-white hover:text-gray-400">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-slate-900 dark:text-white hover:text-gray-400">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
