import Link from "next/link";
import { Station } from "../../models/schema/Station";
import clsx from "clsx";

interface StationCardProps {
    station: Station;
}

const StationCardComponent: React.FC<StationCardProps> = ({ station }) => {
    const { state, name, address, numSlots, id } = station;

    const colorMap: { [key: string]: { color: string; text: string } } = {
        Active: { color: "text-green-600", text: "Attivo" },
        Inactive: { color: "text-red-600", text: "Non attivo" },
        Default: { color: "text-orange-600", text: "Segnalato" }
    };

    const { color, text } = colorMap[state] || colorMap.Default;

    return (
        <Link
            href={`./stations/${id}`}
            className="rounded-md w-1/2 grid grid-cols-12 bg-white shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform"
        >
            <div className="col-span-10">
                <div className="flex space-x-1">
                    <p className="text-gray-600 font-bold">{name}:</p>
                    <p className={clsx("font-semibold", color)}>{text}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-800 font-light">
                        {`${address.stAddress}, ${address.stNumber} (${address.cap})`}
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
