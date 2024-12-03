import dbConnect from "@/app/lib/dbConnect";
import ReportModel from "@/app/lib/models/report/Report.model";
import StationModel from "@/app/lib/models/station/Station.model";
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

      const { description, photo, contacts, stationID } = await req.json();

      const newReport = new ReportModel({
        description,
        photo,
        contacts,
        state: false,
      });

      const updatedStation = await StationModel.findByIdAndUpdate(
        stationID,
        {$push: {reportList: newReport}},
        {new: true}
      );

      if (!updatedStation) {
        return NextResponse.json(
          { success: false, message: 'Station not found' },
          { status: 404 }
        );
      }
  
      await newReport.save();

      return NextResponse.json(
        {
          success: true,
          stationID: updatedStation._id,
          reportList: updatedStation.reportList,
        },
        {status: 200}
      );
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }

