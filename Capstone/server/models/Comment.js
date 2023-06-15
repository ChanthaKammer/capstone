import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId

export const CommentSchema = new Schema({
    id: { type: ObjectId, required: true},
    creatorId: { type: ObjectId, required: true, ref: 'Account'},
    tournamentId: {type: ObjectId, required: true},
    body: {type: String, required: true, maxLength: 500}
},
    {timestamps: true, toJSON: {virtuals: true}}
)

CommentSchema.virtual('commenter', {
    localField: 'creatorId',
    foreignField: '_id',
    ref: 'Account',
    justOne: true
})