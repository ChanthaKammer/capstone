import { api } from './AxiosService.js' 
import { AppState } from "../AppState.js"
import Pop from "../utils/Pop.js"
import { logger } from '../utils/Logger.js'
import { Tournament } from "../models/Tournament.js"

class TournamentsService {

  async getAllTournaments() {
    const res = await api.get('api/tournaments')
    AppState.tournaments = res.data.map(t => new Tournament(t))
    logger.log('this is the res.data', res.data)
    logger.log(AppState.tournaments)
  }

  async setActiveTournament(tournamentId) {
    const res = await api.get(`api/tournaments/${tournamentId}`)
    AppState.activeTournament = res.data
    logger.log(AppState.activeTournament)
    
  }

  async getMyTournaments() {
    const res = await api.get('account/tournaments')
    AppState.myTournaments = res.data
    logger.log('[MY_TOURNAMENTS]',AppState.myTournaments)
  }

  async createTournament(tournamentData) {
    logger.log("[CREATE_TOURNAMENT]",tournamentData)
    const res = await api.post('api/tournaments', tournamentData)
    logger.log(res.data, `${tournamentData}`)
    AppState.tournaments.unshift(res.data)
    Pop.success(`New tournament ${res.data.name} has been created!`)
    return res.data
  }
  async editTournament(tournamentId, editable){
    // logger.log(tournamentId, editable)
    const res = await api.put('api/tournaments/' + tournamentId, editable)
    logger.log(res.data)
    AppState.activeTournament = res.data
  }

  async cancelTournament(tournamentId) {
    
    // await Pop.confirm(`Tournament ${res.data.name} has been cancelled!`)
    const res = await api.delete(`api/tournaments/${tournamentId}`)
    return res.data
  }

  async getProfileTournaments(profileId){
    const res = await api.get(`api/profiles/${profileId}/tournaments`)
    AppState.profileTournaments = res.data.map(t => new Tournament(t))
    // logger.log('[PROFILE_TOURNAMENTS]',AppState.profileTournaments)
    return res.data
  }
}

export const tournamentsService = new TournamentsService()