import dbConnect from "@/app/lib/dbConnect";
import StationModel from "@/app/lib/models/station/Station.model";
import { NextResponse } from "next/server";


export async function GET(req: Request) {
    await dbConnect();
    try {
        const { searchParams } = new URL(req.url);

        const isActive = searchParams.get("isActive"); // parcheggio attivo/non attivo
        const reported = searchParams.get("reported"); // parcheggio segnalato/non segnalato

        const filter: any = {};
        if (isActive !== null) filter.isActive = isActive === "true"; // Confronta come booleano
        if (reported !== null) filter.reported = reported === "true"; //Greater Than/Equals

        const parcheggi = await StationModel.find(filter);
        return NextResponse.json(parcheggi);
    } catch (err: any) {
        return NextResponse.json({ error: err.message })
    }
}



export async function POST(req: Request) {
    await dbConnect();

    try {
        const { name, address, numSlots, isActive, isEliminated, reported, slotList, reportCount } = await req.json();

        if (!name || !address || typeof numSlots !== 'number') {
            return NextResponse.json(
                { success: false, message: 'Missing required fields' },
                { status: 400 }
            );
        }

        const newStation = new StationModel({
            name,
            address,
            numSlots,
            isActive,
            isEliminated,
            reported,
            slotList,
            reportCount,
        });

        await newStation.save();

        return NextResponse.json(
            { success: true, station: newStation },
            { status: 201 }
        );
    } catch (err: any) {
        return NextResponse.json(
            { success: false, error: err.message },
            { status: 500 }
        );
    }
}
