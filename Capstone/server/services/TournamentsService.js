import { dbContext } from "../db/DbContext.js"

class TournamentsService{
    async getAllTournaments() {
        const events = await dbContext.Tournaments.find().populate('participantCount creator')
        return events
    }

    async createTournament(tournamentData){
        const tournament = await dbContext.Tournaments.create(tournamentData)
        await tournament.populate('creator participantCount')
        return tournament
    }

}

export const tournamentsService = new TournamentsService()