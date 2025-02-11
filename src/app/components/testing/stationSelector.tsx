import { Station } from "@/app/lib/models/station/Station";
import { Dispatch, SetStateAction } from "react";

interface StationSelectorParams {
    stations: Station[]
    selectedStationID: string
    setSelectedStation: Dispatch<SetStateAction<string>>
}

export function StationSelector({ stations, selectedStationID, setSelectedStation }: StationSelectorParams) {
    return (
        <div className="flex flex-col gap-2 mt-4">
            <label className="font-semibold text-sm">Parcheggio</label>
            <select
                name='station'
                className="h-10 px-4 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                id="station"
                value={selectedStationID}
                onChange={(e) => setSelectedStation(e.target.value)}
            >
                <option value="" disabled>Seleziona un parcheggio...</option>
                {stations.map((station, index) => (
                    (
                        <option key={index} value={String(station._id)}>
                            {station.name}
                        </option>
                    )
                ))}
            </select>
        </div>
    );
}