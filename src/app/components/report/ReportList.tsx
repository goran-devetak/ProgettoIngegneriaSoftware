'use client';

import { useEffect, useState } from "react";
import { Report } from "@/app/lib/models/report/Report";
import mongoose from "mongoose";
import ReportCardComponent from "./ReportCard";
import { getAllReports } from "@/app/lib/functions/fetching/reportFunctions";

const ReportList = () => {
    const [reports, setReports] = useState<Report[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchReports = async () => {
            try {
                const data = await getAllReports();
                if (data) setReports(data);
            } catch (err) {
                console.error("Errore nel fetching dei report:", err);
                setError("Errore nel caricamento delle segnalazioni.");
            } finally {
                setLoading(false);
            }
        };
        fetchReports();
    }, []);

    if (loading) {
        return <div className="flex flex-col gap-4 items-center justify-center text-xl">Caricamento in corso...</div>;
    }

    if (error) {
        return <div className=" flex flex-col gap-4 items-center justify-cente text-xl text-red-500">{error}</div>;
    }

    return (
        <div className="flex flex-col gap-4 items-center justify-center w-screen h-full max-w-9xl">
            {reports.length > 0 ? (
                reports.map((report) => (
                    <ReportCardComponent
                        key={String(report._id)}
                        report={report}     
                    />
                ))
            ) : (
                <div className="text-xl">Nessuna segnalazione disponibile</div>
            )}
        </div>
    );
};

export default ReportList;
