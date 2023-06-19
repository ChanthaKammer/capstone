import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"


class RewardsService {
    async createReward(rewardData) {
        const reward = await dbContext.Rewards.create(rewardData)
        await reward.populate('account tournament')
        return reward
    }
    async getReward(rewardId) {
        const reward = await dbContext.Rewards.findById(rewardId)
        if(!reward){
            throw new BadRequest(`There is no reward at ID: ${rewardId}`)
        }
        return reward
    }

}

export const rewardsService = new RewardsService()