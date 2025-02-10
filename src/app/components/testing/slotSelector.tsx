
export function SlotSelector({ availableSlots }: { availableSlots: { id: string, originalIndex: number }[] }) {
    return (
        <div className="flex flex-col gap-2 mt-4">
            <label className="font-semibold text-sm">Posto</label>
            <select
                name="slot"
                className="h-10 px-4 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                defaultValue={""}
                required
            >
                <option value="" disabled> Seleziona un posto...</option>
                {availableSlots.map((slot) => (
                    <option key={slot?.id} value={slot?.id}>{slot?.originalIndex ? slot?.originalIndex + 1 : 1}</option>
                ))}
            </select>
        </div>
    );
}
