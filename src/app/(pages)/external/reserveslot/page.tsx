"use client"

import { useActionState, useEffect, useState } from "react";
import { getAllActiveStations } from "@/app/lib/functions/fetching/stationFunctions";
import { Station } from "@/app/lib/models/station/Station";
import { StationSelector } from "@/app/components/testing/stationSelector";
import { CategorySelector } from "@/app/components/testing/categorySelector";
import { SlotSelector } from "@/app/components/testing/slotSelector";
import { fetchSlots } from "@/app/lib/functions/testing/slotFunctions";

async function reserve(prevState: any, formData: FormData) {
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
                isBlocked: true,
                userId: "00000000",
                service,
                timestamp: Date.now(),
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
                    timestamp: Math.floor(Date.now()/1000),
                    isBlocked: true,
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
    } catch (error) {
        console.error("Errore nell'aggiornare il posto:", error);
        return null;
    }
}



export default function ReserveSlot() {
    const [state, reserveAction] = useActionState(reserve, undefined);
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
        fetchSlots(selectedStation, selectedCategory, stations, setAvailableSlots, true);
    }, [selectedStation, selectedCategory, stations]);

    return (
        <div>
            <div className="pb-2">
                <h1 className="text-4xl text-center text-gray-800 font-bold">Parcheggia</h1>
            </div>
            <hr className="py-2" />
            <form action={reserveAction} className="flex flex-col">
                <StationSelector stations={stations} selectedStationID={selectedStation} setSelectedStation={setSelectedStation} />
                <CategorySelector showOptions={showOptions} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                <SlotSelector availableSlots={availableSlots} />
                <button
                    type="submit"
                    className="mt-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-800 transition"
                >
                    {state?.success ? "Prenotato!" : "Prenota"}
                </button>
                {state?.error && (
                    <p className="mt-4 text-center text-sm text-red-500">{state.error}</p>
                )}
            </form>
        </div>
    );
}



