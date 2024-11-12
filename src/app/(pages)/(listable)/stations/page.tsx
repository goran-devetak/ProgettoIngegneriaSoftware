import { Metadata } from "next"
import StationList from "@/app/components/station/StationList"
import { data } from "@/app/models/StationData";


export const metadata: Metadata = {
    title: "Parcheggi"
}

const upperLimit = 5;
const lowerLimit = 0;

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



