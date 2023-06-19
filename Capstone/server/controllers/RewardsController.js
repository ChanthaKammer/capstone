import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { rewardsService } from "../services/RewardsService.js";

export class RewardsController extends BaseController{
    constructor(){
        super('api/rewards')
            this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createReward)
    }

    async createReward(req, res, next){
        try {
            req.body.accountId = req.userInfo.id
            const reward = await rewardsService.createReward(req.body)
            return res.send(reward)
        } catch (error) {
            next(error)
        }
    }
}