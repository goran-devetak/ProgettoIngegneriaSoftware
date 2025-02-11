interface AddressDetailsProps {
    city: string;
    setCity: (value: string) => void;
    cap: string;
    setCap: (value: string) => void;
}

export default function AddressDetails({
    city,
    setCity,
    cap,
    setCap
}: AddressDetailsProps) {
    return (
        <div className="flex justify-between">
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <label className="leading-loose">Civico</label>
                    <input
                        name="stNum"
                        type="text"
                        min={0}
                        max={200}
                        className="px-4 py-2 border w-28 sm:text-sm border-gray-300 rounded-md text-gray-600 focus:outline-none"
                        required
                    />
                </div>
            </div>
            <div className="flex flex-col">
                <label className="leading-loose">Città</label>
                <input
                    name="city"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="px-4 py-2 border w-28 sm:text-sm border-gray-300 rounded-md text-gray-600 focus:outline-none"
                    required
                />
            </div>
            <div className="flex flex-col">
                <label className="leading-loose">CAP</label>
                <input
                    name="zipcode"
                    type="text"
                    value={cap}
                    onChange={(e) => setCap(e.target.value)}
                    className="px-4 py-2 border w-28 sm:text-sm border-gray-300 rounded-md text-gray-600 focus:outline-none"
                    required
                />
            </div>
        </div>
    );
}
