import { NextResponse } from 'next/server';
import dbConnect from '@/app/lib/dbConnect';
import StationModel from '@/app/lib/models/station/Station.model';
import { Station } from '@/app/lib/models/station/Station';


export async function POST(req: Request) {
  await dbConnect();

  try {
    const { name, address, num_slots, state } = await req.json();

    if (!name || !address || num_slots === undefined || !state) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const newStation = new StationModel({
      name,
      address,
      numSlots: num_slots,
      state,
      slotList: [],
      reportList: [], 
    });

    await newStation.save();

    return NextResponse.json(
      {
        success: true,
        data: newStation,
      },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json(
      {
        success: false,
        error: err.message,
      },
      { status: 500 }
    );
  }
}
