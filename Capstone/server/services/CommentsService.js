import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class CommentsService{
  async getProfileComments(profileId) {
    const comments = await dbContext.Comments.find({creatorId: profileId}).populate('tournament creator')
    return comments
  }
  async createComment(body) {
    const comment = await dbContext.Comments.create(body)
    await comment.populate('creator')
    return comment
  }
  
  async getCommentsByTournamentId(tournamentId) {
    const comments = await dbContext.Comments.find({ tournamentId: tournamentId}).populate('creator')
    return comments
  }
  
  
  async getAccountComments(creatorId) {
    const comments = await dbContext.Comments.find({ creatorId }).populate('tournament creator')
    return comments
  }
  
  async deleteComment(commentId, userId) {
    const comment = await dbContext.Comments.findById(commentId).populate('creator')
    if (!comment) throw new BadRequest('No comment by that ID')
    if (comment.creatorId != userId) throw new Forbidden('Not your account!')
    await comment.remove()
    return 
  }
}

export const commentsService = new CommentsService