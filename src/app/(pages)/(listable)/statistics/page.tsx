import { Metadata } from "next";
import StatisticheClient from "@/app/components/statistics/StatisticheClient";
import { subDays } from "date-fns";
import { getRangeOption, RANGE_OPTIONS } from "@/app/lib/functions/statistics/rangeOptions";

export const metadata: Metadata = {
    title: "STATISTICHE",
};

export default function Statistiche({searchParams: {UtilizziRange}}: {searchParams:{
    UtilizziRange?: string
}}) {

    const utilizziRange = getRangeOption(UtilizziRange) ||
    RANGE_OPTIONS.utlima_settimana

    const startDate = utilizziRange.startDate
    const endDate = utilizziRange.endDate
    return (
        <div>
            <h1 className="text-6xl text-center text-gray-800 font-bold">
                {metadata.title?.toString()}
            </h1>
            <StatisticheClient 
                startDate={startDate ? new Date(startDate) : undefined} 
                endDate={endDate ? new Date(endDate) : undefined} 
            />
        </div>
    );
}
