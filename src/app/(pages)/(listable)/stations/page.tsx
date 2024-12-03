import { Metadata } from "next";
import StationList from "@/app/components/station/StationList";
import {getAllStations} from "@/app/lib/functions/stationFunctions";

export const metadata: Metadata = {
    title: "Parcheggi",
};
    

// Main Component
export default async function StationDiv() {
    const stations = await getAllStations();

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

