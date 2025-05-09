export default function Faq() {
  return (
    <div className="bg-green-50 flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-10">Questions Fréquentes</h1>
        <div className="space-y-4">
          <details className="group bg-white p-6 rounded-lg border border-green-200 hover:border-green-400 transition-all duration-300">
            <summary className="font-medium text-lg cursor-pointer text-green-800 group-hover:text-green-600 flex justify-between items-center">
              <span>Comment démarrer avec votre CRM&nbsp;?</span>
              <span className="transform transition-transform duration-300 group-open:rotate-180">▼</span>
            </summary>
            <p className="mt-3 text-gray-600 leading-relaxed pt-2 border-t border-green-100 group-open:border-t-0">Créez votre compte gratuitement, importez vos contacts et commencez à utiliser toutes les fonctionnalités de base. Notre équipe vous accompagne dans la mise en place.</p>
          </details>
          <details className="group bg-white p-6 rounded-lg border border-green-200 hover:border-green-400 transition-all duration-300">
            <summary className="font-medium text-lg cursor-pointer text-green-800 group-hover:text-green-600 flex justify-between items-center">
              <span>Quelles sont les intégrations disponibles&nbsp;?</span>
              <span className="transform transition-transform duration-300 group-open:rotate-180">▼</span>
            </summary>
            <p className="mt-3 text-gray-600 leading-relaxed pt-2 border-t border-green-100 group-open:border-t-0">Notre CRM s'intègre avec les principaux outils : Gmail, Outlook, Slack, Microsoft Teams, et bien d'autres. Nous proposons également une API pour des intégrations personnalisées.</p>
          </details>
          <details className="group bg-white p-6 rounded-lg border border-green-200 hover:border-green-400 transition-all duration-300">
            <summary className="font-medium text-lg cursor-pointer text-green-800 group-hover:text-green-600 flex justify-between items-center">
              <span>Comment sécurisez-vous mes données&nbsp;?</span>
              <span className="transform transition-transform duration-300 group-open:rotate-180">▼</span>
            </summary>
            <p className="mt-3 text-gray-600 leading-relaxed pt-2 border-t border-green-100 group-open:border-t-0">Nous utilisons un chiffrement de bout en bout, des sauvegardes régulières et respectons le RGPD. Vos données sont hébergées sur des serveurs sécurisés en Europe.</p>
          </details>
          <details className="group bg-white p-6 rounded-lg border border-green-200 hover:border-green-400 transition-all duration-300">
            <summary className="font-medium text-lg cursor-pointer text-green-800 group-hover:text-green-600 flex justify-between items-center">
              <span>Quel support technique proposez-vous&nbsp;?</span>
              <span className="transform transition-transform duration-300 group-open:rotate-180">▼</span>
            </summary>
            <p className="mt-3 text-gray-600 leading-relaxed pt-2 border-t border-green-100 group-open:border-t-0">Nous offrons un support par email, chat et téléphone selon votre formule. Les clients Business bénéficient d'un support prioritaire et d'un gestionnaire de compte dédié.</p>
          </details>
          <details className="group bg-white p-6 rounded-lg border border-green-200 hover:border-green-400 transition-all duration-300">
            <summary className="font-medium text-lg cursor-pointer text-green-800 group-hover:text-green-600 flex justify-between items-center">
              <span>Puis-je personnaliser le CRM selon mes besoins&nbsp;?</span>
              <span className="transform transition-transform duration-300 group-open:rotate-180">▼</span>
            </summary>
            <p className="mt-3 text-gray-600 leading-relaxed pt-2 border-t border-green-100 group-open:border-t-0">Oui, notre CRM est entièrement personnalisable : champs personnalisés, workflows, tableaux de bord, et plus encore. Nous proposons également des solutions sur mesure pour les grandes entreprises.</p>
          </details>
        </div>
      </div>
    </div>
  );
}
