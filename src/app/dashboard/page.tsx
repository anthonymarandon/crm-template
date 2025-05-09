import MarketingStats from "./components/clientStats";
import { requireAuth } from "@/lib/auth";

export const revalidate = 30;

export default async function Dashboard() {
    const session = await requireAuth();

    return (
        <>
            <MarketingStats />
        </>
    )
}