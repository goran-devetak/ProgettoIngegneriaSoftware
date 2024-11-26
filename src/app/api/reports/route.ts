import dbConnect from "@/app/lib/dbConnect";
import Segnalazione from "@/app/lib/models/Segnalazione";
import { NextResponse } from "next/server";


export async function GET(){
    await dbConnect();
    try{
        const reports = await Segnalazione.find({});

        return NextResponse.json(reports);
    }catch(err: any){
        return NextResponse.json({error: err.message})
    }
}

