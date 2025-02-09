import { Station } from "@/app/lib/models/station/Station";
import StationCardComponent from "./StationCard";
import mongoose from 'mongoose';

interface StationListProps {
    stations: Station[];
}


const StationList: React.FC<StationListProps> = ({ stations }) => {

    return (
        <div className="flex flex-col gap-4 items-center justify-center w-screen h-full max-w-9xl">
            {
                stations.length > 0 ? stations.map((station) => {
                    if (!station.isEliminated) {
                        return <StationCardComponent key={(station._id as mongoose.Types.ObjectId).toString()} station={station} />;
                    }
                }) : <div className="text-xl">Nessana segnalazione disponibile</div>

            }
        </div>
    );
}


export default StationList;
