import { Report } from "@/app/lib/models/report/Report";
import mongoose, { mongo } from 'mongoose';
import ReportCardComponent from "./ReportCard";

interface ReportListProps {
    reports: Report[];
}


const ReportList: React.FC<ReportListProps> = ({ reports}) => {

    let counter = 0;
    return (
        <div className="flex flex-col gap-4 items-center justify-center w-screen h-full max-w-9xl">
            {reports.map((report) => {
                return <ReportCardComponent key={(report._id as mongoose.Types.ObjectId).toString()} report={report} />;
            })}
        </div>
    );
}


export default ReportList;
