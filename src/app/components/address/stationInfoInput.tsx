interface StationInfoInputsProps {
    className?: string;
}

export default function StationInfoInputs({ className }: StationInfoInputsProps) {
    return (
        <div className={`flex justify-between ${className}`}>
            <div className="flex flex-col">
                <label>Nome parcheggio</label>
                <input
                    type="text"
                    className="px-4 py-2 w-60 border sm:text-sm border-gray-300 rounded-md text-gray-600 focus:outline-none"
                    placeholder="Inserisci nome parcheggio..."
                    name="stationName"
                    required
                />
            </div>
            <div className="flex flex-col">
                <label>Posti</label>
                <input
                    type="number"
                    min={0}
                    max={10}
                    name="slotsNum"
                    className="px-4 py-2 w-28 border sm:text-sm border-gray-300 rounded-md text-gray-600 focus:outline-none"
                    placeholder="# Posti"
                    required
                />
            </div>
        </div>
    );
}