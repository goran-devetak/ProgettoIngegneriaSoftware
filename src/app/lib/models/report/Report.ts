import { Schema, Document } from 'mongoose';

export interface Report extends Document {
  stationId:string;
  title: string;
  isSolved: boolean; //risolta/non risolta
  description: string;
  photo?: string;
  timestamp: number;
  contacts?: {
    type: {
      email?: string;
      phone?: number;
    }
  };
}

export const ReportSchema = new Schema<Report>({
  stationId: { type: String, required: true },
  title: { type: String, required: true },
  isSolved: { type: Boolean, required: true },
  description: { type: String, required: true },
  photo: { type: String, required: false },
  timestamp: { type: Number, required: true },

  contacts: {
    type: {
      email: { type: String, required: false },
      phone: { type: Number, required: false }
    },
    required: true
  }
});
