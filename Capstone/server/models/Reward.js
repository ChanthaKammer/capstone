import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId

export const RewardSchema = new Schema({
    tournamentId: { type: ObjectId, required: true, ref: 'Tournament'},
    accountId: { type: ObjectId, required: false, ref: 'Account'},
    name: {type: String, required: true,},
    badge: {type: String },
    gpCoins: {type: Number},
    recipientId: {type: ObjectId, ref: 'Participant', required: false}
}, 
    {timestamps: true, toJSON: {virtuals: true}})


RewardSchema.virtual('tournament', {
    localField: 'tournamentId',
    foreignField: '_id',
    ref: 'Tournament',
    justOne: true
})

RewardSchema.virtual('participant', {
    localField: 'recipientId',
    foreignField: '_id',
    ref: 'Participant',
    justOne: true
})