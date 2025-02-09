"use client";

import { UsesByDateChart } from "@/app/(pages)/(listable)/statistics/charts/UsesByDate";
import { getUses } from "@/app/lib/functions/fetching/fetchUses";
import { RANGE_OPTIONS } from "@/app/lib/functions/statistics/rangeOptions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

interface StatisticheClientProps {
    startDate?: Date;
    endDate?: Date;
    label?: string;
}

async function getChartData(startDate?: Date, endDate?: Date) {
    const data = await getUses(startDate, endDate);
    if (data) {
        const dayCounts: Record<string, number> = data.reduce((acc, item) => {
            const date = new Date(item.timestamp * 1000).toISOString().split("T")[0];
            acc[date] = (acc[date] || 0) + 1;
            return acc;
        }, {} as Record<string, number>);

        return Object.entries(dayCounts)
            .map(([date, count]) => ({
                date,
                value: count,
            }))
            .sort((a, b) => (a.date < b.date ? -1 : 1));
    }
    return [];
}

export default function StatisticheClient({ startDate, endDate, label}: StatisticheClientProps) {
    const [chartData, setChartData] = useState<{ date: string; value: number }[]>([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getChartData(startDate, endDate);
            setChartData(data);
        }
        fetchData();
    }, [startDate, endDate]);

    return (
    <ChartCard title="Utilizzi totali" queryKey="UtilizziRange">
        <UsesByDateChart data={chartData}/>
    </ChartCard>
    );
}

type ChartCardProps = {
    title: string
    children: ReactNode
    queryKey: string
}

function ChartCard({title, children, queryKey}: ChartCardProps){
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    function setRange(range: keyof typeof RANGE_OPTIONS){
        const params = new URLSearchParams(searchParams)
        params.set(queryKey, range)
        router.push(`${pathname}?${params.toString()}`, {scroll: false})
    }

    return (
    <Card className="bg-white text-black shadow-md rounded-lg mt-10 mx-24">
        <CardHeader>
            <div className="flex gap-4 justify-between items-center">
            <CardTitle className="text-gray-800 text-3xl font-bold"> {title} </CardTitle>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">Seleziona il range</Button>
                </DropdownMenuTrigger>  
                <DropdownMenuContent className="bg-white shadow-lg p-2">
                    {Object.entries(RANGE_OPTIONS).map(([key, value]) => (
                        <DropdownMenuItem onClick={() => setRange(key as keyof typeof RANGE_OPTIONS)}
                         key={key} className="hover:bg-gray-100">
                            {value.label}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
            </div>
        </CardHeader>
        <CardContent>
            {children}
        </CardContent>
    </Card>
    )
}
