'use client'

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id='header' className='bg-green-50 font-sans'> 
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <header className='flex flex-col lg:flex-row items-center justify-between py-4'>
          <div className='flex items-center justify-between w-full lg:w-auto'>
            <h1 className='text-2xl font-bold text-green-800'>
              CRM Pro
            </h1>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='lg:hidden p-2 rounded-md hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500'
            >
              <div className="space-y-1.5">
                <span className={`block w-5 h-0.5 bg-green-700 transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-green-700 transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-green-700 transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>

          <nav className='hidden lg:flex lg:justify-center lg:flex-1 lg:items-center lg:space-x-6'> 
            <Link
              href='/'
              className='text-sm font-medium text-gray-700 hover:text-green-600 transition-colors duration-200'
            >
              Accueil
            </Link>
            <Link
              href='/features'
              className='text-sm font-medium text-gray-700 hover:text-green-600 transition-colors duration-200'
            >
              Fonctionnalités
            </Link>
            <Link
              href='/pricing'
              className='text-sm font-medium text-gray-700 hover:text-green-600 transition-colors duration-200'
            >
              Tarifs
            </Link>
            <Link
              href='/about'
              className='text-sm font-medium text-gray-700 hover:text-green-600 transition-colors duration-200'
            >
              À propos
            </Link>
            <Link
              href='/contact'
              className='text-sm font-medium text-gray-700 hover:text-green-600 transition-colors duration-200'
            >
              Contact
            </Link>
          </nav>
          
          <div className="hidden lg:flex lg:justify-end">
            <Link
              href='/auth/register'
              className='px-4 py-2 bg-green-600 text-white rounded-full text-sm font-medium hover:bg-green-700 transition-colors duration-200 shadow-sm hover:shadow-md'
            >
              Essai gratuit
            </Link>
          </div>
        </header>
      </div>

      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} bg-white border-t border-green-100`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4 space-y-4">
            <Link
              href='/'
              className='block text-base font-medium text-gray-700 hover:text-green-600 transition-colors duration-200'
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>
            <Link
              href='/features'
              className='block text-base font-medium text-gray-700 hover:text-green-600 transition-colors duration-200'
              onClick={() => setIsOpen(false)}
            >
              Fonctionnalités
            </Link>
            <Link
              href='/pricing'
              className='block text-base font-medium text-gray-700 hover:text-green-600 transition-colors duration-200'
              onClick={() => setIsOpen(false)}
            >
              Tarifs
            </Link>
            <Link
              href='/about'
              className='block text-base font-medium text-gray-700 hover:text-green-600 transition-colors duration-200'
              onClick={() => setIsOpen(false)}
            >
              À propos
            </Link>
            <Link
              href='/contact'
              className='block text-base font-medium text-gray-700 hover:text-green-600 transition-colors duration-200'
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href='/auth/register'
              className='block w-full text-center px-4 py-2 mt-4 text-base font-medium text-white bg-green-600 rounded-full hover:bg-green-700 transition-colors duration-200'
              onClick={() => setIsOpen(false)}
            >
              Essai gratuit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
