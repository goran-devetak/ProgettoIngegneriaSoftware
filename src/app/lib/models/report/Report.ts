import { Schema, Document } from 'mongoose';

export interface Report extends Document {
  stationId:string;
  state: boolean;
  description: string;
  photo?: string;
  timestamp: number;
  contacts?: {
    email?: string;
    phone?: number;
  };
}

export const ReportSchema = new Schema<Report>({
  stationId:{type:String, required:true},
  state: { type: Boolean, required: true },
  description: { type: String, required: true },
  photo: { type: String, required: false },
  timestamp: { type: Number, required: true },
  contacts: {
    email: { type: String, required: true },
    phone: { type: Number, required: true },
  },
});
