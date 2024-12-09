import { Station } from "../models/station/Station";

export async function getAllStations(): Promise<Station[] | undefined> {
    try {
        const res = await fetch("http://localhost:3000/api/stations", {
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


export async function getStationByID(id: string): Promise<Station | undefined> {
    try {
        const res = await fetch(`http://localhost:3000/api/stations/${id}`, {
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
