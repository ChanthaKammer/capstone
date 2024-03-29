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
            .put('/:id', this.editParticipant)
            .delete('/:id', this.deleteParticipant)
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
            req.body.accountId = req.userInfo.id
            const participant = await participantsService.createParticipant(req.body)
            return res.send(participant)
        } catch (error) {
            next(error)
        }
    }

    async editParticipant(req, res, next){
        try {
            const participantId = req.params.id
            const participantData = req.body
            const participant = await participantsService.editParticipant(participantId, participantData)
            return res.send(participant)
        } catch (error) {
            next(error)
        }
    }
    async deleteParticipant(req, res, next) {
        try {
            const userId = req.userInfo.id
            const participantId = req.params.id
            const participant = await participantsService.deleteParticipant(userId, participantId)
            return res.send(participant)
        } catch (error) {
            next(error)
        }
    }
}