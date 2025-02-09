"use client"

import { getAllStations, getSlotByID } from "@/app/lib/functions/fetching/stationFunctions";
import { Slot } from "@/app/lib/models/slot/Slot";
import { Station } from "@/app/lib/models/station/Station";
import { useActionState, useEffect, useState } from "react";

async function reserve(prevState: any, formData: FormData) {
    console.log(formData)
}

export default function ReserveSlot() {
    const [state, reserveAction] = useActionState(reserve, undefined);
    const [stations, setStations] = useState<Station[]>([]);
    const [selectedStation, setSelectedStation] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [availableSlots, setAvailableSlots] = useState<({ id: any; originalIndex: number; } | null)[]>([]);
    const [showOptions, setShowOptions] = useState(false);

    useEffect(() => {
        async function fetchStations() {
            const data = await getAllStations();
            if (data) {
                setStations(data);
            }
        }
        fetchStations();
    }, []);

    useEffect(() => {
        if (selectedStation) {
            setShowOptions(true);
        } else {
            setShowOptions(false);
        }
    }, [selectedStation]);

    useEffect(() => {
        async function fetchSlots() {
            if (selectedStation && selectedCategory) {
                const station = stations.find(st => st._id === selectedStation);

                if (station && station.slotList) {
                    try {
                        const slotPromises = station.slotList.map(async (slot, index) => {
                            const slotTemp = Object.values(slot).map(element => element.toString());
                            const slotID = slotTemp.slice(0, 24).join('');

                            const res = await fetch(`/api/stations/${station._id}/${slotID}`);
                            const data = await res.json();

                            if (data.success && !data.slot.bloccato &&
                                (data.slot.category === selectedCategory || data.slot.category === 'free')) {
                                return { id: data.slot._id, originalIndex: index }; // Mantieni l'indice originale
                            }
                            return null;
                        });

                        const resolvedSlots = await Promise.all(slotPromises);
                        setAvailableSlots(resolvedSlots.filter(slot => slot !== null)); // Filtra i valori null

                    } catch (error) {
                        console.error("Errore nel reperire informazioni sui posti", error);
                    }
                } else {
                    console.warn("Station not found or slotList undefined");
                }
            } else {
                setAvailableSlots([]); // Resetta gli slot disponibili se manca qualcosa
            }
        }
        fetchSlots();
    }, [selectedStation, selectedCategory, stations]);


    return (
        <div>
            <div className="pb-2">
                <h1 className="text-4xl text-center text-gray-800 font-bold">Parcheggia</h1>
            </div>
            <hr className="py-2" />
            <form action={reserveAction} className="flex flex-col">
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
                        {stations.map((station, index) => (
                            !station.isEliminated && station.isActive && (
                                <option key={index} value={String(station._id)}>
                                    {station.name}
                                </option>
                            )
                        ))}
                    </select>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                    <label className="font-semibold text-sm">Servizio</label>
                    <select
                        name="service"
                        className="h-10 px-4 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        required
                    >
                        <option value="" disabled>Seleziona il tuo servizio...</option>
                        <option value="sharing" hidden={!showOptions}>Sharing</option>
                        <option value="private" hidden={!showOptions}>Personale</option>
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
                        {availableSlots.map((slot) => (
                            <option key={slot?.id} value={slot?.id}>{slot?.originalIndex ? slot?.originalIndex + 1 : 0}</option>
                        ))}

                    </select>
                </div>
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
