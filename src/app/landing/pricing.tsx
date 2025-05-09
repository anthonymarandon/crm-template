import { FiBox, FiUsers, FiCheck, FiPlusCircle } from 'react-icons/fi';

const plans = [
  {
    name: "Starter",
    description: "Idéal pour les petites entreprises qui débutent avec un CRM.",
    price: "29€",
    frequency: "/mois",
    icon: FiBox,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
    buttonBg: "bg-yellow-500 hover:bg-yellow-600",
    buttonText: "Commencer gratuitement",
    features: [
      "Jusqu'à 5 utilisateurs",
      "Gestion des contacts",
      "Suivi des opportunités basique",
      "Rapports mensuels"
    ]
  },
  {
    name: "Business",
    description: "Solution complète pour les équipes commerciales en croissance.",
    price: "79€",
    frequency: "/mois par utilisateur",
    icon: FiUsers,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    buttonBg: "bg-orange-500 hover:bg-orange-600",
    buttonText: "Essai gratuit 14 jours",
    features: [
      "Utilisateurs illimités",
      "Automatisation marketing",
      "Analytics avancés",
      "Intégrations API",
      "Support prioritaire"
    ]
  }
];

export default function Pricing() {
  return (
    <div className="bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-orange-600 font-semibold uppercase tracking-wider text-sm">Tarification Transparente</span>
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mt-3">
            Des Solutions Adaptées à Votre Business
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Choisissez le plan qui correspond à vos besoins et faites évoluer votre gestion client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 flex flex-col text-center transform transition duration-300 hover:scale-[1.02] hover:shadow-orange-200/60"
            >
              <div className="mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${plan.iconBg} mb-5`}>
                  <plan.icon className={`w-8 h-8 ${plan.iconColor}`} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm mb-5">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-sm text-gray-500 ml-1">{plan.frequency}</span>
                </div>
              </div>

              <ul className="space-y-3 text-left mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <FiCheck className={`w-5 h-5 text-green-500 mr-3 flex-shrink-0`} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white ${plan.buttonBg} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 transition-colors duration-300 mt-auto`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center border-t border-orange-200 pt-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Besoin d'une Solution Sur Mesure ?</h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Pour les grandes entreprises ou les besoins spécifiques, nous proposons des solutions CRM personnalisées.
          </p>
          <button className="inline-flex items-center px-6 py-3 border border-orange-600 rounded-md text-base font-medium text-orange-600 bg-white hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-300">
             <FiPlusCircle className="w-5 h-5 mr-2" />
            Demander une démo personnalisée
          </button>
        </div>

      </div>
    </div>
  );
}
