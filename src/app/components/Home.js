"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-4xl font-bold text-orange-400">
          <Link href="/">Vigneshu VN</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="text-gray-600 text-2xl font-semibold hover:text-orange-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-gray-600 text-2xl font-semibold hover:text-orange-300">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-600 text-2xl font-semibold hover:text-orange-300">
              contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 focus:outline-none focus:text-orange-500"
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-md">
          <li>
            <Link
              href="/"
              className="block px-4 py-2 text-gray-600 hover:text-orange-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block px-4 py-2 text-gray-600 hover:text-orange-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block px-4 py-2 text-gray-600 hover:text-orange-300"
            >
              contact
            </Link>
          </li>
         
        </ul>
      )}
    </nav>
  );
}
