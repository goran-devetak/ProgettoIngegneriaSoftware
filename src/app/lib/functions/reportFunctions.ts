import { Report } from "../models/report/Report";
import {URLS} from "../../constants"

export async function getAllStations(): Promise<Report[] | undefined> {
    try {
        const res = await fetch(URLS.apis+"/reports", {
            method: "GET",
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch reports");
        }
        return res.json(); // Call res.json() to resolve the response
    } catch (error) {
        console.error("Error fetching reports:", error);
        return undefined; // Return undefined on failure
    }
};


export async function getReportByID(id: string): Promise<Report | undefined> {
    try {
        const res = await fetch(URLS.apis+`/reports/${id}`, {
            method: "GET",
            cache: "no-store",
        });

        if (!res.ok) {
            console.error(`Failed to fetch report with id ${id}:`, res.statusText);
            return undefined;
        }

        const data = await res.json();

        return data;
    } catch (error) {
        console.error(`Error fetching report with id ${id}:`, error);
        return undefined;
    }
};
