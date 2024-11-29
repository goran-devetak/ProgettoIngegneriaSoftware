import { Station } from "@/app/lib/models/station/Station";

interface Props {
    params: { stationID: string };
}

export const getStation = async (id: string): Promise<Station | undefined> => {
    try {
        const res = await fetch(`http://localhost:3000/api/stations/${id}`, {
            method: "GET",
            cache: "no-store",
        });

        if (!res.ok) {
            console.error(`Failed to fetch station with id ${id}:`, res.statusText);
            return undefined;
        }

        const data = await res.json();
        return data.success ? data.data : undefined;
    } catch (error) {
        console.error(`Error fetching station with id ${id}:`, error);
        return undefined;
    }
};


export default async function StationPage({ params }: Props) {
    const{stationID} = await params;

    // Fetch the station data
    const station: Station | undefined = await getStation(stationID);

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
