import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/app/lib/dbConnect';
import StationModel from '@/app/lib/models/station/Station.model';
import SlotModel from '@/app/lib/models/slot/Slot.model';

type Context = {
  params: {
    stationID: string;
    slotID: string;
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
  await dbConnect();
  try {
    const { stationID, slotID } = context.params;
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



