'use client';

import React, { useEffect, useState } from "react";
import { Report } from "../../lib/models/report/Report";
import Link from "next/link";
import { Station } from "@/app/lib/models/station/Station";
import { getStationByID } from "@/app/lib/functions/fetching/stationFunctions";

interface ReportCardProps {
    report: Report;
}

const ReportCardComponent: React.FC<ReportCardProps> = ({ report }) => {
    const { _id, description, timestamp, contacts, isSolved, title, stationId } = report;
    const [station, setStation] = useState<Station | null>(null);
    const col = "font-semibold " + (isSolved ? "text-mygreen" : "text-myred");

    useEffect(() => {
        const fetchStation = async () => {
            try {
                const data = await getStationByID(stationId);
                setStation(data || null);
            } catch (error) {
                console.error("Errore nel fetching della stazione:", error);
            }
        };

        fetchStation();
    }, [stationId]);

    return (
        <Link
            href={`./reports/${_id}`}
            className="rounded-md w-1/2 grid grid-cols-12 bg-white shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform"
        >
            <div className="col-span-10">
                <div className="flex space-x-1">
                    <p className="text-black font-bold">{station?.name || "Caricamento..."}</p>
                    <p className="text-gray-600 font-bold"> - {title}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-800 font-light">
                        {`${new Date(timestamp).toLocaleString()}`}
                    </p>
                </div>
                <div>
                    <div>Email: {contacts?.email ? contacts?.email : "/"}</div>
                    <div>Telefono: {contacts?.phone ? contacts?.phone : "/"}</div>
                </div>
                <div className="flex">
                    <p>Stato: </p>
                    <p className={col}>
                        {isSolved ? " Risolta" : " Non risolta"}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default ReportCardComponent;
