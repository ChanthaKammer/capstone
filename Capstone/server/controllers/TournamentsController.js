import { Auth0Provider } from "@bcwdev/auth0provider";
import { tournamentsService } from "../services/TournamentsService.js";
import BaseController from "../utils/BaseController.js";
import { commentsService } from "../services/CommentsService.js";
import { participantsService } from "../services/ParticipantsService.js";
import { rewardsService } from "../services/RewardsService.js";



export class TournamentsController extends BaseController {
    constructor() {
        super('api/tournaments')
        this.router
            .get('', this.getAllTournaments)
            .get('/:id', this.getTournamentById)
            .get('/:id/comments', this.getCommentsByTournamentId)
            .get('/:id/participants', this.getTournamentParticipants)
            .get('/:id', this.getTourneyRewards)
            .delete('/:id/permanent', this.deleteTournament)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createTournament)
            .put('/:id', this.editTournament)
            .delete('/finished/:id', this.tournamentFinished)
            .delete('/:id', this.tournamentCancelled)
    }

    async getTournamentParticipants(req, res, next) {
        try {
            const participants = await participantsService.getTournamentParticipants(req.params.id)
            return res.send(participants)
        } catch (error) {
            next(error)
        }
    }

    async getTourneyRewards(req, res, next){
        try {
            const tournamentId = req.params.id
            const rewards = await rewardsService.getTourneyRewards(tournamentId)
            return res.send(rewards)
        } catch (error) {
            next(error)
        }
    }

    async getTournamentById(req, res, next) {
        try {
            const tournamentId = req.params.id
            const tournament = await tournamentsService.getTournamentById(tournamentId)
            return res.send(tournament)
        } catch (error) {
            next(error)
        }
    }

    async getAllTournaments(req, res, next) {
        try {
            const tournaments = await tournamentsService.getAllTournaments()
            return res.send(tournaments)
        } catch (error) {
            next(error)
        }
    }

    async createTournament(req, res, next) {
        try {
            req.body.creatorId = req.userInfo.id
            const tournament = await tournamentsService.createTournament(req.body)
            return res.send(tournament)
        } catch (error) {
            next(error)
        }
    }

    async getCommentsByTournamentId(req, res, next) {
        try {
            const tournamentId = req.params.id
            const comments = await commentsService.getCommentsByTournamentId(tournamentId)
            return res.send(comments)
        } catch (error) {
            next(error)
        }
    }
    async editTournament(req, res, next) {
        try {
            const tournamentData = req.body
            const userId = req.userInfo.id
            const tournamentId = req.params.id
            const tournament = await tournamentsService.editTournament(tournamentId, tournamentData, userId)
            return res.send(tournament)
        } catch (error) {
            next(error)
        }
    }
    async tournamentCancelled(req, res, next) {
        try {
            const tournament = await tournamentsService.tournamentCancelled(req.params.id, req.userInfo.id)
            return res.send(tournament)
        } catch (error) {
            next(error)
        }
    }

    async tournamentFinished(req, res, next) {
        try {
            const tournament = await tournamentsService.tournamentFinished(req.params.id, req.userInfo.id)
            return res.send(tournament)
        } catch (error) {
            next(error)
        }
    }

    async deleteTournament(req, res, next){
        try {
            const tournament = await tournamentsService.deleteTournament(req.params.id)
            return res.send(tournament)
        } catch (error) {
            next(error)
        }
    }
}