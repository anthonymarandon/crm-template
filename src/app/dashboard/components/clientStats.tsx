import { 
  MdPeople, 
  MdAttachMoney, 
  MdTrendingUp, 
  MdNotifications
} from 'react-icons/md';

// exemple de stats
const stats = {
  clientsActifs: 1247,
  valeurPortefeuille: 2450000,
  tauxConversion: 34,
  leadsEnAttente: 23
};

export default function TableauDeBordCRM() {
  return (
      <div className="w-full mx-auto pb-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Tableau de Bord CRM</h1>
          <p className="text-gray-600">Aperçu de vos performances commerciales</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-100 rounded-full p-3 group-hover:bg-blue-200 transition-colors duration-300">
                <MdPeople className="text-blue-600 w-7 h-7" />
              </div>
              <div className="text-right">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">Clients Actifs</p>
              <p className="text-2xl font-bold text-gray-900">{stats.clientsActifs.toLocaleString()}</p>
              <p className="text-xs text-green-600 mt-1">↗ +12% ce mois</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 group">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-100 rounded-full p-3 group-hover:bg-green-200 transition-colors duration-300">
                <MdAttachMoney className="text-green-600 w-7 h-7" />
              </div>
              <div className="text-right">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">Valeur Portefeuille</p>
              <p className="text-2xl font-bold text-gray-900">€{(stats.valeurPortefeuille / 1000000).toFixed(1)}M</p>
              <p className="text-xs text-green-600 mt-1">↗ +8% ce mois</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200 group">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-100 rounded-full p-3 group-hover:bg-purple-200 transition-colors duration-300">
                <MdTrendingUp className="text-purple-600 w-7 h-7" />
              </div>
              <div className="text-right">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">Taux Conversion</p>
              <p className="text-2xl font-bold text-gray-900">{stats.tauxConversion}%</p>
              <p className="text-xs text-green-600 mt-1">↗ +5% ce mois</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200 group">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-orange-100 rounded-full p-3 group-hover:bg-orange-200 transition-colors duration-300">
                <MdNotifications className="text-orange-600 w-7 h-7" />
              </div>
              <div className="text-right">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">Leads en Attente</p>
              <p className="text-2xl font-bold text-gray-900">{stats.leadsEnAttente}</p>
              <p className="text-xs text-orange-600 mt-1">↑ Urgent</p>
            </div>
          </div>
        </div>
      </div>
  );
}