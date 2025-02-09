
interface ReportStateButtonProps {
    solving: boolean;
    reportID: string;
    stationID: string
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());


const updateReportCount = async (stationID: string, decrement: boolean) => {
    try {
        const response = await fetch(`/api/stations/${stationID}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ decrement }),
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.error || 'Errore sconosciuto');
        }
    } catch (error) {
        console.error('Errore nell’aggiornamento:', error);
    }
};

const updateReport = async (reportID: string, isSolved: boolean, stationID: string) => {
    const response = await fetch(`/api/reports/${reportID}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ isSolved })
    });

    const data = await response.json();
    if (data.updated) {
        updateReportCount(stationID, isSolved)
    }

}

export default function ReportStateButton(props: ReportStateButtonProps) {
    const { reportID, solving, stationID } = props
    return (
        <button
            onClick={() => { updateReport(reportID, solving, stationID) }}
            className={`font-bold py-2 px-4 rounded ${solving ? "bg-green-500" : "bg-orange-500"} text-white`}
        >
            {solving ? "Segna come risolta" : "Segna come non risolta"}
        </button>
    );
}


