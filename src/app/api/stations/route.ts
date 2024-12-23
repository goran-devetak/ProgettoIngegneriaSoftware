import dbConnect from "@/app/lib/dbConnect";
import StationModel from "@/app/lib/models/station/Station.model";
import { NextResponse } from "next/server";


export async function GET(req: Request){
    await dbConnect();
    try{
        const { searchParams } = new URL(req.url);
        
        const isActive = searchParams.get("isActive"); // parcheggio attivo/non attivo
        const reported = searchParams.get("reported"); // parcheggio segnalato/non segnalato

        const filter: any = {};
        if (isActive !== null) filter.isActive = isActive === "true"; // Confronta come booleano
        if (reported !== null) filter.reported = reported === "true"; //Greater Than/Equals
        
        const parcheggi = await StationModel.find(filter).select('-slotList');
        return NextResponse.json(parcheggi);
    }catch(err: any){
        return NextResponse.json({error: err.message})
    }
}

