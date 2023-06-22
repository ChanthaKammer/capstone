import { AppState } from "../AppState.js"
import { Profile } from "../models/Profile.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class ProfileService{

    async getProfile(profileId){
        const res = await api.get(`api/profiles/${profileId}`)
        AppState.activeProfile = new Profile(res.data)
        return res.data
    }
}

export const profileService = new ProfileService()