import { NextResponse } from 'next/server';
import dbConnect from '@/app/lib/dbConnect';
import ReportModel from '@/app/lib/models/report/Report.model';

//richiede le informazioni della singola segnalazione
export async function GET(req: Request, { params }: { params: { reportID: string } }) {
  try {
    await dbConnect();

    const reportId = params.reportID;

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
    try {
      await dbConnect();
  
      const reportId = params.reportID;
  
      const body = await req.json();
      const { isSolved } = body;
  
      if (typeof isSolved !== 'boolean') {
        return NextResponse.json({ error: 'isSolved must be a boolean' }, { status: 400 });
      }
  
      const report = await ReportModel.findByIdAndUpdate(
        reportId,
        { isSolved },
        { new: true }
      );
  
      if (!report) {
        return NextResponse.json({ error: 'Report not found' }, { status: 404 });
      }
  
      return NextResponse.json({
        id: report._id,
        isSolved: report.isSolved
      });
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }