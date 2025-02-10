"use client";

import { use, useState, useEffect } from "react";
import { getReportByID } from "@/app/lib/functions/fetching/reportFunctions";
import { getStationByID } from "@/app/lib/functions/fetching/stationFunctions";
import { Report } from "@/app/lib/models/report/Report";
import { Station } from "@/app/lib/models/station/Station";
import ReportStateButton from "@/app/components/report/ReportStateButton";

interface Props {
    params: Promise<{ reportID: string }>;
}

export default function ReportPage({ params }: Props) {
    const { reportID } = use(params);

    const [report, setReport] = useState<Report | undefined>(undefined);
    const [station, setStation] = useState<Station | undefined>(undefined);

    useEffect(() => {
        async function fetchData() {
            const fetchedReport = await getReportByID(reportID);
            setReport(fetchedReport);
            if (fetchedReport?.stationId) {
                const fetchedStation = await getStationByID(fetchedReport.stationId);
                setStation(fetchedStation);
            }
        }
        fetchData();
    }, []);

    if (!report) {
        return (
            <div className="py-5 text-center">
                <h1 className="text-3xl font-bold">Segnalazione non trovata</h1>
                <p className="text-gray-500">La segnalazione richiesta non esiste o non è disponibile.</p>
            </div>
        );
    }

    const path = report.photo || "../../placeholder.png";
    const email = report.contacts?.email || "/";
    const phone = report.contacts?.phone || "/";

    const stationID: string = String(station?._id)

    return (
        <div className="flex flex-col items-center py-5">
            <h1 className="text-3xl font-bold">{station?.name || "stazione"} - {report.title}</h1>
            <div className="flex py-10">
                <img src={path} className="w-96 rounded-xl" alt="Report" />
                <div className="px-5 content-center">
                    <p className="text-lg font-semibold">{report.description}</p>
                    <p className={"font-semibold " + (report.isSolved ? "text-mygreen" : "text-myred")}>{report.isSolved ? " Risolta" : " Non risolta"}</p>
                    <div className="content text-base font-thin">
                        <p>Segnalato da:</p>
                        <p>Email: {email}</p>
                        <p>Telefono: {phone}</p>
                    </div>
                </div>
            </div>
            <div className="flex space-x-7 my-5">
                <a href={`/stations/${stationID}`}>
                    <button type="button"> Vai al parcheggio </button>
                </a>
                <ReportStateButton reportID={reportID} isSolved={report.isSolved} stationID={stationID} />
            </div>
        </div>
    );
}
