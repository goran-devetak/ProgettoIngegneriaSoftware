import mongoose, { Model } from 'mongoose';
import { User, UserSchema } from './User';

const StationModel: Model<User> = mongoose.models.Station || mongoose.model<User>("User", UserSchema);
export default StationModel;