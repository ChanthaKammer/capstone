<template>

  <div v-if="!myParticipation.tournament.isCancelled">
    
    <section class="container-fluid">
      <!--SECTION  * * * CARD IMAGE HEADER * * * ------------------------------>
      <div class="card card-custom border-white border-0" style="height: 400px">
        <div class="card-custom-img" :style="`background-image: url(${myParticipation.tournament.gameImg})`"></div>
        <div class="card-custom-avatar">
          <img class="img-fluid" :src="myParticipation.profile.picture" :alt="myParticipation.profile.name" />
        </div>
        <!--SECTION * * * CARD BODY * * * ------------->
        <div class="card-body" style="overflow-y: auto">
          <h4 class="card-title"> {{ myParticipation.tournament.name }} </h4>
          <p class="card-text">{{ myParticipation.tournament.category }}</p>
          <p class="card-text text-end" style="font-weight: 650;">Spots Filled: {{ myParticipation.tournament.participantCount }} / {{ myParticipation.tournament.capacity }} </p>
          <p class="card-text">Compete with the best gamers in the valley to take home your pride. And a cash prize!</p>
          <p class="card-text">{{ myParticipation.tournament.description }}</p>
        </div>
        <!--SECTION * * * CARD FOOTER * * * -------------------------------------------->
        <div class="card-footer row" style="background: inherit; border-color: inherit;">
          <div class="col-12">
            <p class="card-text">
              <small class="card-text" style="font-weight: 650;">
                Last Updated on: {{
                  new Date(myParticipation.tournament.updatedAt)
                    .toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    }) }}
                  @ {{
                    new Date(myParticipation.tournament.updatedAt)
                      .toLocaleTimeString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric'
                      }) }}
              </small>
            </p>
          </div>
          <div class="col-12 d-flex justify-content-center py-1">
              <button @click="myJoinedTournaments" class="btn btn-outline-primary">Details</button>
          </div>
        </div>
      </div>   
    </section>

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

    isCancelled: computed(() => AppState.myParticipation.tournament.isCancelled),
    account: computed(() => AppState.account),

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

.game-img {
  aspect-ratio: 1/.5;
  box-shadow: 0 0 15px 15px #000000;
  filter: drop-shadow(0 0 15px 15px #000000);
}

.card-custom {
  color: #efefef;
  text-shadow: 0 1px 5px #998ce2;
  overflow: hidden;
  min-height: 450px;
  background-color: #0a0b14f3;
  box-shadow: 0 0 15px 2px #0a0a0a4d;
  transition: .5 ease-in-out;
}

.card-custom-img {
  height: 200px;
  min-height: 200px;
  background-color: #00000090;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: .8;
  filter: brightness(1.3);
  box-shadow: 0 10px 0 10px #0a0a0a4d;
  border-color: inherit;
}

/* First border-left-width setting is a fallback */
.card-custom-img::after {
  position: absolute;
  content: '';
  top: 161px;
  left: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-top-width: 40px;
  border-right-width: 0;
  border-bottom-width: 0;
  border-left-width: 545px;
  border-left-width: calc(575px - 5vw);
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-left-color: #0b0d12ef;
}

.card-custom-avatar img {
  border-radius: 50%;
  box-shadow: 0 0 15px 3px #0a0a0a9a;
  position: absolute;
  border: 2.5px solid #000000;
  top: 100px;
  left: 1.25rem;
  width: 100px;
  height: 100px;
}

.card-custom:hover {
  filter: brightness(1.1);
  transition: .5s ease-in-out;
}

.sub-member {
  color: #67cbe7;
  margin-left: -1.5rem;
}

i.sub-member:hover {
  color: #67cbe7;
  animation: returnUserMargin 1s forwards;
  filter: brightness(1.1) scale(1.1);
  transition: 1s ease-in-out;
}

.card-footer {
  background-color: #ffffff10;
  box-shadow: 0 0 10px 10px black;
}

</style>