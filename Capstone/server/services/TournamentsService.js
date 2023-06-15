import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class TournamentsService{
    async createTournament(tournamentData) {
        const tournament = await dbContext.Tournaments.create(tournamentData)
        await tournament.populate('creator participantCount')
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

    async tournamentCancelled(tournamentId, userId) {
        const tournament = await this.getTournamentById(tournamentId)
        if (tournament.creatorId != userId) throw new Forbidden("Not your Event!")

  tournament.isCancelled = true
   await tournament.save()

    }
   
}

export const tournamentsService = new TournamentsService()