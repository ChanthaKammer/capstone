import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"


class ParticipantsService{
    createParticipant(participationData) {
        throw new Error("Method not implemented.")
    }
    async getParticipation(participationId) {
        const participation = await dbContext.Participants.findById(participationId)
        if(!participation){
            throw new BadRequest(`There is no participation @ ${participationId}`)
        }
        return participation
    }
    
}

export const participantsService = new ParticipantsService()