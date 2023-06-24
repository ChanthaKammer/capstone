<template>
  <section class="container-fluid">
        <!--SECTION  * * * CARD IMAGE HEADER * * * ------------------------------>
        <div class="card card-custom border-white border-0" style="height: 500px">
          <div class="card-custom-img" :style="`background-image: url(${tournament.gameImg})`"></div>
          <div v-if="tournament.creatorId == profile.id">
            <h5 class="host-badge">HOST</h5>
          </div>
          <div class="card-custom-avatar">
            <img class="img-fluid object-fit-cover" :src="tournament.creator.picture" :alt="tournament.creator.name" />
          </div>
          <!--SECTION * * * CARD BODY * * * ------------->
          <div class="card-body" style="overflow-y: auto">
            <h4 class="card-title"> {{ tournament.name }} </h4>
            <p class="card-text"> {{ tournament.category }} </p>
            <p class="card-text text-end" style="font-weight: 650;">Spots Filled: {{ tournament.participantCount }} / {{ tournament.capacity }} </p>
            <p  v-if="tournament.description.length <= 20" class="card-text">Compete with the best gamers in the valley to take home your pride. And a cash prize!</p>
            <p class="card-text">{{ tournament.description }}</p>
          </div>
          <!--SECTION * * * CARD FOOTER * * * -------------------------------------------->
          <div class="card-footer row" style="background: inherit; border-color: inherit;">
            <div class="col-12">
              <p class="card-text">
                <small class="card-text" style="font-weight: 650;">
                  Last Updated on: {{ 
                    new Date( tournament.updatedAt )
                    .toLocaleDateString('en-US', {
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric'
                    }) }}
                    @ {{ 
                      new Date( tournament.updatedAt )
                      .toLocaleTimeString('en-US', {
                        hour: 'numeric', 
                        minute: 'numeric'
                      }) }}
                </small>
              </p>
            </div>
            <div class="col-6 ps-4 py-1">
              <a href="#" class="btn btn-dark" style="color: dodgerblue;">To Top</a>
            </div>
            <div class="col-6 ps-5 py-1">
              <router-link :to="{ name: 'TournamentDetails', params: { tournamentId: tournament.id } }">
                <a href="#" class="btn btn-outline-primary">Battle</a>
              </router-link>
            </div>
          </div>
        </div>   
  </section>

</template>

<script>


import { AppState } from "../AppState.js";
import { Tournament } from "../models/Tournament.js";
import { computed } from "vue";

export default {

  props: {
    tournament: {type: Tournament, required: true},
  },

  setup() {

    return {
      profile: computed(() => AppState.activeProfile)

       

        // STUB Previous code before prop
        // participantCount: computed(() =>{
        // return AppState.activeTournament.capacity
        // }),
        // remainingParticipantCount: computed(()=>{
        // return AppState.activeTournament.capacity - AppState.activeTournament.participantCount
        // }),

        // getRandomBg() {
        //     return bgs[Math.floor(bgs.length * Math.random())]
        // }
    }
  }
}

</script>

<style scoped lang="scss">

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

.host-badge {
  padding: .25rem;
  text-align: center;
  background-color: gold;
  color: aliceblue;
  text-shadow: 1px 1px 3px #000000;
  border-radius: 3rem;
  width: 5.25vw;
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-image: linear-gradient(linear, left top, right top, color-stop(0%, #1e0a0a00), color-stop(25%, #1e0a0a00), color-stop(60%, #fff6b0d9), color-stop(100%, #1e0a0a00));
  background-image: linear-gradient(120deg, #1e0a0a00 0%, #1e0a0a00 25%, #fff6b0d9 60%, #1e0a0a00 100%);
  background-repeat: repeat-y;
  background-position: -100px 0;
  animation: goldShimmer 6s linear infinite;
}

@keyframes goldShimmer {

  0% {
    background-position: -800px 0
  }

  50% {
    background-position: -200px 0
  }

  100% {
    background-position: 100px 0
  }
}

.card-custom:hover {
  transform: scale(1.01);
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

</style>