import { Metadata } from "next";
import StationList from "@/app/components/station/StationList";
import { getAllStations } from "@/app/lib/functions/fetching/stationFunctions";
import ListDiv from "../layout";

export const metadata: Metadata = {
    title: "PARCHEGGI",
};

// Main Component
export default async function StationDiv() {
    const stations = await getAllStations();

    if (!stations || stations.length === 0) {
        return (
            <>
                <p className="text-center text-lg text-gray-500">
                    Nessun parcheggio disponibile al momento.
                </p>
            </>
        );
    }
    else
        return (
            <ListDiv title={metadata.title?.toString()}>
                <StationList stations={stations} />
            </ListDiv>
        );
}

