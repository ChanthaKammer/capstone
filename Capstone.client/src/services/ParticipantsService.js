import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop.js"
import { accountService } from "./AccountService.js"
import { api } from "./AxiosService"

class ParticipantsService {

  async createParticipant(newParticipant) {
    const res = await api.post('api/participants', newParticipant)
    await accountService.getAccountParticipations()
    AppState.participants.push(res.data)
    AppState.participants = res.data
    logger.log(AppState.participants)
  }

  async getParticipants(tournamentId) {
    const res = await api.get(`api/tournaments/${tournamentId}/participants`)
    AppState.participants = res.data
    logger.log(AppState.participants)
    Pop.success(`Welcome to ${AppState.activeTournament.name}`)
  }

  async deleteParticipant(participantId) {
    const res = await api.delete(`api/participants/${participantId}`)
    logger.log(res.data)
    return res
    // AppState.participants = AppState.participants.filter(p => p.id != participantId)
    // logger.log(AppState.participants)
    // Pop.confirm(`${AppState.account.name} deleted participant.`)
  }

  async leaveTournament(participantId){
    const res = await this.deleteParticipant(participantId)
    AppState.myParticipations = AppState.myParticipations.filter(t => t.id != participantId)
    logger.log("[LEAVE TOURNAMENT FUNCTION]",res.data)
    Pop.confirm(`${AppState.account.name } left the lobby for ${AppState.activeTournament.name}.`)

  }
}

export const participantsService = new ParticipantsService()