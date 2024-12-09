import dbConnect from "@/app/lib/dbConnect";
import ReportModel from "@/app/lib/models/report/Report.model";
import StationModel from "@/app/lib/models/station/Station.model";
import { NextResponse } from "next/server";


export async function GET(req: Request){
    await dbConnect();
    try{
      const { searchParams } = new URL(req.url);
      const isSolved = searchParams.get("isSolved"); // Risolto o non risolto
      const timestamp = searchParams.get("timestamp"); // Timestamp minimo
      const stationId = searchParams.get("stationId"); // ID della stazione

      // Creazione del filtro in base ai parametri forniti
      const filter: any = {};
      if (isSolved !== null) filter.isSolved = isSolved === "true"; // Confronta come booleano
      if (timestamp !== null) filter.timestamp = { $gte: Number(timestamp) }; //Greater Than/Equals
      if (stationId !== null) filter.stationId = stationId;

      const reports = await ReportModel.find(filter).select('-description -photo -contacts');

      // Controllo per array vuoto
      if (reports.length === 0) {
          return NextResponse.json(
              { message: "No reports found", reports: [] },
              { status: 200 }
          );
      }

      // Risposta con i risultati
      return NextResponse.json(reports, { status: 200 });
    }catch(err: any){
        return NextResponse.json({error: err.message})
    }
}


export async function POST(req: Request) {
    try {
      await dbConnect();

      const { title, description, photo, timestamp, contacts, stationId } = await req.json();

      const newReport = new ReportModel({
        title,
        description,
        photo,
        timestamp,
        contacts,
        stationId,
        isSolved: false,
      });

      const updatedStation = await StationModel.findByIdAndUpdate(
        stationId,
        {reported: true},
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
        },
        {status: 200}
      );
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }

