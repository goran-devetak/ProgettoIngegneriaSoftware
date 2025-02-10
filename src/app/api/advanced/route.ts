import { NextResponse } from 'next/server';
import dbConnect from '@/app/lib/dbConnect';
import StationModel from '@/app/lib/models/station/Station.model';


export async function POST(req: Request) {
  await dbConnect();

  try {
    const { name, address, numSlots, state, reported } = await req.json();

    const newStation = new StationModel({
      name:name,
      address:address,
      numSlots: numSlots,
      state:state,
      reported:reported,
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
