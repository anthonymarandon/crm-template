import MarketingStats from "./components/clientStats";
import { requireAuth } from "@/lib/auth";
import ClientsList from "./components/clientsList";

export default async function Dashboard() {
    const session = await requireAuth();

    return (
        <>
            <MarketingStats />
            <ClientsList />
        </>
    )
}