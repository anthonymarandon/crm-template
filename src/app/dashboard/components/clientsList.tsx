import { 
  MdEmail, 
  MdPhone, 
  MdLocationOn, 
  MdTrendingUp,
  MdTrendingDown,
  MdMoreVert
} from 'react-icons/md';

// Données fictives des clients
const clientsData = [
  {
    id: 1,
    nom: "Sophie Martin",
    entreprise: "TechCorp Solutions",
    email: "sophie.martin@techcorp.fr",
    telephone: "+33 1 42 34 56 78",
    ville: "Paris",
    valeurContrat: 125000,
    statut: "Actif",
    tendance: "up",
    dernierContact: "2024-01-15",
    avatar: "SM"
  },
  {
    id: 2,
    nom: "Pierre Dubois",
    entreprise: "Innovation Labs",
    email: "p.dubois@innovation-labs.com",
    telephone: "+33 4 91 23 45 67",
    ville: "Marseille",
    valeurContrat: 89000,
    statut: "Prospect",
    tendance: "up",
    dernierContact: "2024-01-12",
    avatar: "PD"
  },
  {
    id: 3,
    nom: "Marie Leroy",
    entreprise: "Digital Dynamics",
    email: "marie.leroy@digitaldynamics.fr",
    telephone: "+33 5 56 78 90 12",
    ville: "Bordeaux",
    valeurContrat: 67000,
    statut: "Négociation",
    tendance: "down",
    dernierContact: "2024-01-10",
    avatar: "ML"
  },
  {
    id: 4,
    nom: "Jean Moreau",
    entreprise: "Future Systems",
    email: "j.moreau@futuresystems.com",
    telephone: "+33 3 20 34 56 78",
    ville: "Lille",
    valeurContrat: 156000,
    statut: "Actif",
    tendance: "up",
    dernierContact: "2024-01-14",
    avatar: "JM"
  },
  {
    id: 5,
    nom: "Claire Bernard",
    entreprise: "Smart Solutions",
    email: "claire.bernard@smartsol.fr",
    telephone: "+33 4 72 34 56 78",
    ville: "Lyon",
    valeurContrat: 98000,
    statut: "Inactif",
    tendance: "down",
    dernierContact: "2023-12-20",
    avatar: "CB"
  },
  {
    id: 6,
    nom: "Thomas Petit",
    entreprise: "NextGen Tech",
    email: "thomas.petit@nextgen.com",
    telephone: "+33 2 40 12 34 56",
    ville: "Nantes",
    valeurContrat: 134000,
    statut: "Actif",
    tendance: "up",
    dernierContact: "2024-01-13",
    avatar: "TP"
  }
];

const getStatutColor = (statut: string) => {
  switch (statut) {
    case 'Actif': return 'bg-green-100 text-green-800 border-green-200';
    case 'Prospect': return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'Négociation': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'Inactif': return 'bg-gray-100 text-gray-800 border-gray-200';
    default: return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export default function ListeClients() {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Liste des Clients</h2>
            <p className="text-sm text-gray-600 mt-1">Gérez vos relations clients</p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-medium transition-colors duration-200 shadow-sm">
              + Nouveau Client
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Client</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Contact</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Localisation</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Valeur</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Statut</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Tendance</th>
              <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {clientsData.map((client) => (
              <tr key={client.id} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-4">
                      {client.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">{client.nom}</div>
                      <div className="text-sm text-gray-500">{client.entreprise}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="space-y-1">
                    <div className="flex items-center text-sm text-gray-600">
                      <MdEmail className="w-4 h-4 mr-2 text-gray-400" />
                      {client.email}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MdPhone className="w-4 h-4 mr-2 text-gray-400" />
                      {client.telephone}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center text-sm text-gray-600">
                    <MdLocationOn className="w-4 h-4 mr-2 text-gray-400" />
                    {client.ville}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-semibold text-gray-900">
                    €{client.valeurContrat.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-500">Valeur contrat</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatutColor(client.statut)}`}>
                    {client.statut}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {client.tendance === 'up' ? (
                      <MdTrendingUp className="w-5 h-5 text-green-500" />
                    ) : (
                      <MdTrendingDown className="w-5 h-5 text-red-500" />
                    )}
                    <span className={`ml-2 text-sm font-medium ${client.tendance === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {client.tendance === 'up' ? '+12%' : '-5%'}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <button className="text-gray-400 hover:text-gray-600 transition-colors duration-150 p-2 rounded-lg hover:bg-gray-100">
                    <MdMoreVert className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Affichage de <span className="font-medium">1-6</span> sur <span className="font-medium">6</span> clients
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-150">
              Précédent
            </button>
            <button className="px-3 py-2 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-150">
              1
            </button>
            <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-150">
              Suivant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 