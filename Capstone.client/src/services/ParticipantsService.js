import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop.js"
import { api } from "./AxiosService"

class ParticipantsService {

  async createParticipant(newParticipant) {
    const res = await api.post('api/participants', newParticipant)
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
    AppState.participants = AppState.participants.filter(p => p.id != participantId)
    logger.log(AppState.participants)
    Pop.confirm(`${AppState.account.name} deleted participant.`)
  }
}

export const participantsService = new ParticipantsService()