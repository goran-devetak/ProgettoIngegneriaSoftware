import {Schema, Document} from 'mongoose';

export interface Report extends Document{
    state: boolean;
    description: string;
    photo?: string;
    contacts?: {
      email?: string;
      phone?: number;
    };
  }
  
  export const ReportSchema = new Schema<Report>({
    state: { type: Boolean, required: true },
    description: { type: String, required: true },
    photo: { type: String, required: false},
    contacts: {
      email: { type: String },
      phone: { type: Number },
    },
  });
  