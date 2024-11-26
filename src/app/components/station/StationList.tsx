import { Station } from "../../models/schema/Station";
import StationCardComponent from "./StationCard";

interface StationListProps {
    stations: Station[];
    lowerLimit: number;
    upperLimit: number;
}

const StationList: React.FC<StationListProps> = ({ stations, lowerLimit, upperLimit }) => {
    let counter = 0;
    return (
        <div className="flex flex-col gap-4 items-center justify-center w-screen h-full max-w-9xl">
            {stations.map((station) => {
                if (counter < upperLimit) {
                    counter++;
                    return <StationCardComponent key={station.id} station={station} />;
                }
                return null;
            })}
        </div>
    );
}


export default StationList;
