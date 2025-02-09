import { Station } from "../../models/station/Station";
import { URLS } from "../../../constants"
import { Slot } from "../../models/slot/Slot";

export async function getAllStations(): Promise<Station[] | undefined> {
    try {
        const res = await fetch(URLS.apis + "/stations", {
            method: "GET",
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch stations");
        }
        return res.json(); // Call res.json() to resolve the response
    } catch (error) {
        console.error("Error fetching stations:", error);
        return undefined; // Return undefined on failure
    }
};

export async function getSlotByID(stationID: string, slotID: string): Promise<Slot | undefined> {
    try {
        const res = await fetch(URLS.apis + `/stations/${stationID}/${slotID}`, {
            method: "GET",
        });

        if (!res.ok) {
            console.error(`Failed to fetch slot with id ${slotID}:`, res.statusText);
            return undefined;
        }

        const data = await res.json();
        return data.success ? data.data : undefined;
    } catch (error) {
        console.error(`Error fetching slot with id ${slotID}:`, error);
        return undefined;
    }
}

export async function getStationByID(id: string): Promise<Station | undefined> {
    try {
        const res = await fetch(URLS.apis + `/stations/${id}`, {
            method: "GET",
            cache: "no-store",
        });

        if (!res.ok) {
            console.error(`Failed to fetch station with id ${id}:`, res.statusText);
            return undefined;
        }

        const data = await res.json();
        return data.success ? data.data : undefined;
    } catch (error) {
        console.error(`Error fetching station with id ${id}:`, error);
        return undefined;
    }
};
