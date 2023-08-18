import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  username: String,
  phoneNumber: String,
  email: String,
  name: String,
  dateOfBirth: Date,
});
