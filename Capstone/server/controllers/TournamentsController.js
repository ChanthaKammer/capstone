import { Auth0Provider } from "@bcwdev/auth0provider";
import { tournamentsService } from "../services/TournamentsService.js";
import BaseController from "../utils/BaseController.js";

export class TournamentsController extends BaseController{
    constructor(){
        super('api/tournaments')
        this.router
            .get('', this.getAllTournaments)
            .get('/:id', this.getTournamentById)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createTournament)
    }

    async createTournament(req, res, next){
        try {
            const tournamentData = req.body
            const tournament = await tournamentsService.createTournament(tournamentData)
            return res.send(tournament)
        } catch (error) {
            next(error)
        }
    }
    async getAllTournaments(req, res, next){
        try {
            const tournaments = await tournamentsService.getAllTournaments()
            return res.send(tournaments)
        } catch (error) {
            next(error)
        }
    }

    async getTournamentById(req, res, next){
        try {
            const tournamentId = req.body.id
            const tournament = await tournamentsService.getTournamentById(tournamentId)
            return res.send(tournament)
        } catch (error) {
            next(error)
        }
    }
}