import dbConnect from "@/app/lib/dbConnect";
import UseModel from "@/app/lib/models/use/Use.model";
import { NextResponse } from "next/server";


export async function GET(req: Request, {params}: {params: {bottomTimeStamp: number, upperTimeStamp: number}}){
    await dbConnect();
    try{
        const url = new URL(req.url);
        const bottomTimeStamp = url.searchParams.get("bottomTimeStamp")
        const upperTimeStamp = url.searchParams.get("upperTimeStamp")
        const filter: any = {};
        if(bottomTimeStamp !== null && upperTimeStamp !== null){
            filter.timestamp = {$gte: Number(bottomTimeStamp), $lte: Number(upperTimeStamp)}
        }

        const uses = await UseModel.find(filter);

        if(uses.length === 0){
            return NextResponse.json({message: "No uses found"}, {status: 200})
        }
        return NextResponse.json(uses, {status: 200})
    }catch(err: any){
        return NextResponse.json({error: err.message})
    }
}
