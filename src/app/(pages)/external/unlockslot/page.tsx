"use client"

import { useActionState, useEffect, useState } from "react";
import { getAllActiveStations } from "@/app/lib/functions/fetching/stationFunctions";
import { Station } from "@/app/lib/models/station/Station";
import { StationSelector } from "@/app/components/testing/stationSelector";
import { CategorySelector } from "@/app/components/testing/categorySelector";
import { SlotSelector } from "@/app/components/testing/slotSelector";
import { fetchSlots } from "@/app/lib/functions/testing/slotFunctions";

async function unlock(prevState: any, formData: FormData) {
    console.log(formData);
}

export default function UnlockSlot() {
    const [state, unlockAction] = useActionState(unlock, undefined);
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
                </button>
            </form>
        </div>
    );
}



