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
    const { reportID } = use(params); // <-- unwrap `params` con React.use()

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
    }, [reportID]);

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

    const handleSetInactive = () => {
        // Funzione per impostare la stazione come inattiva
    };


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
                <button onClick={handleSetInactive} className="font-bold py-2 px-4 rounded bg-red-500 text-white">
                    Imposta stazione inattiva
                </button>
                <ReportStateButton reportID={reportID} solving={true} stationID={station?._id} />
                <ReportStateButton reportID={reportID} solving={false} stationID={station?._id} />
            </div>
        </div>
    );
}
