import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/app/lib/dbConnect';
import ReportModel from '@/app/lib/models/report/Report.model';

//richiede le informazioni della singola segnalazione

type Context = {
  params: {
    reportID: string;
    then: <TResult1 = any, TResult2 = never>(
      onfulfilled?: ((value: any) => TResult1 | PromiseLike<TResult1>) | null | undefined,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined
    ) => Promise<TResult1 | TResult2>;
    catch: <TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null | undefined
    ) => Promise<any>;
    finally: (onfinally?: (() => void) | null | undefined) => Promise<any>;
    [Symbol.toStringTag]: string;
  }
}

export async function GET(
  req: NextRequest,
  context: Context
) {
  try {
    await dbConnect();
    const reportId = context.params.reportID;
    const report = await ReportModel.findById(reportId);

    if (!report) {
      return NextResponse.json({ error: 'Report not found' }, { status: 404 });
    }

    return NextResponse.json(report);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest, context: Context) {
  const reportID = (context.params.reportID);
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


