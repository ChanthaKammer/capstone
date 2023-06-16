import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId

export const ParticipantSchema = new Schema({
    tournamentId: { type: ObjectId, required: true, ref: 'Tournament'},
    accountId: { type: ObjectId, required: true, ref: 'Account'},
    status: { type: String, required: true, enum: ['eliminated', 'active', 'first', 'second', 'third'], default: 'active'},
    moderator: { type: Boolean, required: true, default: false},
},
    {timestamps: true, toJSON: {virtuals: true}}
)

ParticipantSchema.index({ tournamentId: 1, accountId: 1}, { unique: true})

ParticipantSchema.virtual('profile', {
    localField: 'accountId',
    foreignField: '_id',
    ref: 'Account',
    justOne: true
})

ParticipantSchema.virtual('tournament', {
    localField: 'tournamentId',
    foreignField: '_id',
    ref: 'Tournament',
    justOne: true
})