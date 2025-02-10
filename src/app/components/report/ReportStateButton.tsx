"use client";

import { useRouter } from "next/navigation";

interface ReportStateButtonProps {
    isSolved: boolean;
    reportID: string;
    stationID: string;
}

const updateReportCount = async (stationID: string, decrement: boolean) => {
    try {
        const response = await fetch(`/api/stations/${stationID}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ decrement, type: "updatecount" }),
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.error || 'Errore sconosciuto');
        }
    } catch (error) {
        console.error('Errore nell’aggiornamento:', error);
    }
};

const updateReport = async (reportID: string, currentIsSolved: boolean, stationID: string) => {
    const newIsSolved = !currentIsSolved; // Inverte il valore attuale

    try {
        const response = await fetch(`/api/reports/${reportID}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ isSolved: newIsSolved })
        });

        const data = await response.json();
        if (data.updated) {
            await updateReportCount(stationID, newIsSolved);
            window.location.reload();
        }
    } catch (error) {
        console.error('Errore durante l’aggiornamento del report:', error);
    }
};

export default function ReportStateButton({ isSolved, reportID, stationID }: ReportStateButtonProps) {
    return (
        <button
            onClick={() => updateReport(reportID, isSolved, stationID)}
            className={`font-bold py-2 px-4 rounded ${isSolved ? "bg-orange-500" : "bg-green-500"} text-white`}
        >
            {isSolved ? "Segna come non risolta" : "Segna come risolta"}
        </button>
    );
}
