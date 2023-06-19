import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId

export const RewardSchema = new Schema({
    tournamentId: { type: ObjectId, required: true, ref: 'Tournament'},
    accountId: { type: ObjectId, required: true, ref: 'Account'},
    name: {type: String, required: true,},
    badge: {type: String },
    gpCoins: {type: Number}
}, 
    {timestamps: true, toJSON: {virtuals: true}})


RewardSchema.virtual('account', {
    localField: 'accountId',
    foreignField: '_id',
    ref: 'Account',
    justOne: true
})

RewardSchema.virtual('tournament', {
    localField: 'tournamentId',
    foreignField: '_id',
    ref: 'Tournament',
    justOne: true
})