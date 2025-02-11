"use client"

import { useActionState, useEffect, useState } from "react";
import { getAllActiveStations } from "@/app/lib/functions/fetching/stationFunctions";
import { Station } from "@/app/lib/models/station/Station";
import { StationSelector } from "@/app/components/testing/stationSelector";
import { CategorySelector } from "@/app/components/testing/categorySelector";
import { SlotSelector } from "@/app/components/testing/slotSelector";
import { fetchSlots } from "@/app/lib/functions/testing/slotFunctions";

async function unlock(prevState: any, formData: FormData) {
    const stationID: string = String(formData.get('station'))
    const slotID: string = String(formData.get('slot'))
    const service: string = String(formData.get('service'))


    try {
        const response = await fetch(`/api/stations/${stationID}/${slotID}/adduse`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                isBlocked: false,
                userId: "00000000",
                service: service,
                timestamp: Math.floor(Date.now()/1000),
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Errore durante l'aggiornamento del posto");
        } else {
            const response2 = await fetch('/api/uses', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId: '0',
                    timestamp: Date.now(),
                    isBlocked: false,
                    service: service,
                    stationID: stationID
                }),
            });

            const result = await response2.json();
            if (!response2.ok) {
                console.error(result.error);
            } else {
                console.log('Success:', result);
                window.location.reload()
            }
            return result
        }
    } catch (error: any) {
        console.error("Errore nell'aggiornare il posto:", error);
        return { success: false, errorMessage: error.message };
    }
}

export default function UnlockSlot() {
    const [state, unlockAction] = useActionState(unlock, { success: false, errorMessage: "" });
    const [stations, setStations] = useState<Station[]>([]);
    const [selectedStation, setSelectedStation] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [availableSlots, setAvailableSlots] = useState<{ id: any; originalIndex: number; }[]>([]);
    const [showOptions, setShowOptions] = useState(false);

    useEffect(() => {
        async function fetchStations() {
            const data = await getAllActiveStations();
            if (data) setStations(data);
        }
        fetchStations();
    }, []);

    useEffect(() => setShowOptions(!!selectedStation), [selectedStation]);

    useEffect(() => {
        fetchSlots(selectedStation, selectedCategory, stations, setAvailableSlots, false);
    }, [selectedStation, selectedCategory, stations]);

    return (
        <div>
            <div className="pb-2">
                <h1 className="text-4xl text-center text-gray-800 font-bold">Sblocca</h1>
            </div>
            <hr className="py-2" />
            <form action={unlockAction} className="flex flex-col">
                <StationSelector stations={stations} selectedStationID={selectedStation} setSelectedStation={setSelectedStation} />
                <CategorySelector showOptions={showOptions} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                <SlotSelector availableSlots={availableSlots} />

                <button
                    type="submit"
                    className="mt-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-800 transition"
                >
                    {state.success ? "Sbloccato!" : "Sblocca"}
                </button>

                {/* Mostra l'errore sotto il pulsante */}
                {state.success === false && (
                    <p className="mt-2 text-red-500 text-sm font-semibold text-center">
                        {state.errorMessage}
                    </p>
                )}
            </form>
        </div>
    );
}
