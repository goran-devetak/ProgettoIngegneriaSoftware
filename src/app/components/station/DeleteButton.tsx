"use client";


interface DeleteButtonProps {
    stationID: string;
    disabled: boolean;
}

const deleteStation = async (stationID: string) => {
    try {
        const response = await fetch(`/api/stations/${stationID}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ type: "delete" }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Errore sconosciuto");
        }

        window.location.href = window.location.pathname.split('/').slice(0, -1).join('/') || '/';
    } catch (error) {
        console.error("Errore nell'aggiornamento della stazione:", error);
    }
};


export default function DeleteButton({ stationID, disabled }: DeleteButtonProps) {
    const handleClick = async () => {
        await deleteStation(stationID);
    };

    if (disabled) {
        return (
            <button
                className={`font-bold py-2 px-4 rounded bg-gray-400 text-white cursor-not-allowed`}
            >
                Elimina stazione
            </button>
        )
    }

    return (
        <button
            onClick={handleClick}
            className={`font-bold py-2 px-4 rounded bg-red-800 text-white`}
        >
            Elimina stazione
        </button>
    );
}
