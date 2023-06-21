import { AppState } from "../AppState.js"
import { Comment } from "../models/Comment.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class CommentsService{
  async createComment(commentData){
    const res = await api.post('api/comments', commentData)
    AppState.comments.unshift(new Comment(res.data))
    logger.log('DID YOU COMMENT!', AppState.comments)
  }

  async getCommentsByTournamentId(tournamentId){
    const res = await api.get(`api/tournaments/${tournamentId}/comments`)
    
    AppState.comments = res.data.map(c => new Comment(c))
    logger.log('COMMENT EVENTS ID', AppState.comments)
  }

  async deleteComment(commentId){
    
    const res = await api.delete(`api/comments/${commentId}`)
    logger.log('DELETE COMMENT', res.data)
    AppState.comments = AppState.comments.filter(c => c.id != commentId)

  }


}
 
export const commentsService = new CommentsService()