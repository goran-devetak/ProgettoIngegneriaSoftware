'use client';

import { useEffect, useState } from "react";
import { Station } from "@/app/lib/models/station/Station";
import StationCardComponent from "./StationCard";
import { getAllStations } from "@/app/lib/functions/fetching/stationFunctions";
import mongoose from "mongoose";

const StationList = () => {
    const [stations, setStations] = useState<Station[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchStations = async () => {
            try {
                const data = await getAllStations();
                if (data) setStations(data);
            } catch (err) {
                console.error("Errore nel fetching delle stazioni:", err);
                setError("Errore nel caricamento delle stazioni.");
            } finally {
                setLoading(false);
            }
        };

        fetchStations();
    }, []);

    if (loading) {
        return <div className=" flex flex-col gap-4 items-center justify-center text-xl">Caricamento in corso...</div>;
    }

    if (error) {
        return <div className="text-xl flex flex-col gap-4 items-center justify-centertext-xltext-red-500">{error}</div>;
    }

    return (
        <div className="flex flex-col gap-4 items-center justify-center w-screen h-full max-w-9xl">
            {stations.length > 0 ? (
                stations.map((station) =>
                    !station.isEliminated ? (
                        <StationCardComponent
                            key={String(station._id)}
                            station={station}
                        />
                    ) : null
                )
            ) : (
                <div className="text-xl">Nessuna segnalazione disponibile</div>
            )}
        </div>
    );
};

export default StationList;
