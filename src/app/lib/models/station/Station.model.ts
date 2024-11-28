import mongoose, {Model} from 'mongoose';
import { Station, StationSchema } from './Station';

const StationModel: Model<Station> = mongoose.models.Station || mongoose.model<Station>("Station", StationSchema);
export default StationModel;