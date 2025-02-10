"use client";

import { useState, useEffect, use } from "react";
import { Station } from "@/app/lib/models/station/Station";
import { getStationByID } from "@/app/lib/functions/fetching/stationFunctions";
import StationForm from "@/app/components/station/StationForm";
import StationActivenessButton from "@/app/components/station/StationActivenessButton";

interface Props {
    params: Promise<{ stationID: string }>;
}

export default function StationPage({ params }: Props) {
    const { stationID } = use(params);

    const [station, setStation] = useState<Station | undefined>(undefined);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const fetchedStation = await getStationByID(stationID);
            setStation(fetchedStation);
            setLoading(false);
        };
        fetchData();
    }, [stationID]);

    if (loading) {
        return (
            <div className="py-5 text-center">
                <h1 className="text-3xl font-bold">Caricamento...</h1>
            </div>
        );
    }

    if (!station) {
        return (
            <div className="py-5 text-center">
                <h1 className="text-3xl font-bold">Parcheggio non trovato</h1>
                <p className="text-gray-500">Il parcheggio richiesto non esiste o non è disponibile.</p>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-col items-center justify-center text-center bg-white rounded-lg shadow-lg p-8 w-fit">
                <p className="text-sm">{`${station.address.street}, ${station.address.number} (${station.address.zipCode})`} - {station.numSlots} posti </p>
                <div className="flex items-center">
                <h1 className="text-3xl my-4 font-bold  mx-5">{station.name}</h1>
                <p className={"font-bold text-2xl  " + (station.isActive ? "text-mygreen" : "text-myred")}>  [{station.isActive ? "Attiva" : "Non attiva"}]</p>
                </div>
                <StationForm hidden={true} station={station} />
                <div className="flex space-x-7 my-5">
                    <button className="font-bold py-2 px-4 rounded bg-blue-500 text-white">
                        Assegna posti
                    </button>
                    <StationActivenessButton initialActive={station.isActive} stationID={stationID} />
                </div>
            </div>
        </div>
    );
}
