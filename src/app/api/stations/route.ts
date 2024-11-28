import dbConnect from "@/app/lib/dbConnect";
import StationModel from "@/app/lib/models/station/Station.model";
import { NextResponse } from "next/server";


export async function GET(){
    await dbConnect();
    try{
        const parcheggi = await StationModel.find({});

        return NextResponse.json(parcheggi);
    }catch(err: any){
        return NextResponse.json({error: err.message})
    }
}

