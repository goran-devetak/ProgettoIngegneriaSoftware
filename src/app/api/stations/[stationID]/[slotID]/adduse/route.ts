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
    const { isBlocked, userId, service, timestamp } = await req.json();

    console.log(service)

    if (typeof isBlocked !== 'boolean') {
        return NextResponse.json({ error: 'Invalid state value, must be a boolean.' }, { status: 400 });
    }

    try {
        await dbConnect();

        // Controllo esistenza stazione
        const station = await StationModel.findById(stationID);
        if (!station) {
            return NextResponse.json({ error: 'Station not found.' }, { status: 404 });
        }

        // Controllo esistenza slot
        const slot = await SlotModel.findById(slotID).populate("uses");
        if (!slot) {
            return NextResponse.json({ error: 'Slot not found.' }, { status: 404 });
        }

        //se lo si sta sbloccando si controlli che l'utilizzo precedente (il blocco )
        if (!isBlocked) {
            const indexLastUse = slot.uses.length - 1
            if (!slot.bloccato) return NextResponse.json({
                error: 'Il posto è già sbloccato.'
            }, { status: 405 })
            if ((slot.category !== service) && (slot.category  !== 'free')) {
                return NextResponse.json({
                    error: 'Mismatch: category does not match slot category.'
                }, { status: 403 });
            }
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
        await slot.save();

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
