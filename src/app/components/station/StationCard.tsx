import Link from "next/link";
import {Station} from "@/app/lib/models/station/Station";
import clsx from "clsx";
interface StationCardProps {
    station: Station;
}

const StationCardComponent: React.FC<StationCardProps> = ({ station }) => {
    const { isActive, reported, name, address, numSlots, _id } = station;

    let color, text;

    if(!isActive){
        color = "text-myred";
        text = "Non attivo";
    }else if(reported){
        color = "text-myorange";
        text = "Segnalato";
    }else{
        color = "text-mygreen";
        text = "Attivo";
    }

    return (
        <Link
            href={`./stations/${_id}`}
            className="rounded-md w-1/2 grid grid-cols-12 bg-white shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform"
        >
            <div className="col-span-10">
                <div className="flex space-x-1">
                    <p className="font-bold">{name}:</p>
                    <p className={clsx("font-semibold", color)}>{text}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-800 font-light">
                        {`${address.street}, ${address.number} (${address.zipCode})`}
                    </p>
                </div>
            </div>
            <div className="md:col-start-13 col-span-11 xl:-ml-5">
                <p>{numSlots} posti</p>
            </div>
        </Link>
    );
}

export default StationCardComponent;
