import { Station } from "@/app/lib/models/station/Station";
import {getStationByID} from "@/app/lib/functions/stationFunctions";
interface Props {
    params: { stationID: string };
}



export default async function StationPage({ params }: Props) {
    const{stationID} = await params;

    // Fetch the station data
    const station: Station | undefined = await getStationByID(stationID);

    // Handle not found or error cases
    if (!station) {
        return (
            <div className="py-5 text-center">
                <h1 className="text-3xl font-bold">Parcheggio non trovato</h1>
                <p className="text-gray-500">Il parcheggio richiesto non esiste o non è disponibile.</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center py-5">
            <h1 className="text-3xl font-bold">{station.name}</h1>
            <p className="text-sm">{`${station.address.street}, ${station.address.number} (${station.address.zipCode})`}</p>
            <p className="text-sm">{station.numSlots} posti</p>
            <div className="flex space-x-7 my-5">
                <button className="font-bold py-2 px-4 rounded bg-blue-500 text-white">
                    Assegna posti
                </button>
            </div>
        </div>
    );
}
