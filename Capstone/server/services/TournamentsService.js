import { dbContext } from "../db/DbContext.js"

class TournamentsService{
    async getAllTournaments() {
        const events = await dbContext.Tournaments.find().populate('participantCount creator')
        return events
    }

}

export const tournamentsService = new TournamentsService()