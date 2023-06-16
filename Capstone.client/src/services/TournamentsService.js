import { api } from './AxiosService.js' 
import { AppState } from "../AppState.js"
import Pop from "../utils/Pop.js"
import { logger } from '../utils/Logger.js'
import { Tournament } from "../models/Tournament.js"

class TournamentsService {

  async getAllTournaments() {
    const res = await api.get('api/tournaments')
    AppState.tournaments = res.data.map(t => new Tournament(t))
    logger.log(AppState.tournaments)
  }

  async getTournamentById(tournamentId) {
    const res = await api.get(`api/tournaments/${tournamentId}`)
    AppState.activeTournament = res.data
    logger.log(AppState.activeTournament, res.data)
  }

  async getMyTournaments() {
    const res = await api.get('account/tournaments')
    AppState.myTournaments = res.data
    logger.log(AppState.myTournaments, 'are my tournaments')
  }

  async createTournament(tournamentData) {
    const res = await api.post('api/tournaments', tournamentData)
    logger.log(res.data, `${tournamentData}`)
    // AppState.tournaments.unshift(res.data)
    Pop.success(`New tournament ${res.data.name} has been created!`)
    return res.data
  }

  async cancelTournament(tournamentId) {
    const res = await api.delete(`api/tournaments/${tournamentId}`)
    Pop.confirm(`Tournament ${res.data.name} has been cancelled!`)
    return res.data
  }
}

export const tournamentsService = new TournamentsService()