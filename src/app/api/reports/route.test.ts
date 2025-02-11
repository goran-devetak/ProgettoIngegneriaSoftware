import { NextRequest, NextResponse } from "next/server";
import { GET } from "./route";
import dbConnect from "@/app/lib/dbConnect";
import ReportModel from "@/app/lib/models/report/Report.model";

jest.mock("@/app/lib/dbConnect", () => jest.fn());
jest.mock("@/app/lib/models/report/Report.model", () => ({
  find: jest.fn(),
  save: jest.fn(),
}));
jest.mock("@/app/lib/models/station/Station.model", () => ({
  findByIdAndUpdate: jest.fn(),
}));

jest.mock("next/server", () => ({
  NextRequest: jest.fn(),
  NextResponse: {
    json: jest.fn(),
  },
}));

describe("GET /api/reports", () => {
  // GET
  it("visualizzazione segnalazioni in modo corretto", async () => {
    const mockReports = [
      {
        _id: "1",
        title: "Report 1",
        description: "Description 1",
        isSolved: false,
        timestamp: Date.now(),
        stationId: "station123",
      },
    ];

    const mockUrl = "http://localhost/api/reports?isSolved=true&timestamp=123&stationId=station123";
    const mockRequest = {
      url: mockUrl,
    } as unknown as NextRequest;

    (dbConnect as jest.Mock).mockResolvedValueOnce({});

    (ReportModel.find as jest.Mock).mockResolvedValueOnce(mockReports);

    const response = await GET(mockRequest);

    expect(NextResponse.json).toHaveBeenCalledWith(mockReports, { status: 200 });
  });

  // GET
  it("visualizzare una lista vuota di segnalazioni", async () => {
    const mockUrl = "http://localhost/api/reports?isSolved=false";
    const mockRequest = {
      url: mockUrl,
    } as unknown as NextRequest;

    (dbConnect as jest.Mock).mockResolvedValueOnce({});

    (ReportModel.find as jest.Mock).mockResolvedValueOnce([]);

    const response = await GET(mockRequest);

    expect(NextResponse.json).toHaveBeenCalledWith(
      { message: "No reports found", reports: [] },
      { status: 200 }
    );
  });
});
