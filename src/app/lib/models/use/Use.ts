import {Schema, Document} from 'mongoose';

export interface Use extends Document{
  userId: number;
  timestamp: number;
  isBlocked: boolean;
  isBooked: boolean;
  service: string;
}

export const UseSchema = new Schema<Use>({
  userId: { type: Number, required: true },
  timestamp: { type: Number, required: true },
  isBlocked: { type: Boolean, required: true },
  isBooked: { type: Boolean, required: true },
  service: { type: String, required: true },
});
