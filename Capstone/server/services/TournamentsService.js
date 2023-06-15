import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class TournamentsService{
    async createTournament(tournamentData) {
        const tournament = await dbContext.Tournaments.create(tournamentData)
        await tournament.populate('creator particpantCount')
        return tournament
    }
    async getTournamentById(tournamentId) {
        const tournament = await dbContext.Tournaments.findById(tournamentId).populate('participantCount creator')
        if(!tournament){
            throw new BadRequest(`There is not tournament attached to ${tournamentId}`)
        }
        return tournament
    }
    async getAllTournaments() {
        const tournaments = await dbContext.Tournaments.find().populate('participantCount creator')
        return tournaments
    }

}

export const tournamentsService = new TournamentsService()