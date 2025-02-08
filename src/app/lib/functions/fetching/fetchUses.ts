import { endOfDay, startOfDay } from "date-fns";
import { Use } from "../../models/use/Use";
import { URLS } from "@/app/constants";


export async function getUses(startDate?: Date, endDate?: Date): Promise<Use[] | undefined>{
    try{
        if(!endDate){
            endDate = new Date();
        }
        if(!startDate){
            startDate = new Date(0);
        }
        const start = getUnixTimeStamp(startDate);
        const end = getUnixTimeStamp(endDate);

        const res = await fetch(`${URLS.apis}/statistics?bottomTimeStamp=${start}&upperTimeStamp=${end}`, {
            method: "GET",
            cache: "no-store",
        });

        if(!res.ok){
            throw new Error("Failed to fetch uses");
        }
        return res.json();

    }catch (error){
        console.error("Error fetching uses", error);
        return undefined;
    }

}

const getUnixTimeStamp = (date: Date): number => {
    return Math.floor(date.getTime() /1000)
} 