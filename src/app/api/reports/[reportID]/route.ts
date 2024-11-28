import { NextResponse } from 'next/server';
import dbConnect from '@/app/lib/dbConnect';
import ReportModel from '@/app/lib/models/report/Report.model';

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
      const { state } = body;
  
      if (typeof state !== 'boolean') {
        return NextResponse.json({ error: 'State must be a boolean' }, { status: 400 });
      }
  
      const report = await ReportModel.findByIdAndUpdate(
        reportId,
        { state },
        { new: true }
      );
  
      if (!report) {
        return NextResponse.json({ error: 'Report not found' }, { status: 404 });
      }
  
      return NextResponse.json({
        id: report._id,
        state: report.state
      });
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }