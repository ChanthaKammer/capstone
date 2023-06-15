import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { CommentSchema } from '../models/Comment.js';
import { ParticipantSchema } from '../models/Participant.js';
import { TournamentSchema } from '../models/Tournament.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Comments = mongoose.model('Comment', CommentSchema);
  Participants = mongoose.model('Participant', ParticipantSchema);
  Tournaments = mongoose.model('Tournament', TournamentSchema);
}

export const dbContext = new DbContext()
