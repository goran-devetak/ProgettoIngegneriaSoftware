import { NextResponse } from 'next/server';
import dbConnect from '@/app/lib/dbConnect';
import StationModel from '@/app/lib/models/station/Station.model';
import mongoose, { mongo } from 'mongoose';

export async function GET(req: Request, { params }: { params: { stationID: string, slotID: string } }) {
  await dbConnect();

  try {
    const { stationID, slotID } = params;

    const station = await StationModel.findById(stationID);

    if (!station) {
      return NextResponse.json(
        { success: false, message: 'Station not found' },
        { status: 404 }
      );
    }

    const slot = station.slotList.find((slot) => (slot._id as mongoose.Types.ObjectId).toString() === slotID);

    if (!slot) {
      return NextResponse.json(
        { success: false, message: 'Slot not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, slot },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request, { params }: { params: { stationID: string, slotID: string } }) {
    const { stationID, slotID } = params;
  
    const stationId = stationID;
    const slotId = slotID;
  
    const { state } = await req.json();
  
    if (typeof state !== 'boolean') {
      return NextResponse.json({ error: 'Invalid state value, must be a boolean.' }, { status: 400 });
    }
  
    try {
      await dbConnect();
  
      const station = await StationModel.findById(stationId);
  
      if (!station) {
        return NextResponse.json({ error: 'Station not found.' }, { status: 404 });
      }
  
      const slot = station.slotList.find((slot) => (slot._id as mongoose.Types.ObjectId).toString() === slotId);
  
      if (!slot) {
        return NextResponse.json({ error: 'Slot not found.' }, { status: 404 });
      }
  
      slot.state = state;
  
      await station.save();
  
      return NextResponse.json({
        id: slot._id,
        state: slot.state,
      });
    } catch (err: any) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
  }