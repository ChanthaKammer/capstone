import { participantsService } from '../services/ParticipantsService.js'
import { profileService } from '../services/ProfileService.js'
import { tournamentsService } from '../services/TournamentsService.js'
import BaseController from '../utils/BaseController'

export class ProfilesController extends BaseController {
  constructor() {
    super('api/profiles')
    this.router
      .get('', this.getProfiles)
      .get('/:id', this.getProfile)
      .get('/:id/participants', this.getProfileParticipants)
      .get('/:id/tournaments', this.getProfileTournaments)
  }

  async getProfiles(req, res, next) {
    try {
      const profiles = await profileService.findProfiles(req.query.name, req.query.offset)
      res.send(profiles)
    } catch (error) {
      next(error)
    }
  }

  async getProfile(req, res, next) {
    try {
      const profile = await profileService.getProfileById(req.params.id)
      res.send(profile)
    } catch (error) {
      next(error)
    }
  }

  async getProfileParticipants(req, res, next){
    try {
      const profileId = req.params.id
      const participants = await participantsService.getProfileParticipants(profileId)
      return res.send(participants)
    } catch (error) {
      next(error)
    }
  }

  async getProfileTournaments(req, res, next){
    try {
      const profileId = req.params.id
      const tournaments = await tournamentsService.getProfileTournaments(profileId)
      return res.send(tournaments)
    } catch (error) {
      next(error)
    }
  }
}
