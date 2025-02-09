import { Station } from "@/app/lib/models/station/Station";



const StationForm: React.FC<{ station: Station, hidden: Boolean }> = ({ station, hidden }) => {
    //const [slotNum, setSlotNum] = useState(1);
    if (hidden) return null
    return (
        <div>
            <div className="flex items-center justify-between" >
                <label htmlFor="slot" className="text-sm mx-4">Posto</label>
                <input
                    type="number"
                    name="slot"
                    id="slotNum"
                    min={1}
                    max={station.numSlots}
                // value={slotNum}
                //onChange={(e) => setSlotNum(parseInt(e.target.value) || 1)}
                />
            </div>
            <div className="flex items-center justify-between">
                <label htmlFor="slot" className="text-sm mx-4">Funzione</label>
                <input
                    type="text"
                    name="slotReservedTo"
                    id="slotRes"
                    //value={station.slotList[slotNum - 1]?.category || ""}
                    readOnly
                />
            </div>
        </div>
    );
};

export default StationForm;
