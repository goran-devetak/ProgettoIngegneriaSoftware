import { getReportByID } from "@/app/lib/functions/reportFunctions";
import { Report } from "@/app/lib/models/report/Report";

interface Props {
    params: { reportID: string };
}

export default async function StationPage({ params }: Props) {
    const { reportID } = await params;

    // Fetch the station data
    const report: Report | undefined = await getReportByID(reportID);

    // Handle not found or error cases
    if (!report) {
        return (
            <div className="py-5 text-center">
                <h1 className="text-3xl font-bold">Segnalazione non trovata</h1>
                <p className="text-gray-500">La segnalazione richiesta non esiste o non è disponibile.</p>
            </div>
        );
    }


    const path = report.photo ? report.photo : "../../placeholder.png";
    const email = report.contacts?.email ? report.contacts?.email : "/";
    const phone = report.contacts?.phone ? report.contacts?.phone : "/";

    return (
        <div className="flex flex-col items-center py-5">
            <h1 className="text-3xl font-bold">{report.title}</h1>
            <div className="flex py-10">
                <img src={path} className="w-96 rounded-xl" />
                <div className="px-5 content-center" >
                    <p className="text-lg font-semibold">{report.description}</p>
                    <div className="content text-base font-thin">
                        <p >Segnalato da:</p>
                        <p>Email: {email}</p>
                        <p>Telefono: {phone}</p>
                    </div>
                </div>
            </div>




            <div className="flex space-x-7 my-5">
                <button className="font-bold py-2 px-4 rounded bg-green-500 text-white">
                    Segna come risolta
                </button>
                <button className="font-bold py-2 px-4 rounded bg-red-500 text-white">
                    Segna come non risolta
                </button>
            </div>
        </div>
    );
}
