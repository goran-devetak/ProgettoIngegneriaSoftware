import { Station } from "@/app/lib/models/station/Station";
import StationCardComponent from "./StationCard";
import mongoose from 'mongoose';

interface StationListProps {
    stations: Station[];
}


const StationList: React.FC<StationListProps> = ({ stations }) => {

    let counter = 0;
    return (
        <div className="flex flex-col gap-4 items-center justify-center w-screen h-full max-w-9xl">
            {stations.map((station) => {
                return <StationCardComponent key={(station._id as mongoose.Types.ObjectId).toString()} station={station} />;
            })}
        </div>
    );
}


export default StationList;
