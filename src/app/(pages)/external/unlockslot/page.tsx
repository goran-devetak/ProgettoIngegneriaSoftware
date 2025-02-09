"use client"

import { getAllStations } from "@/app/lib/functions/fetching/stationFunctions";
import { Station } from "@/app/lib/models/station/Station";
import { useActionState, useEffect, useState } from "react";

async function unlock(prevState: any, formData: FormData) {
    //DO WHAT YOU HAVE TO DO
}

export default function UnlockSlot() {
    const [state, unlockAction] = useActionState(unlock, undefined);

    const [stations, setStations] = useState<Station[]>([]);
    const [selectedStation, setSelectedStation] = useState("");

    useEffect(() => {
        async function fetchStations() {
            const data = await getAllStations();
            if (data) setStations(data);
        }

        fetchStations();
    }, []);



    return (
        <div>
            <div className="pb-2">
                <h1 className="text-4xl text-center text-gray-800 font-bold" >Sblocca posto</h1>
            </div>
            <hr className="py-2" />
            <form action={unlockAction} className="flex flex-col">
                <div className="flex flex-col gap-2 mt-4">
                    <label className="font-semibold text-sm">Parcheggio</label>
                    <select
                        className="h-10 px-4 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                        id="station"
                        value={selectedStation}
                        onChange={(e) => setSelectedStation(e.target.value)}
                    >
                        <option value="" disabled>Seleziona una parcheggio...</option>
                        {stations.map((station, index) => (
                            (
                                !station.isEliminated && station.isActive &&
                                <option key={index} value={station.name}>
                                    {station.name}
                                </option>
                            )
                        ))}
                    </select>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                    <label className="font-semibold text-sm">Servizio</label>
                    <select
                        name="slot"
                        className="h-10 px-4 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                        defaultValue={""}
                        required
                    >
                        <option value="" disabled>Seleziona il tuo servizio...</option>
                        <option value="sharing">Sharing</option>
                        <option value="privato">Personale</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                    <label className="font-semibold text-sm">Posto</label>
                    <select
                        name="slot"
                        className="h-10 px-4 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                        defaultValue={""}
                        required
                    >
                        <option value="" disabled> Seleziona un posto...</option>
                        <option value="a"> 1</option>

                    </select>
                </div>
                <button
                    type="submit"
                    className="mt-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-800 transition"
                >
                    {state?.success ? "Sbloccato!" : "Sblocca"}
                </button>
                {state?.error && (
                    <p className="mt-4 text-center text-sm text-red-500">{state.error}</p>
                )}
            </form>
        </div>
    )
}
