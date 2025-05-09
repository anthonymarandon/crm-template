'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaHome, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-emerald-700 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          {/* Logo/Title */}
          <div className="flex items-center space-x-4">
            <Image
              src="/crm.png"
              alt="Logo TradeX"
              width={36}
              height={36}
              className="rounded-full object-contain"
              priority
            />
            <Link href="/dashboard" className="text-2xl font-bold text-white">
              CRM
            </Link>
          </div>
          
          {/* Bouton Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-emerald-700 py-4 px-4 shadow-lg">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/dashboard"
                className="flex items-center space-x-2 hover:text-emerald-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <FaHome className="h-5 w-5" />
                <span>Accueil</span>
              </Link>
              <form action="/api/logout" method="POST" onSubmit={async (e) => {
                e.preventDefault();
                const response = await fetch('/api/logout', { method: 'POST' });
                const data = await response.json();
                if (data.redirect) {
                  window.location.href = data.redirect;
                }
              }} className="flex items-center space-x-2">
                <button
                  type="submit"
                  className="flex items-center space-x-2 hover:text-red-300 transition-colors"
                >
                  <FaSignOutAlt className="h-5 w-5" />
                  <span>Déconnexion</span>
                </button>
              </form>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}