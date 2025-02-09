import { NextResponse } from 'next/server';
import dbConnect from '@/app/lib/dbConnect';
import StationModel from '@/app/lib/models/station/Station.model';
import mongoose, { mongo } from 'mongoose';
import UseModel from '@/app/lib/models/use/Use.model';
import SlotModel from '@/app/lib/models/slot/Slot.model';

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

    const slot = await SlotModel.findById(slotID)

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

  const { bloccato, userId, service, timestamp } = await req.json();

  if (typeof bloccato !== 'boolean') {
    return NextResponse.json({ error: 'Invalid state value, must be a boolean.' }, { status: 400 });
  }

  try {
    await dbConnect();

    const newUse = new UseModel({
      userId,
      service,
      timestamp,
    });

    await newUse.save();

    const station = await StationModel.findById(stationID);

    if (!station) {
      return NextResponse.json({ error: 'Station not found.' }, { status: 404 });
    }

    const slot = station.slotList.find((slot) => (slot._id as mongoose.Types.ObjectId).toString() === slotID);

    if (!slot) {
      return NextResponse.json({ error: 'Slot not found.' }, { status: 404 });
    }

    slot.bloccato = bloccato;
    slot.uses.push(newUse);

    await station.save();

    return NextResponse.json({
      id: slot._id,
      bloccato: slot.bloccato,
      uses: slot.uses,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
