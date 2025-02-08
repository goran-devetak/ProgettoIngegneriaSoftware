import {Schema, Document} from 'mongoose';

export interface Use extends Document{
  userId: number;
  timestamp: number;
  isBlocked: boolean;
  service: string;
  stationID: number;
}

export const UseSchema = new Schema<Use>({
  userId: { type: Number, required: true },
  timestamp: { type: Number, required: true },
  isBlocked: { type: Boolean, required: true },
  service: { type: String, required: true },
  stationID: {type: Number, required: true}
});
