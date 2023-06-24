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
        .sort({startDate: 1})
        return tournaments
    }
    async editTournament(tournamentId, tournamentData, userId) {
        const originalTourney = await this.getTournamentById(tournamentId)
        if(originalTourney.creatorId != userId){
            throw new Forbidden('You are not the creator of this tournament.')
        }
        if(originalTourney.isCancelled){
            throw new BadRequest('This tournament is cancelled.')
        }
        originalTourney.name = tournamentData.name || originalTourney.name
        originalTourney.description = tournamentData.description || originalTourney.description
        originalTourney.coverImg = tournamentData.coverImg || originalTourney.coverImg
        originalTourney.location = tournamentData.location || originalTourney.location
        originalTourney.capacity = tournamentData.capacity || originalTourney.capacity
        originalTourney.startDate = tournamentData.startDate || originalTourney.startDate
        originalTourney.type = tournamentData.type || originalTourney.type
        originalTourney.gameImg = tournamentData.gameImg || originalTourney.gameImg
        originalTourney.gameName = tournamentData.gameName || originalTourney.gameName
        originalTourney.gameSlug = tournamentData.gameSlug || originalTourney.gameSlug
        originalTourney.totalRounds = tournamentData.totalRounds|| originalTourney.totalRounds
        originalTourney.currentRound = tournamentData.currentRound|| originalTourney.currentRound
      originalTourney.isFinished= tournamentData.isFinished ? tournamentData.isFinished : originalTourney.isFinished
        
        await originalTourney.save()
        return originalTourney
    }
    async tournamentCancelled(tournamentId, userId) {
        const tournament = await this.getTournamentById(tournamentId)
        if (tournament.creatorId != userId){
            throw new Forbidden("Not your Tournament!")
        }
        tournament.isCancelled = !tournament.isCancelled
        await tournament.save()
        return tournament
    }
    
    async tournamentFinished(tournamentId, userId) {
        const tournament = await this.getTournamentById(tournamentId)
        if (tournament.creatorId != userId){
            throw new Forbidden("Not your Tournament!")
        }
        tournament.isFinished = !tournament.isFinished 
        await tournament.save()
        return tournament
    }
    async getProfileTournaments(profileId) {
        const tournaments = await dbContext.Tournaments.find({ creatorId: profileId }).populate('participantCount creator')
        if(!tournaments){
            throw new BadRequest("This profile has no tournaments.")
        }
        return tournaments
    }
    async deleteTournament(tournamentId) {
        const tournament = await this.getTournamentById(tournamentId)
        await tournament.remove()
        return tournament
    }
}

export const tournamentsService = new TournamentsService()