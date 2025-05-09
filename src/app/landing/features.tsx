import { MdOutlineDeveloperMode, MdOutlineMemory, MdOutlineNetworkCheck, MdOutlineWidgets, MdOutlineDataUsage, MdOutlineCloudSync } from "react-icons/md";

export default function Features() {
  return (
    <div id="features" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center lg:text-center mb-16">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Fonctionnalités CRM</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Une Solution Complète pour Votre Business
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto lg:mx-auto">
            Découvrez notre suite d'outils CRM conçue pour optimiser la gestion de vos relations clients et booster votre croissance.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-3">
            <div className="relative bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                  <MdOutlineDeveloperMode className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Gestion des Contacts</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Centralisez et organisez tous vos contacts clients dans une interface intuitive et personnalisable.
              </dd>
            </div>
            <div className="relative bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                  <MdOutlineMemory className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Suivi des Opportunités</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Suivez chaque opportunité commerciale et optimisez votre taux de conversion.
              </dd>
            </div>
            <div className="relative bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                  <MdOutlineNetworkCheck className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Automatisation Marketing</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Automatisez vos campagnes marketing et personnalisez vos communications client.
              </dd>
            </div>
            <div className="relative bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                  <MdOutlineWidgets className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Tableaux de Bord</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Visualisez vos KPIs et suivez vos performances commerciales en temps réel.
              </dd>
            </div>
            <div className="relative bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                  <MdOutlineDataUsage className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Analytics Avancés</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Analysez vos données clients et prenez des décisions basées sur des insights précis.
              </dd>
            </div>
            <div className="relative bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                  <MdOutlineCloudSync className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Intégrations Multi-plateformes</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Connectez votre CRM avec vos outils préférés pour une productivité maximale.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
