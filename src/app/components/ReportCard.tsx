import React from "react";
import { StationReport } from '../models/StationReport'

interface ReportCardProps {
    report: StationReport;
}

const ReportCardComponent: React.FC<ReportCardProps> = ({ report }) => {
    const { descrizione, timestamp, contatto } = report;
    return (
        <div className="bg-white shadow p-4 rounded-md space-y-3">
            <h2 className="font-semibold text-lg">{descrizione}</h2>
            <p className="text-gray-600 text-sm">
                <strong>Data segnalazione:</strong> {timestamp.toLocaleString()}
            </p>
            <p className="text-gray-600 text-sm">
                <strong>Contatto:</strong> {contatto.mail} | {contatto.telefono}
            </p>
        </div>
    );
};

export default ReportCardComponent;
