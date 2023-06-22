import { AppState } from "../AppState.js"
import { Reward } from "../models/Reward.js"
import { api } from "./AxiosService.js"

class RewardsService{

    async getProfileRewards(profileId){
        const res = await api.get(`api/profiles/${profileId}/rewards`)
        AppState.profileRewards = res.data.map(r => new Reward(r))
    }
}

export const rewardsService = new RewardsService()