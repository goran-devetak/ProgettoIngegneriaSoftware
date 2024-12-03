import React from "react";
import { Report } from "../../lib/models/report/Report";
import Link from "next/link";


interface ReportCardProps {
    report: Report;
}

const ReportCardComponent: React.FC<ReportCardProps> = ({ report }) => {
    const { stationId, description, timestamp, contacts, _id, state } = report;
    return (
        <Link
            href={`./reports/${_id}`}
            className="rounded-md w-1/2 grid grid-cols-12 bg-white shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform"
        >
            <div className="col-span-10">
                <div className="flex space-x-1">
                    <p className="text-black font-bold">{stationId}</p>
                    <p className="text-gray-600 font-bold">{description}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-800 font-light">
                        {`${new Date(timestamp).toLocaleString()}`}
                    </p>
                </div>
                <div>
                    <div>{contacts?.email}</div>
                    <div>{contacts?.phone}</div>
                </div>
                <div>
                    <p>
                        Stato: 
                        {state ? " Risolta" : " Non risolta"}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default ReportCardComponent;
