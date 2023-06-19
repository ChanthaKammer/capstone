import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { rewardsService } from "../services/RewardsService.js";

export class RewardsController extends BaseController{
    constructor(){
        super('api/rewards')
            this.router
            .get('/:id', this.getReward)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createReward)
    }

    async createReward(req, res, next){
        try {
            req.body.hostId = req.userInfo.id
            const reward = await rewardsService.createReward(req.body)
            return res.send(reward)
        } catch (error) {
            next(error)
        }
    }

    async getReward(req, res, next){
        try {
            const rewardId = req.params.id
            const reward = await rewardsService.getReward(rewardId)
            return res.send(reward)
        } catch (error) {
            next(error)
        }
    }
}