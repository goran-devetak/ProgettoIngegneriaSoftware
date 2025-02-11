"use client"

import { getAllNotEliminatedStations, getAllStations } from "@/app/lib/functions/fetching/stationFunctions";
import { Station } from "@/app/lib/models/station/Station";
import { useActionState, useEffect, useState } from "react";

async function report(prevState: any, formData: FormData) {
    const data = {
        title: formData.get("title"),
        description: formData.get("desc"),
        stationId: formData.get("station"),
        photo: (formData.get("media") as File)?.name || "",
        contacts: {
            email: formData.get("email"),
            phone: formData.get("cel")
        }
    };

    const res = await fetch("/api/reports", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok) {
        return { error: result.error || "Errore nell'inserire il report" };
    }

    return { success: true };
}

export default function NewReport() {
    const [state, reportAction] = useActionState(report, undefined);
    const [selectedStation, setSelectedStation] = useState("");
    const [stations, setStations] = useState<Station[]>([]);

    useEffect(() => {
        async function fetchStations() {
            const data = await getAllNotEliminatedStations();
            if (data) setStations(data);
        }
        fetchStations();
    }, []);

    return (
        <div>
            <div className="pb-2">
                <h1 className="text-4xl text-center text-gray-800 font-bold">Segnala un parcheggio</h1>
            </div>
            <hr className="py-2" />
            <form action={reportAction} className="flex flex-col">
                <div className="flex flex-col gap-2 mt-4">
                    <label className="font-semibold text-sm">Titolo segnalazione</label>
                    <input
                        name="title"
                        className="h-10 px-4 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                        type="text"
                        required
                    />
                </div>

                <div className="flex flex-col gap-2 mt-4">
                    <label className="font-semibold text-sm">Parcheggio</label>
                    <select
                        name='station'
                        className="h-10 px-4 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                        id="station"
                        value={selectedStation}
                        onChange={(e) => setSelectedStation(e.target.value)}
                    >
                        <option value="" disabled>Seleziona un parcheggio...</option>
                        {stations?.map((station, index) => (
                            (
                                <option key={index} value={String(station._id)}>
                                    {station.name}
                                </option>
                            )
                        ))}
                    </select>
                </div>

                <div className="flex flex-col gap-2 mt-4">
                    <label className="font-semibold text-sm">Descrizione segnalazione</label>
                    <textarea
                        name="desc"
                        className="h-32 px-4 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                        required
                    />
                </div>
                <div className="flex gap-2 mt-4">
                    <label className="font-semibold text-sm">Allegati</label>
                    <input
                        name="media"
                        className="rounded-base focus:outline-none"
                        type="file"
                        accept=".png,.jpg"
                    />
                </div>

                <hr className="mt-4" />

                <div className="flex gap-2 mt-4 justify-between">
                    <label className="font-semibold text-sm">Email</label>
                    <input
                        name="email"
                        className="h-10 px-4 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                        type="email"
                        required
                    />
                </div>

                <div className="flex gap-2 mt-4 justify-between">
                    <label className="font-semibold text-sm">Cellulare</label>
                    <input
                        name="cel"
                        className="h-10 px-4 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                        type="tel"
                        pattern="^\\+?[0-9\\s\\-]{7,15}$"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="mt-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-800 transition"
                >
                    {state?.success ? "Segnalato!" : "Segnala"}
                </button>
                {state?.error && (
                    <p className="mt-4 text-center text-sm text-red-500">{state.error}</p>
                )}
            </form>
        </div>
    );
}