import { Metadata } from "next";
import StationList from "@/app/components/station/StationList";
import { Station } from "@/app/lib/models/station/Station";

export const metadata: Metadata = {
    title: "Parcheggi",
};

// Fetching stations data
const fetchStations = async (): Promise<Station[] | undefined> => {
    try {
        const res = await fetch("http://localhost:3000/api/stations", {
            method: "GET",
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch stations");
        }

        return res.json(); // Call res.json() to resolve the response
    } catch (error) {
        console.error("Error fetching stations:", error);
        return undefined; // Return undefined on failure
    }
};

// Main Component
export default async function StationDiv() {
    const stations = await fetchStations();

    if (!stations || stations.length === 0) {
        return (
            <div>
                <h1 className="py-5 text-4xl text-center font-bold">
                    Lista Parcheggi
                </h1>
                <p className="text-center text-lg text-gray-500">
                    Nessun parcheggio disponibile al momento.
                </p>
            </div>
        );
    }

    return (
        <div>
            <h1 className="py-5 text-4xl text-center font-bold">
                Lista Parcheggi
            </h1>
            <StationList stations={stations} />
        </div>
    );
}

