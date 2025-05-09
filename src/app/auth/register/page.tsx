'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const json = await res.json();
      
      if (!res.ok) {
        throw new Error(json.error);
      }

      if (json.redirect) {
        router.push(json.redirect);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur inattendue');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-4 font-sans text-gray-800">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl border border-gray-200">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
            Créer un compte
          </h2>
          <p className="text-gray-600">Rejoignez-nous et explorez un nouveau monde.</p>
        </div>
        
        {error && (
          <div className="mb-6 p-4 text-sm text-red-700 bg-red-100 rounded-lg border border-red-300">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              Nom complet
            </label>
            <div className="relative group">
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Votre nom complet"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 outline-none bg-gray-50 placeholder-gray-500 text-gray-800 hover:bg-gray-100 focus:bg-gray-100 shadow-sm"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                 <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                 <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Adresse Email
            </label>
            <div className="relative group">
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="exemple@domaine.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 outline-none bg-gray-50 placeholder-gray-500 text-gray-800 hover:bg-gray-100 focus:bg-gray-100 shadow-sm"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                 <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              Mot de passe
            </label>
            <div className="relative group">
              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="Choisissez un mot de passe sécurisé"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 outline-none bg-gray-50 placeholder-gray-500 text-gray-800 hover:bg-gray-100 focus:bg-gray-100 shadow-sm"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-white relative group"
          >
            <span className="relative z-10 flex items-center justify-center">
              S'inscrire
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </button>
          
          <div className="text-center mt-8 text-gray-600">
            Déjà un compte ?
            <Link href="/auth/login" className="ml-1 text-green-600 hover:text-green-500 transition-all duration-300 font-medium hover:underline">
              Connectez-vous
            </Link>
          </div>
          <div className="text-center mt-6">
            <Link href="/" className="text-sm text-gray-600 hover:text-green-500 transition duration-150 ease-in-out flex items-center justify-center gap-1.5">
              <FaHome className="h-4 w-4" />
              Retour à l'accueil
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
