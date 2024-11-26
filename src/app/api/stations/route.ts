import dbConnect from "@/app/lib/dbConnect";
import Parcheggio from "@/app/lib/models/Parcheggio";
import { NextResponse } from "next/server";


export async function GET(){
    await dbConnect();
    try{
        const parcheggi = await Parcheggio.find({});

        return NextResponse.json(parcheggi);
    }catch(err: any){
        return NextResponse.json({error: err.message})
    }

}