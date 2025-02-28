import { NextRequest, NextResponse } from "next/server";
import StationModel from "@/app/lib/models/station/Station.model";
import mongoose from "mongoose";
import dbConnect from "@/app/lib/dbConnect";
import SlotModel from "@/app/lib/models/slot/Slot.model";

type Context = {
  params: {
    stationID: string;
    then: <TResult1 = any, TResult2 = never>(
      onfulfilled?: ((value: any) => TResult1 | PromiseLike<TResult1>) | null | undefined,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined
    ) => Promise<TResult1 | TResult2>;
    catch: <TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null | undefined
    ) => Promise<any>;
    finally: (onfinally?: (() => void) | null | undefined) => Promise<any>;
    [Symbol.toStringTag]: string;
  }
}

export async function GET(req: NextRequest, context: Context) {
  try {
    const { stationID } = context.params;
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

export async function POST(req: NextRequest, context: Context) {
  await dbConnect();

  try {
    const { stationID } = context.params;
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
      reportCount: 0
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

export async function PATCH(req: NextRequest, context: Context) {
  const { stationID } = context.params;
  const { type, decrement, activating } = await req.json();

  try {
    await dbConnect();

    if (!mongoose.Types.ObjectId.isValid(stationID)) {
      return NextResponse.json({ error: "Invalid station ID" }, { status: 400 });
    }

    const station = await StationModel.findById(stationID).lean();
    if (!station) {
      return NextResponse.json({ error: "Station not found." }, { status: 404 });
    }

    let updatedStation;

    if (type === "updatecount") {
      if (typeof decrement !== "boolean") {
        return NextResponse.json({ error: "Invalid decrement value, must be a boolean." }, { status: 400 });
      }

      const newReportCount = Math.max(0, station.reportCount + (decrement ? -1 : 1));
      updatedStation = await StationModel.findByIdAndUpdate(
        stationID,
        { $set: { reportCount: newReportCount, reported: newReportCount > 0 } },
        { new: true, runValidators: true }
      );
    } else if (type === "updatestate") {
      if (typeof activating !== "boolean") {
        return NextResponse.json({ error: "Invalid activating value, must be a boolean." }, { status: 400 });
      }

      if (station.isActive !== activating) {
        updatedStation = await StationModel.findByIdAndUpdate(
          stationID,
          { $set: { isActive: activating } },
          { new: true, runValidators: true }
        );
      } else {
        return NextResponse.json({ message: "No change needed, state already set." });
      }
    } else if (type === "delete") {
      updatedStation = await StationModel.findByIdAndUpdate(
        stationID,
        { $set: { isEliminated: true, isActive: false } },
        { new: true, runValidators: true }
      );
    } else {
      return NextResponse.json({ error: "Invalid type value" }, { status: 400 });
    }

    return NextResponse.json({ message: "Station updated", station: updatedStation });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
