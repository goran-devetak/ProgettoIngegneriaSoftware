import { NextResponse } from 'next/server';
import dbConnect from '@/app/lib/dbConnect';
import StationModel from '@/app/lib/models/station/Station.model';
import UseModel from '@/app/lib/models/use/Use.model';
import SlotModel from '@/app/lib/models/slot/Slot.model';
import { Slot } from '@/app/lib/models/slot/Slot';

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

export async function PATCH(req: Request, { params }: { params: { stationID: string, slotID: string, isBlocked: boolean } }) {
  const { stationID, slotID } = params;
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

    // Creazione del nuovo "Use"
    const newUse = new UseModel({
      isBlocked,
      userId,
      service,
      timestamp,
      stationID
    });

    await newUse.save();

    // Aggiorna lo slot con il nuovo stato e aggiungi l'uso
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
  slotList.forEach((slot)=>{
    console.log(slot.buffer)
  })
  //console.log(String(slotList[0].buffer as mongoose.Types.ObjectId))
}


