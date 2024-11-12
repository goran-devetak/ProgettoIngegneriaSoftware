import { Station } from "@/app/models/schema/Station";
import { data } from "@/app/models/StationData";

interface Props {
    params: {
        stationID: number
    }
}
export const metadata = {
    title: 'Info Parcheggio',
}

function getStation(id: number): Station | null {
    return data.find(station => station.id == id) || null;
}

export default async function StationPage({ params }: Props) {
    const { stationID } = await params;
    const station = getStation(stationID);
    if (!station) throw new Error("Errore nel caricare la stazione");
    return (
        <div className="flex flex-col items-center py-5">
            <h1 className="text-3xl font-bold">{station.name}</h1>
            <p className="text-sm">{`${station.address.stAddress}, ${station.address.stNumber} (${station.address.cap})`}</p>
            <p className="text-sm">{station.numSlots} posti</p>
            <div className="flex space-x-7 my-5">
                <button className="font-bold py-2 px-4 rounded bg-blue-500 " >Assegna posti</button>
                <button type="button" className="font-bold py-2 px-4 rounded bg-orange-500">Visualizza segnalazioni</button>
            </div>
        </div>


    )
}

