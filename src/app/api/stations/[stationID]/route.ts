import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/app/lib/dbConnect';
import StationModel from '@/app/lib/models/station/Station.model';
import SlotModel from '@/app/lib/models/slot/Slot.model';
import mongoose from 'mongoose';

export async function GET(req: NextRequest, { params }: { params: { stationID: string } }) {
  await dbConnect();

  try {
    const stationId = params.stationID;

    const station = await StationModel.findById(stationId);

    if (!station) {
      return NextResponse.json(
        { success: false, message: 'Station not found' },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        success: true,
        data: station, 
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

export async function PATCH(req: Request, { params }: { params: { stationID: string } }) {
  await dbConnect();

  try {
    const stationId = params.stationID;

    const { state } = await req.json();

    if (!['active', 'inactive', 'reported'].includes(state)) {
      return NextResponse.json(
        { success: false, message: 'Invalid state value' },
        { status: 400 }
      );
    }

    const updatedStation = await StationModel.findByIdAndUpdate(
      stationId,
      { state },
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
        id: updatedStation._id,
        state: updatedStation.state,
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

export async function POST(req: Request, { params }: { params: { stationID: string } }) {
    await dbConnect();
  
    try {
      const stationId = params.stationID;
  
      const { category } = await req.json();
  
      if (!['free', 'sharing', 'private'].includes(category)) {
        return NextResponse.json(
          { success: false, message: 'Invalid slot category' },
          { status: 400 }
        );
      }
  
      const newSlot = new SlotModel({
        category,
        state: true,
      });
  
      const updatedStation = await StationModel.findByIdAndUpdate(
        stationId,
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