
class ProfileService{

    async getProfile(profileId){
        const res = await api.get(`api/profiles/${profileId}`)
        return res.data
    }
}

export const profileService = new ProfileService()