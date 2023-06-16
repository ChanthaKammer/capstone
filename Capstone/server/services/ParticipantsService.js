import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class ParticipantsService{
    async createParticipant(participantData) {
            const participant = await dbContext.Participants.create(participantData)
            await participant.populate('profile tournament')
            return participant
    }
    async getParticipant(participantId) {
        const participation = await dbContext.Participants.findById(participantId).populate('profile tournament')
        if(!participation){
            throw new BadRequest(`There is no participation @ ${participantId}`)
        }
        return participation
    }
    
    async getTournamentParticipants(tournamentId) {
        const participants = await dbContext.Participants.find({ tournamentId: tournamentId }).populate('profile tournament')
        return participants
    }
    async getAccountParticipations(accountId) {
      const participations = await dbContext.Participants.find({ accountId }).populate('profile tournament')
      return participations
    }
    async deleteParticipant(userId, participantId) {
        const participant = await this.getParticipant(participantId)
        if(participant.accountId != userId){
            throw new BadRequest("This is not your comment")
        }
        await participant.remove()
        return participant
    }
    
}

export const participantsService = new ParticipantsService()