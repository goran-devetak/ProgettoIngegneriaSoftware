"use client"
import { Station } from "@/app/lib/models/station/Station";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type ServiceType = 'free' | 'private' | 'sharing';

const serviceLabels: Record<ServiceType, string> = {
    'free': 'Libero',
    'private': 'Personale',
    'sharing': 'Sharing'
};

const StationForm: React.FC<{ station: Station }> = ({ station }) => {
    const [availableSlots, setAvailableSlots] = useState<{ id: any; originalIndex: number; service: ServiceType; bloccato: boolean }[]>([]);
    const [selectedSlot, setSelectedSlot] = useState("");
    const [selectedService, setSelectedService] = useState<ServiceType>('free');
    const [selectedBloccato, setSelectedBloccato] = useState<boolean>(false);
    const [defaultService, setDefaultService] = useState<ServiceType>('free');
    const [defaultBloccato, setDefaultBloccato] = useState<boolean>(false);

    useEffect(() => {
        fetchSlots(station, setAvailableSlots);
    }, [station]);

    useEffect(() => {
        const selectedSlotData = availableSlots.find(slot => slot.id === selectedSlot);
        if (selectedSlotData) {
            setSelectedService(selectedSlotData.service);
            setSelectedBloccato(selectedSlotData.bloccato);
            setDefaultService(selectedSlotData.service);
            setDefaultBloccato(selectedSlotData.bloccato);
        }
    }, [selectedSlot, availableSlots]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const stationID = station._id

        try {
            const response = await fetch(`/api/stations/${stationID}/${selectedSlot}/patchslot`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    stationId: stationID,
                    slotId: selectedSlot,
                    isBlocked: selectedBloccato,
                    service: selectedService
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Errore durante l'aggiornamento del posto");
            }

            window.location.reload()
            return data;
        } catch (error) {
            console.error("Errore nell'aggiornare il posto:", error);
            return null;
        }
    };

    const isChanged = selectedSlot !== "" &&
        (selectedService !== defaultService || selectedBloccato !== defaultBloccato);

    const getSelectStyle = (currentValue: any, defaultValue: any) => {
        const baseStyle = "h-10 px-4 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400";
        return currentValue !== defaultValue && currentValue !== ""
            ? `${baseStyle} border-2 border-red-500`
            : baseStyle;
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 my-5">
            <select
                name="slot"
                id="slotSelect"
                value={selectedSlot}
                onChange={(e) => setSelectedSlot(e.target.value)}
                className="h-10 px-4 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
                <option value="" disabled>Seleziona posto</option>
                {availableSlots.map((slot, index) => (
                    <option key={index} value={slot.id}>
                        Posto {index + 1}
                    </option>
                ))}
            </select>

            <select
                name="service"
                id="servSelect"
                value={selectedService ? selectedService : ""}
                onChange={(e) => setSelectedService(e.target.value as ServiceType)}
                className={getSelectStyle(selectedService, defaultService)}
                disabled={!selectedSlot}
            >
                <option value="" disabled>Seleziona servizio</option>
                <option value="free">Libero</option>
                <option value="private">Personale</option>
                <option value="sharing">Sharing</option>
            </select>

            <select
                name="bloccato"
                id="bloccatoSelect"
                value={selectedBloccato.toString()}
                onChange={(e) => setSelectedBloccato(e.target.value === "true")}
                className={getSelectStyle(selectedBloccato, defaultBloccato)}
                disabled={!selectedSlot}
            >
                <option value="" disabled>Seleziona stato</option>
                <option value="true">Bloccato</option>
                <option value="false">Non bloccato</option>
            </select>

            <button
                type="submit"

                disabled={!isChanged}
                className={` h-10 rounded ${isChanged
                    ? 'bg-orange-400 hover:bg-orange-500 text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
            >
                Salva modifiche
            </button>
        </form>
    );
};

export default StationForm;

export async function fetchSlots(
    station: Station,
    setAvailableSlots: Dispatch<SetStateAction<{ id: any; originalIndex: number; service: ServiceType; bloccato: boolean }[]>>
) {
    if (station) {
        const resolvedSlots: { id: any; originalIndex: number; service: ServiceType; bloccato: boolean }[] = []
        try {
            for (let i = 0; i < station.slotList.length; i++) {
                const slotID = station.slotList[i];
                const res = await fetch(`/api/stations/${station._id}/${slotID}`);
                const data = await res.json();
                if (data.success) {
                    resolvedSlots.push({
                        id: slotID,
                        originalIndex: i,
                        service: data.slot.category as ServiceType,
                        bloccato: data.slot.bloccato
                    });
                }
            }
            setAvailableSlots(resolvedSlots);
        } catch (error) {
            console.error("Errore nel reperire informazioni sui posti", error);
        }
    } else {
        setAvailableSlots([]);
    }
}