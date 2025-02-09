import { NextResponse } from 'next/server';
import dbConnect from '@/app/lib/dbConnect';
import ReportModel from '@/app/lib/models/report/Report.model';
import StationModel from '@/app/lib/models/station/Station.model';

//richiede le informazioni della singola segnalazione
export async function GET(req: Request, { params }: { params: { reportID: string } }) {
  try {
    await dbConnect();

    const prm = await params;
    const reportId = prm.reportID
    const report = await ReportModel.findById(reportId);

    if (!report) {
      return NextResponse.json({ error: 'Report not found' }, { status: 404 });
    }

    return NextResponse.json(report);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(req: Request, { params }: { params: { reportID: string } }) {
  const { reportID } = params;
  const { isSolved } = await req.json();
  let changed: boolean = false;

  if (typeof isSolved !== 'boolean') {
    return NextResponse.json({ error: 'Invalid isSolved value, must be a boolean.' }, { status: 400 });
  }

  try {
    await dbConnect();
    const report = await ReportModel.findById(reportID);
    if (!report) {
      return NextResponse.json({ error: 'Report not found.' }, { status: 404 });
    }

    if (report.isSolved !== isSolved) {
      report.isSolved = isSolved;
      changed = true
      await report.save();
    }

    return NextResponse.json({ message: 'Report updated', report, updated: changed });
  } catch (err: any) {
    return NextResponse.json({ error: err.message, updated: changed }, { status: 500 });
  }
}


