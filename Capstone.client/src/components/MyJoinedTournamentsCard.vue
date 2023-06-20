<template>

  <div v-if="!myParticipation.tournament.isCancelled">
    <div class="card bg-dark text-light mb-3" role="button" @click="myJoinedTournaments">
      <div class="row g-0">
        <img :src="myParticipation.tournament.coverImg" class="img-fluid rounded-start participant-img" :alt="myParticipation.tournament.name">
        <div class="card-body">
          <h5 class="card-title"> {{ myParticipation.tournament.name }} </h5>
          <p class="card-text"> {{ myParticipation.tournament.description }} </p>
          <p class="card-text"><small class="text-body-secondary"> {{ myParticipation.tournament.upDatedAt }} </small></p>
        </div>
      </div>
    </div>
  </div>
  <div v-if="myParticipation.tournament.isCancelled">
    <div class="row">
      
      <p class="cancelled-text text-center">{{ myParticipation.tournament.name }} was cancelled.</p>
      <div class="cancelled-tournament">
        <div class="card bg-dark text-light mb-3" role="button" @click="myJoinedTournaments" style="filter: blur(3px);">
          <div class="row g-0">
          <img :src="myParticipation.tournament.coverImg" class="img-fluid rounded-start participant-img" :alt="myParticipation.tournament.name">
          <div class="card-body">
            <h5 class="card-title"> {{ myParticipation.tournament.name }} </h5>
        </div>
      </div>
      </div>
    </div>
  </div>
  </div>

</template>

<script>

import { AppState } from "../AppState"
import { router } from '../router'
import { computed } from 'vue'
import { logger } from "../utils/Logger"
import { participantsService } from "../services/ParticipantsService"
import Pop from "../utils/Pop.js"

export default {

  props: {
    myParticipation: {
      type: Object,
      required: true
    }
  },

setup(props) {

  return {

    isCancelled: computed(() => AppState.activeTournament.isCancelled),
    account: computed(() => AppState.account),
    tournament: computed(() => AppState.activeTournament),

    myJoinedTournaments() {
      router.push({ name: 'TournamentDetails',
                    params: { tournamentId: props.myParticipation.tournament.id }
                  })
    },

      async leaveTournament() {
        try {
          let leftTournament = AppState.participants.find(p => p.accountId == AppState.account.id);
          await participantsService.leaveTournament(leftTournament.id);
          AppState.activeTournament.capacity++;
          Pop.success(`You successfully left the tournament for ${AppState.activeTournament.name}.`)
          }
        catch (error) {
          logger.error('async function "leaveTournament" was not successful.', error);
          Pop.error(error);
        }
      }
    }
  }
}

</script>

<style scoped lang="scss">

.participant-img {
  object-fit: cover;
  width: 100%;
  max-height: 20vh;
}

</style>