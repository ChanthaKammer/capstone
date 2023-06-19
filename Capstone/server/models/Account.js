import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const AccountSchema = new Schema(
  {
    subs: [{ type: String, unique: true }],
    email: { type: String, lowercase: true, unique: true },
    name: { type: String, required: true },
    picture: { type: String },
    gamerTag: { type: String,},
    gpBalance: { type: Number, required: true, default: 0},
    platforms: { type: [String]},
    bio: { type: String, maxLength: 500},
    coverImg: {type: String, maxLength: 500}
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

