import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId

export const RewardSchema = new Schema({
    tournamentId: { type: ObjectId, required: true, ref: 'Tournament'},
    accountId: { type: ObjectId, required: false},
    name: {type: String, required: true,},
    badge: {type: String, required: true, },
    gpCoins: {type: Number, required: true, default: 0},
    recipientId: {type: ObjectId, ref: 'Participant', required: false}
}, 
    {timestamps: true, toJSON: {virtuals: true}})

    RewardSchema.index({ tournamentId: 1, accountId: 1}, { unique: true})

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