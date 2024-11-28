import {Schema, Document} from 'mongoose';

export interface Use extends Document{
  userId: number;
  timestamp: number;
  service: string;
}

export const UseSchema = new Schema<Use>({
  userId: { type: Number, required: true },
  timestamp: { type: Number, required: true },
  service: { type: String, required: true },
});
