import {Schema, Document} from 'mongoose';
import { Address, AddressSchema } from '../address/Address';
import { Slot, SlotSchema } from '../slot/Slot';
import { Report, ReportSchema } from '../report/Report';

export interface Station extends Document{
    name: string;
    address: Address;
    numSlots: number;
    state: 'active' | 'inactive' | 'reported';
    slotList: Slot[];
    reportList: Report[];
  }
  
  export const StationSchema = new Schema<Station>({
    name: { type: String, required: true },
    address: { type: AddressSchema, required: true },
    numSlots: { type: Number, required: true },
    state: { type: String, enum: ['active', 'inactive', 'reported'], required: true },
    slotList: { type: [SlotSchema], default: [] },
    reportList: { type: [ReportSchema], default: [] },
  });
  