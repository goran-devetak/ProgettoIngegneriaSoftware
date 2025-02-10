import { Metadata } from "next";
import StatisticheClient from "@/app/components/statistics/StatisticheClient";
import { getRangeOption, RANGE_OPTIONS } from "@/app/lib/functions/statistics/rangeOptions";

export const metadata: Metadata = {
    title: "STATISTICHE",
};

interface StatisticheProps {
    searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function Statistiche({ searchParams }: StatisticheProps) {
    const resolvedSearchParams = await searchParams;
    const UtilizziRange = typeof resolvedSearchParams.UtilizziRange === "string" 
        ? resolvedSearchParams.UtilizziRange 
        : undefined;

    const utilizziRange = getRangeOption(UtilizziRange) || RANGE_OPTIONS.utlima_settimana;

    return (
        <div>
            <h1 className="text-6xl text-center text-gray-800 font-bold">
                {metadata.title?.toString()}
            </h1>
            <StatisticheClient 
                startDate={utilizziRange.startDate ? new Date(utilizziRange.startDate) : undefined} 
                endDate={utilizziRange.endDate ? new Date(utilizziRange.endDate) : undefined} 
            />
        </div>
    );
}
