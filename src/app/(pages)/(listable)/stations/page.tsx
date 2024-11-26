import { Metadata } from "next"
import StationList from "@/app/components/station/StationList"
import { data } from "@/app/models/StationData";


export const metadata: Metadata = {
    title: "Parcheggi"
}

const upperLimit = 5;
const lowerLimit = 0;

/*
export default function StaitionDiv() {
    return (
        <div>
            <h1 className="py-5 text-4xl text-center font-bold"> Lista parcheggi</h1>
            {
                <StationList stations={data} lowerLimit={0} upperLimit={5} />
            }
        </div>
    );
}
*/

export default async function StationDiv(){
    const fetchParcheggi = async() => {
        const res = await fetch("http://localhost:3000/api/stations");
        const parcheggi = await res.json();
        return parcheggi;
    }

    const parcheggi = await fetchParcheggi();

    return (
        <div>
            <h1>Parcheggi</h1>
            {parcheggi.map((parcheggio: any) => (
                <div key={parcheggio._id}>
                    <h2>{parcheggio.nome}</h2>
                    <p>{parcheggio.numPosti}</p>
                </div>
            ))}
        </div>
    )
}


