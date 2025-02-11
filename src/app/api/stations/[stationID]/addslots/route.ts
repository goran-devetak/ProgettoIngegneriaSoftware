import dbConnect from "@/app/lib/dbConnect";
import SlotModel from "@/app/lib/models/slot/Slot.model";
import StationModel from "@/app/lib/models/station/Station.model";
import { NextRequest, NextResponse } from "next/server";

type Context = {
    params: {
        stationID: string;
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

export async function POST(req: NextRequest, context: Context) {
    await dbConnect();
    try {
        const { stationID } = context.params;
        const { nSlots } = await req.json();

        if (!nSlots || nSlots <= 0) {
            return new Response(JSON.stringify({ error: 'Invalid number of slots' }), { status: 400 });
        }

        const slots = await SlotModel.insertMany(
            Array.from({ length: nSlots }, () => ({
                bloccato: false,
                isEliminated: false,
                category: 'free',
                uses: []
            }))
        );
        const slotIDs = slots.map(slot => String(slot._id));
        const station = await StationModel.findByIdAndUpdate(
            stationID,
            { $push: { slotList: { $each: slotIDs } } },
            { new: true }
        );

        if (!station) {
            return new Response(JSON.stringify({ error: 'Station not found' }), { status: 404 });
        }

        return new Response(JSON.stringify({ message: 'Slots created successfully', slots: slotIDs }), { status: 201 });
    } catch (err: any) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}
