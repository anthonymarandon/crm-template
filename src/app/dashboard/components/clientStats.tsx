'use client';

import { MdPeople, MdAttachMoney, MdTrendingUp, MdCalendarToday } from 'react-icons/md';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { useState } from 'react';
import { CRMData } from '@/types/CRMdata';

const getCRMData = (): CRMData => {
  return {
    clientsActifs: 1245,
    valeurPortefeuille: '€2.4M',
    tauxConversion: '32%',
    leadsEnAttente: 156,
    rendezVousPlanifies: 48,
    emailsEnvoyes: 1245,
    appelsEffectues: 892,
    clientsParRegion: [
      { region: 'Île-de-France', nombre: 450 },
      { region: 'Auvergne-Rhône-Alpes', nombre: 280 },
      { region: 'Hauts-de-France', nombre: 195 },
      { region: 'Provence-Alpes-Côte d\'Azur', nombre: 175 },
      { region: 'Occitanie', nombre: 145 }
    ],
    evolutionVentes: [
      { mois: 'Jan', montant: 450000 },
      { mois: 'Fév', montant: 520000 },
      { mois: 'Mar', montant: 480000 },
      { mois: 'Avr', montant: 550000 },
      { mois: 'Mai', montant: 620000 },
      { mois: 'Juin', montant: 580000 }
    ],
    repartitionClients: [
      { categorie: 'Entreprises', valeur: 45 },
      { categorie: 'Particuliers', valeur: 30 },
      { categorie: 'Professionnels', valeur: 25 }
    ]
  };
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

export default function CRMStats() {
  const [data, setData] = useState<CRMData>(getCRMData());

  const statsData = [
    {
      title: 'Clients Actifs',
      value: data.clientsActifs.toLocaleString('fr-FR'),
      icon: <MdPeople className="text-blue-600 w-8 h-8" />,
      iconBg: 'bg-blue-100',
      gradient: 'bg-gradient-to-br from-white to-blue-50',
      description: 'Nombre total de clients actifs'
    },
    {
      title: 'Valeur du Portefeuille',
      value: data.valeurPortefeuille,
      icon: <MdAttachMoney className="text-green-600 w-8 h-8" />,
      iconBg: 'bg-green-100',
      gradient: 'bg-gradient-to-br from-white to-green-50',
      description: 'Valeur totale du portefeuille clients'
    },
    {
      title: 'Taux de Conversion',
      value: data.tauxConversion,
      icon: <MdTrendingUp className="text-purple-600 w-8 h-8" />,
      iconBg: 'bg-purple-100',
      gradient: 'bg-gradient-to-br from-white to-purple-50',
      description: 'Taux de conversion des leads en clients'
    },
    {
      title: 'Leads en Attente',
      value: data.leadsEnAttente,
      icon: <MdCalendarToday className="text-yellow-600 w-8 h-8" />,
      iconBg: 'bg-yellow-100',
      gradient: 'bg-gradient-to-br from-white to-yellow-50',
      description: 'Nombre de leads à traiter'
    }
  ];

  return (
    <div className="w-full flex flex-col items-center py-8 px-4">
      <h1 className="text-center text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
        Tableau de Bord CRM
      </h1>

      {/* Statistiques principales */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {statsData.map((stat) => (
          <div
            key={stat.title}
            className={`group ${stat.gradient} rounded-xl p-6 flex flex-col items-start 
            transition-all duration-300 hover:shadow-xl hover:shadow-gray-200 shadow-md shadow-gray-100 
            border border-gray-200 hover:border-gray-300 transform hover:-translate-y-1`}
          >
            <div className={`flex items-center justify-center rounded-lg ${stat.iconBg} mb-5 w-14 h-14 
            shadow-sm shadow-gray-200 group-hover:shadow-md group-hover:shadow-gray-300 transition-all duration-300`}>
              {stat.icon}
            </div>
            <div className="text-base text-gray-700 font-semibold mb-1">{stat.title}</div>
            <div className="text-4xl font-extrabold text-gray-900 mb-3">{stat.value}</div>
            <p className="text-xs text-gray-500">{stat.description}</p>
          </div>
        ))}
      </div>

      {/* Graphiques */}
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Évolution des ventes */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md shadow-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Évolution des Ventes</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.evolutionVentes}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="mois" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'white', border: '1px solid #E5E7EB', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  labelStyle={{ color: '#374151' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="montant" 
                  stroke="#2563EB" 
                  strokeWidth={2}
                  dot={{ fill: '#2563EB', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Répartition des clients */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md shadow-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Répartition des Clients</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data.repartitionClients}
                  dataKey="valeur"
                  nameKey="categorie"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {data.repartitionClients.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: 'white', border: '1px solid #E5E7EB', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  labelStyle={{ color: '#374151' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Tableau des clients par région */}
      <div className="w-full max-w-7xl bg-white rounded-xl p-6 border border-gray-200 shadow-md shadow-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Clients par Région</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-gray-200">
                <th className="pb-4 text-gray-600 font-medium">Région</th>
                <th className="pb-4 text-gray-600 font-medium">Nombre de Clients</th>
                <th className="pb-4 text-gray-600 font-medium">Pourcentage</th>
              </tr>
            </thead>
            <tbody>
              {data.clientsParRegion.map((region) => (
                <tr key={region.region} className="border-b border-gray-100">
                  <td className="py-4 text-gray-700">{region.region}</td>
                  <td className="py-4 text-gray-700">{region.nombre.toLocaleString('fr-FR')}</td>
                  <td className="py-4 text-gray-700">
                    {((region.nombre / data.clientsActifs) * 100).toFixed(1)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}