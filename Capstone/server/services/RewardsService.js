import { dbContext } from "../db/DbContext.js"


class RewardsService {
    async createReward(rewardData) {
        const reward = await dbContext.Rewards.create(rewardData).
    }

}

export const rewardsService = new RewardsService()