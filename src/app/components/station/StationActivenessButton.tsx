"use client";


interface StationActivenessButtonProps {
    stationID: string;
    initialActive: boolean;
    disabled: boolean
}

const updateStationState = async (state: boolean, stationID: string) => {
    try {
        const response = await fetch(`/api/stations/${stationID}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ activating: state, type: "updatestate" }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Errore sconosciuto");
        }

        window.location.reload();
    } catch (error) {
        console.error("Errore nell'aggiornamento della stazione:", error);
    }
};


export default function StationActivenessButton({ stationID, initialActive, disabled }: StationActivenessButtonProps) {
    const handleClick = async () => {
        await updateStationState(!initialActive, stationID);
    };

    if (disabled) {
        return (
            <button
                className={`font-bold py-2 px-4 rounded bg-gray-400 text-white cursor-not-allowed`}
            >
                {!initialActive ? "Segna come attiva" : "Segna come inattiva"}
            </button>
        )
    }

    return (
        <button
            onClick={handleClick}
            className={`font-bold py-2 px-4 rounded ${!initialActive ? "bg-green-500" : "bg-red-500"} text-white`}
        >
            {!initialActive ? "Segna come attiva" : "Segna come inattiva"}
        </button>
    );
}
