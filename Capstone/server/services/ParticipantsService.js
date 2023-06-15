import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"


class ParticipantsService{
    async createParticipant(participantData) {
        const participant = await dbContext.Participants.create(participantData)
        await participant.populate('profile tournament')
        return participant
    }
    async getParticipation(participantId) {
        const participation = await dbContext.Participants.findById(participantId)
        if(!participation){
            throw new BadRequest(`There is no participation @ ${participantId}`)
        }
        return participation
    }
    async getTournamentParticipants(tournamentId) {
        const participants = await dbContext.Participants.find({ tournamentId }).populate('profile tournament')
        return participants
    }
    
}

export const participantsService = new ParticipantsService()