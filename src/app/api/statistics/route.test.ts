import { NextRequest, NextResponse } from "next/server";
import { GET } from "./route"; 
import dbConnect from "@/app/lib/dbConnect";
import UseModel from "@/app/lib/models/use/Use.model";

jest.mock("@/app/lib/dbConnect", () => jest.fn());
jest.mock("@/app/lib/models/use/Use.model", () => ({
  find: jest.fn(),
}));

jest.mock("next/server", () => ({
  NextRequest: jest.fn(),
  NextResponse: {
    json: jest.fn(),
  },
}));

describe("GET /api/statistics", () => {
  it("visualizzare le statistiche in maniera corretta in base ai timestamp", async () => {
    const mockUses = [
      {
        _id: "1",
        timestamp: 1609459200000,
        useDetails: "Test use 1",
      },
      {
        _id: "2",
        timestamp: 1612137600000,
        useDetails: "Test use 2",
      },
    ];

    const mockUrl = "http://localhost/api/statistics?bottomTimeStamp=1609459200000&upperTimeStamp=1612137600000";
    const mockRequest = {
      url: mockUrl,
    } as unknown as NextRequest;

    (dbConnect as jest.Mock).mockResolvedValueOnce({});

    (UseModel.find as jest.Mock).mockResolvedValueOnce(mockUses);

    await GET(mockRequest);

    expect(NextResponse.json).toHaveBeenCalledWith(mockUses, { status: 200 });
  });

  it("visualizzare una lista vuota di utilizzi", async () => {
    const mockUrl = "http://localhost/api/statistics?bottomTimeStamp=1609459200000&upperTimeStamp=1612137600000";
    const mockRequest = {
      url: mockUrl,
    } as unknown as NextRequest;

    (dbConnect as jest.Mock).mockResolvedValueOnce({});

    (UseModel.find as jest.Mock).mockResolvedValueOnce([]);

    await GET(mockRequest);

    expect(NextResponse.json).toHaveBeenCalledWith(
      { message: "No uses found" },
      { status: 200 }
    );
  });
  it("ritorna tutti gli utilizzi, se nessun timestamp viene specificato", async () => {
    const mockUses = [
      {
        _id: "1",
        timestamp: 1609459200000,
        useDetails: "Test use 1",
      },
    ];

    const mockUrl = "http://localhost/api/statistics";
    const mockRequest = {
      url: mockUrl,
    } as unknown as NextRequest;

    (dbConnect as jest.Mock).mockResolvedValueOnce({});

    (UseModel.find as jest.Mock).mockResolvedValueOnce(mockUses);

    await GET(mockRequest);

    expect(NextResponse.json).toHaveBeenCalledWith(mockUses, { status: 200 });
  });
});
