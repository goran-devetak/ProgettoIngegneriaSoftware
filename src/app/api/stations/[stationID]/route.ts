import { NextResponse } from "next/server";
import StationModel from "@/app/lib/models/station/Station.model";
import mongoose from "mongoose";
import dbConnect from "@/app/lib/dbConnect";
import SlotModel from "@/app/lib/models/slot/Slot.model";

export async function GET(req: Request, { params }: { params: { stationID: string } }) {
    try {
        const {stationID} = await params;
        if (!stationID || !mongoose.Types.ObjectId.isValid(stationID)) {
            return NextResponse.json(
                { success: false, error: "Invalid station ID" },
                { status: 400 }
            );
        }

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

export async function POST(req: Request, { params }: { params: { stationID: string } }) {
  await dbConnect();

  try {
    const {stationID} = await params;
    const { category } = await req.json();

    if (!['free', 'sharing', 'private'].includes(category)) {
      return NextResponse.json(
        { success: false, message: 'Invalid slot category' },
        { status: 400 }
      );
    }

    const newSlot = new SlotModel({
      category,
      bloccato: true,
    });

    newSlot.save();

    const updatedStation = await StationModel.findByIdAndUpdate(
      stationID,
      { $push: { slotList: newSlot } },
      { new: true }
    );

    if (!updatedStation) {
      return NextResponse.json(
        { success: false, message: 'Station not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        stationId: updatedStation._id,
        slotList: updatedStation.slotList,
      },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}

