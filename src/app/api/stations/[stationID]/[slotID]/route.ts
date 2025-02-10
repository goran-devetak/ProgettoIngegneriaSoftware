import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/app/lib/dbConnect';
import StationModel from '@/app/lib/models/station/Station.model';
import mongoose from 'mongoose';
import UseModel from '@/app/lib/models/use/Use.model';
import SlotModel from '@/app/lib/models/slot/Slot.model';
import { Slot } from '@/app/lib/models/slot/Slot';

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

type PatchContext = Context & {
 params: {
   isBlocked: boolean;
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

export async function PATCH(req: NextRequest, context: PatchContext) {
 const { stationID, slotID } = context.params;
 const { isBlocked, userId, service, timestamp } = await req.json();
 
 if (typeof isBlocked !== 'boolean') {
   return NextResponse.json({ error: 'Invalid state value, must be a boolean.' }, { status: 400 });
 }

 try {
   await dbConnect();
   const station = await StationModel.findById(stationID);
   if (!station) {
     return NextResponse.json({ error: 'Station not found.' }, { status: 404 });
   }

   const slot = findSlot(station.slotList, slotID)
   if (!slot) {
     return NextResponse.json({ error: 'Slot not found.' }, { status: 404 });
   }

   const newUse = new UseModel({
     isBlocked,
     userId,
     service,
     timestamp,
     stationID
   });
   await newUse.save();

   slot.bloccato = isBlocked;
   slot.uses.push(newUse);
   await station.save();

   return NextResponse.json({
     id: slot._id,
     bloccato: slot.bloccato,
     newUse,
     uses: slot.uses,
   });
 } catch (err: any) {
   return NextResponse.json({ error: err.message }, { status: 500 });
 }
}

function findSlot(slotList: Slot[], slotID: string) {
 return slotList.find(slot => String(slot._id) === slotID);
}