import { FaPinterestP, FaRedditAlien, FaWhatsapp, FaSnapchatGhost } from 'react-icons/fa';
import { FiCompass, FiBriefcase, FiUsers, FiLifeBuoy } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-14 px-4 sm:px-6 lg:px-8 max-w-full mx-auto">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <h2 className="text-3xl font-bold mb-4 md:mb-0">CRM Pro</h2>
          <div className="flex space-x-5">
            <a href="#" className="text-white hover:text-teal-200"><FaPinterestP size={24} /></a>
            <a href="#" className="text-white hover:text-teal-200"><FaRedditAlien size={24} /></a>
            <a href="#" className="text-white hover:text-teal-200"><FaWhatsapp size={24} /></a>
            <a href="#" className="text-white hover:text-teal-200"><FaSnapchatGhost size={24} /></a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4 flex items-center justify-center sm:justify-start"><FiCompass className="mr-2" /> Produit</h3>
            <ul className="space-y-2 text-teal-100">
              <li><a href="#" className="hover:text-white">Fonctionnalités</a></li>
              <li><a href="#" className="hover:text-white">Tarifs</a></li>
              <li><a href="#" className="hover:text-white">Intégrations</a></li>
              <li><a href="#" className="hover:text-white">Mises à jour</a></li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4 flex items-center justify-center sm:justify-start"><FiBriefcase className="mr-2" /> Entreprise</h3>
            <ul className="space-y-2 text-teal-100">
              <li><a href="#" className="hover:text-white">À propos</a></li>
              <li><a href="#" className="hover:text-white">Carrières</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Partenaires</a></li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4 flex items-center justify-center sm:justify-start"><FiUsers className="mr-2" /> Ressources</h3>
            <ul className="space-y-2 text-teal-100">
              <li><a href="#" className="hover:text-white">Documentation</a></li>
              <li><a href="#" className="hover:text-white">Tutoriels</a></li>
              <li><a href="#" className="hover:text-white">Webinaires</a></li>
              <li><a href="#" className="hover:text-white">API</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center justify-center sm:justify-start"><FiLifeBuoy className="mr-2" /> Support</h3>
            <ul className="space-y-2 text-teal-100">
              <li><a href="#" className="hover:text-white">Centre d'aide</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Statut</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-teal-400 text-center text-sm text-teal-100">
          <p>&copy; {new Date().getFullYear()} CRM Pro. Tous droits réservés.</p>
          <div className="mt-4 space-x-6">
            <a href="#" className="hover:text-white">Politique de confidentialité</a>
            <a href="#" className="hover:text-white">Conditions d'utilisation</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
