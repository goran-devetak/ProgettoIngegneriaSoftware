import { NextRequest, NextResponse } from 'next/server';
import { GET} from './route';
import dbConnect from '@/app/lib/dbConnect';
import StationModel from '@/app/lib/models/station/Station.model';

jest.mock('mongoose', () => ({
  connect: jest.fn(),
  connection: {
    on: jest.fn(),
    readyState: 1,
  },
}));

jest.mock('@/app/lib/dbConnect', () => jest.fn());

jest.mock('@/app/lib/models/station/Station.model', () => ({
  find: jest.fn(),
  constructor: jest.fn().mockImplementation(() => ({
    save: jest.fn(),
  })),
}));

jest.mock('next/server', () => ({
  NextRequest: jest.fn(),
  NextResponse: {
    json: jest.fn(),
  },
}));


describe('GET and POST /api/stations', () => {
  // GET
  it('visualizzazione parcheggi in modo corretto', async () => {
    const mockUrl = 'http://localhost/api/stations?isEliminated=false';
    const mockRequest = {
      url: mockUrl,
    } as unknown as NextRequest;

    (dbConnect as jest.Mock).mockResolvedValueOnce({}); 
    (StationModel.find as jest.Mock).mockResolvedValueOnce([{ name: 'Station 1', isEliminated: false }]);

    await GET(mockRequest);

    expect(NextResponse.json).toHaveBeenCalledWith([{ name: 'Station 1', isEliminated: false }]);
  });
});
