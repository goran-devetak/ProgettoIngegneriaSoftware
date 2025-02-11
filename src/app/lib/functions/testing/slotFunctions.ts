import { Dispatch, SetStateAction } from "react";
import { Station } from "../../models/station/Station";

export async function fetchSlots(
    selectedStationID: string,
    selectedCategory: string,
    stations: Station[],
    setAvailableSlots: Dispatch<SetStateAction<{ id: any; originalIndex: number }[]>>,
    reserving: boolean
) {
    if (selectedStationID && selectedCategory) {
        const station = stations.find(st => st._id === selectedStationID);
        if (station && station.slotList) {
            try {
                const slotPromises = station.slotList.map(async (slot, index) => {
                    const res = await fetch(`/api/stations/${station._id}/${slot}`);
                    const data = await res.json();

                    if (data.success) {
                        const isAvailable = !data.slot.bloccato && (data.slot.category === selectedCategory || data.slot.category === 'free');
                        const isBlocked = data.slot.bloccato;

                        if ((reserving && isAvailable) || (!reserving && isBlocked)) {
                            return { id: data.slot._id, originalIndex: index };
                        }
                    }
                    return null;
                });

                const resolvedSlots = await Promise.all(slotPromises);
                setAvailableSlots(resolvedSlots.filter(slot => slot !== null));
            } catch (error) {
                console.error("Errore nel reperire informazioni sui posti", error);
            }
        }
    } else {
        setAvailableSlots([]);
    }
}
