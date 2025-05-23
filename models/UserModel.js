import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  password: { type: String, required: true },
  accesstoken: { type: String, required: true },
  role: {type: String, required:true},
  secretToken:{type: String},
});

const User = mongoose.model('User', userSchema);
export default User;
