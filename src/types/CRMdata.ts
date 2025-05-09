export interface CRMData {
    clientsActifs: number;
  valeurPortefeuille: string;
  tauxConversion: string;
  leadsEnAttente: number;
  rendezVousPlanifies: number;
  emailsEnvoyes: number;
  appelsEffectues: number;
  clientsParRegion: { region: string; nombre: number }[];
  evolutionVentes: { mois: string; montant: number }[];
  repartitionClients: { categorie: string; valeur: number }[];
}