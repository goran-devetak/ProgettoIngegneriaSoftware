import dbConnect from '@/app/lib/dbConnect';
import UseModel from '@/app/lib/models/use/Use.model';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
    await dbConnect();
    try {
        const { userId, timestamp, isBlocked, service, stationID } = await req.json();

        // Validazione base
        if (!userId || !timestamp || isBlocked === undefined || !service || !stationID) {
            return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
        }

        // Creazione della nuova entry
        const newUse = await UseModel.create({ userId, timestamp, isBlocked, service, stationID });

        return new Response(JSON.stringify({ message: 'Use entry created successfully', use: newUse, success: true }), { status: 201 });
    } catch (err: any) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}
