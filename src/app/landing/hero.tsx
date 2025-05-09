import Link from 'next/link';

export default function Hero() {
  return (
    <section id='hero' className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-green-50 to-teal-50 text-gray-900">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 pt-8">
            Gérez vos relations clients <span className="text-green-600">simplement</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Optimisez votre gestion client avec notre CRM intuitif et puissant, conçu pour les entreprises modernes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/start" className="bg-green-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out flex items-center justify-center whitespace-nowrap">
              Essai gratuit <span className="ml-2">→</span>
            </Link>
            <Link href="/features" className="bg-white text-gray-700 font-semibold py-3 px-8 rounded-lg border border-gray-300 hover:bg-gray-100 transition duration-300 ease-in-out whitespace-nowrap">
              Découvrir les fonctionnalités
            </Link>
          </div>
          <div className="mt-8 text-sm text-gray-500">
            <span>+1000 entreprises nous font confiance</span>
          </div>
        </div>
      </div>
    </section>
  );
} 