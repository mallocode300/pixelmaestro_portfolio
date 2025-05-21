"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-6">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm text-gray-500">
          &copy; {currentYear} PixelMaestro. All rights reserved.
        </p>
        <div className="mt-2 flex justify-center space-x-4 text-sm">
          <Link href="/" className="text-gray-500 hover:text-primary">
            Home
          </Link>
          <Link href="/gallery" className="text-gray-500 hover:text-primary">
            Gallery
          </Link>
          <Link href="/about" className="text-gray-500 hover:text-primary">
            About
          </Link>
          <Link href="/contact" className="text-gray-500 hover:text-primary">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
} 