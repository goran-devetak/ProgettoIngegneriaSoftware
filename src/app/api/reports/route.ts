import dbConnect from "@/app/lib/dbConnect";
import ReportModel from "@/app/lib/models/report/Report.model";
import { NextResponse } from "next/server";


export async function GET(){
    await dbConnect();
    try{
        const reports = await ReportModel.find({});
        return NextResponse.json(reports);
    }catch(err: any){
        return NextResponse.json({error: err.message})
    }
}


export async function POST(req: Request) {
    try {
      await dbConnect();

      const { description, photo, contacts } = await req.json();
  
      const newReport = new ReportModel({
        description,
        photo,
        contacts,
        state: false,
      });
  
      await newReport.save();

      return NextResponse.json({ message: 'New report created successfully', report: newReport });
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }

