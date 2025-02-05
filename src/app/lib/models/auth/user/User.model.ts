import mongoose, { Model } from 'mongoose';
import { User, UserSchema } from './User';

const UserModel: Model<User> = mongoose.models.User || mongoose.model<User>("User", UserSchema);
export default UserModel;