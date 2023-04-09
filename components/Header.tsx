import React from 'react';
import Link from 'next/link';
import { Button } from '@mui/material';
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

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
          <li>
            <Button onClick={toggleTheme} className="text-slate-900 dark:text-white hover:text-gray-400">
            {theme === 'dark' ? <Brightness7Icon /> : <Brightness2Icon />}
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
