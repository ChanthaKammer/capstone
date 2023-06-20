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
    async getTourneyRewards(tournamentId) {
        const rewards = await dbContext.Rewards.find({tournamentId}).populate('account tournament participant')
        if(!rewards){
            throw new BadRequest("There are no rewards for this tournament.")
            }
        return rewards
    }
    async getAccountRewards(accountId) {
        const rewards = await dbContext.Rewards.find({accountId}).populate('account tournament participant')
        if(!rewards){
            throw new BadRequest("This account has no rewards.")
        }
        return rewards
    }
    async getProfileRewards(profileId) {
      const rewards = await dbContext.Rewards.find({accountId: profileId})
      if(!rewards){
        throw new BadRequest("This profile has no rewards.")
      }
      return rewards
    }
    
    
    
}

export const rewardsService = new RewardsService()