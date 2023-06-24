import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId
export const TournamentSchema = new Schema({
    creatorId: { type: ObjectId, required: true, ref: 'Account'},
    name: { type: String, required: true, maxLength: 100, minLength: 3},
    description: {type: String, required: true, maxLength: 1500, minLength: 10},
    coverImg: { type: String, required: true, maxLength: 500},
    location: { type: String, required: true, maxLength: 200},
    capacity: { type: Number, required: true},
    totalRounds: {type: Number, required: true},
    currentRound: {type: Number, required: true, default: 1},
    startDate: { type: Date, required: true},
    isCancelled: { type: Boolean, required: true, default: false},
    isFinished: {type: Boolean, required: true, default: false},
    type: { type: String, required: true, enum: ['local', 'online']},
    gameSlug: { type: String, required: true},
    gameName: { type: String, required: true},
    gameImg: { type: String, required: true},
    started:{ type: Boolean, required: true, default: false}
},
    { timestamps: true, toJSON: {virtuals: true}}
)

TournamentSchema.virtual('creator', {
    localField: 'creatorId',
    foreignField: '_id',
    ref: 'Account',
    justOne: true
})

TournamentSchema.virtual('participantCount', {
    localField: '_id',
    foreignField: 'tournamentId',
    ref: 'Participant',
    count: true
})