import { AppState } from "../AppState.js"
import { Reward } from "../models/Reward.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class RewardsService{

    async createReward(reward){
        const res = await api.post(`api/rewards`, reward)
        AppState.rewards = res.data.map(r => new Reward(r))
        return res.data
    }
    async getProfileRewards(profileId){
        const res = await api.get(`api/profiles/${profileId}/rewards`)
        AppState.profileRewards = res.data.map(r => new Reward(r))
        logger.log('[PROFILE REWARDS]', AppState.profileRewards)
    }
}

export const rewardsService = new RewardsService()