import { tournamentsService } from "../services/TournamentsService.js";
import BaseController from "../utils/BaseController.js";

export class TournamentsController extends BaseController{
    constructor(){
        super('api/tournaments')
        this.router
            .get('', this.getAllTournaments)
    }

    async getAllTournaments(req, res, next){
        try {
            const tournaments = await tournamentsService.getAllTournaments()
            return res.send(tournaments)
        } catch (error) {
            next(error)
        }
    }
}