import dbConnect from "@/app/lib/dbConnect";
import SlotModel from "@/app/lib/models/slot/Slot.model";
import StationModel from "@/app/lib/models/station/Station.model";
import UseModel from "@/app/lib/models/use/Use.model";
import { NextRequest, NextResponse } from "next/server";

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

export async function PATCH(req: NextRequest, context: Context) {
    const { stationID, slotID } = context.params;
    const { isBlocked, service } = await req.json();


    if (typeof isBlocked !== 'boolean') {
        return NextResponse.json({ error: 'Invalid state value, must be a boolean.' }, { status: 400 });
    }

    try {
        await dbConnect();
        const station = await StationModel.findById(stationID);
        if (!station) {
            return NextResponse.json({ error: 'Station not found.' }, { status: 404 });
        }

        const slot = await SlotModel.findById(slotID)
        if (!slot) {
            return NextResponse.json({ error: 'Slot not found.' }, { status: 404 });
        }

        slot.bloccato = isBlocked;
        slot.category = service;
        await slot.save();

        return NextResponse.json({
            id: slot._id,
            bloccato: slot.bloccato,
            category: slot.category
        });
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
