import { participantsService } from "../services/ParticipantsService.js";
import BaseController from "../utils/BaseController.js"
import { Auth0Provider } from "@bcwdev/auth0provider";

export class ParticipantsController extends BaseController{
    constructor(){
        super('api/participants')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .get('/:id', this.getParticipant)
            .post('', this.createParticipant)
    }

    async getParticipant(req, res, next){
        try {
            const participantId = req.params.id
            const participant = await participantsService.getParticipant(participantId)
            return res.send(participant)
        } catch (error) {
            next(error)
        }
    }

    async createParticipant(req, res, next){
        try {
            req.body.creatorId = req.userInfo.id
            const participant = await participantsService.createParticipant(req.body)
            return res.send(participant)
        } catch (error) {
            next(error)
        }
    }
}