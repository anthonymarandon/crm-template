'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaHome, FaSignOutAlt } from 'react-icons/fa';
import MobileHeader from './mobileHeader';

export default function Header() {
  return (
    <>
      {/* Header Desktop */}
      <div className="hidden md:block">
        <header className="bg-emerald-700 text-white shadow-md sticky top-0 z-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex justify-between items-center">
              {/* Logo/Title */}

              <div className="flex items-center space-x-4">
                <Image
                  src="/crm.png"
                  alt="Logo TradeX"
                  width={40}
                  height={40}
                  className="rounded-full object-contain"
                  priority
                />
                <Link href="/dashboard" className="text-2xl font-bold text-white">
                  CRM
                </Link>
              </div>
              {/* Navigation avec icônes */}
              <nav className="flex items-center space-x-6">
                <div className="group relative">
                  <Link href="/dashboard" className="hover:text-emerald-300 transition-colors">
                    <FaHome className="h-6 w-6" />
                  </Link>
                  <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-100 whitespace-nowrap">
                    Accueil
                  </span>
                </div>
                <div className="group relative">
                  <form action="/api/logout" method="POST" onSubmit={async (e) => {
                    e.preventDefault();
                    const response = await fetch('/api/logout', { method: 'POST' });
                    const data = await response.json();
                    if (data.redirect) {
                      window.location.href = data.redirect;
                    }
                  }}>
                    <button 
                      type="submit"
                      className="hover:text-red-300 transition-colors p-1 rounded-lg"
                    >
                      <FaSignOutAlt className="h-6 w-6" />
                    </button>
                  </form>
                  <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-100 whitespace-nowrap">
                    Déconnexion
                  </span>
                </div>
              </nav>
            </div>
          </div>
        </header>
      </div>

      {/* Header Mobile */}
      <div className="md:hidden">
        <MobileHeader />
      </div>
    </>
  );
}