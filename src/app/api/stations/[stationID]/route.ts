import { NextResponse } from "next/server";
import StationModel from "@/app/lib/models/station/Station.model";
import mongoose from "mongoose";

export async function GET(req: Request, { params }: { params: { stationID: string } }) {
    try {
        // Ensure stationID is available
        const {stationID} = await params;
        if (!stationID || !mongoose.Types.ObjectId.isValid(stationID)) {
            return NextResponse.json(
                { success: false, error: "Invalid station ID" },
                { status: 400 }
            );
        }

        // Fetch the station by ID
        const station = await StationModel.findById(stationID);
        if (!station) {
            return NextResponse.json(
                { success: false, error: "Station not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, data: station });
    } catch (error) {
        console.error("Error fetching station:", error);
        return NextResponse.json(
            { success: false, error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
