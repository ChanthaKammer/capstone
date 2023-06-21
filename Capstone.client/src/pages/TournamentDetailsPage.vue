<!-- <TournamentDetailsCard /> -->
<template>
  <section class="container-fluid bg-img">

    <div class="row">
      <div v-if="!tournament.isCancelled" class="col-12 col-md-6 mt-4 text-light text-uppercase">
        <p class="ms-5 mt-1 mb-0 my-0" style="font-size: 3rem; font-weight: 750; font-style: italic;">{{ tournament.name
        }} ({{ tournament.type }}) </p>
        <div class="row">
          <div class="col-12">
            <p class="ms-5 ps-3 mt-0 pb-3" style="font-size: 3rem; font-weight: 650; font-style: italic;">@ {{
              tournament.location }} </p>
            <p class="ms-5 ps-3 mt-2 mb-0" style="font-size: 2rem; font-weight: 650; font-style: italic;">BE THERE ON
              {{
                new Date(tournament.startDate)
                  .toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  }) }}
              @ {{
                new Date(tournament.startDate)
                  .toLocaleTimeString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric'
                  }) }}
            </p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 pt-5 px-5 d-flex justify-content-end align-items-center">
        <img :src="tournament.coverImg" class="img-fluid" style="min-height: 50vh;">
      </div>
      <div class="row">
        <div class="col-12 pb-5">
          <div v-if="tournament.startDate" class="pb-5">
            <TournamentCountdown />
          </div>
        </div>
      </div>
    </div>

    <!--NOTE This section conditionally renders the status of the tournament
      * If cancelled, displays red banner reading "CANCELLED"
      * If active, green banner reads "ACTIVE"
      * If finished, light blue banner reads "FINISHED"
      * If pending, yellow banner reads "PENDING" -->
    <!--NOTE Expand further on card methodology once minimum requirements are met elsewhere -->
    <section>
      <div class="my-4">
        <div class="row bg-pending">
          <div class="col-12 d-flex justify-content-center align-items-center">
            <div v-if="!tournament.isFinished">
              <p class="pending" style="font-style: italic;">PENDING</p>
            </div>
          </div>
        </div>
        <div class="row bg-active">
          <div class="col-12 d-flex justify-content-center align-items-center">
            <div v-if="tournament.startDate >= Date.now() && !tournament.isFinished">
              <p style="font-style: italic;">ACTIVE</p>
            </div>
          </div>
        </div>
        <div class="row bg-finished">
          <div class="col-12 d-flex justify-content-center align-items-center">
            <div v-if="tournament.isFinished">
              <p class="finished" style="font-style: italic;">FINISHED</p>
            </div>
          </div>
        </div>
        <div class="row bg-cancelled">
          <div class="col-12 d-flex justify-content-center align-items-center">
            <div v-if="tournament.isCancelled">
              <p style="font-style: italic;">CANCELLED</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="row">
      <div class="col-12 col-md-6 order-2 order-md-1">
        <div class="row justify-content-around p-4">
          <div class="col-6 text-center">
            <h1>1st Place:</h1>
            <!-- NOTE MAKE ICON FOR CURRENT LEADER BY THEIR USER IMAGE USING THE :TITLE V-BIND METHOD ON ACTIVE TOURNAMENT WHEN LESS TIRED -->
            <i class="mdi mdi-account-circle top-player" style="font-size: 5rem;"></i>
            <p style="font-size: 2rem; font-weight: 650; text-shadow: 0 2px 2px #ffffff;">Top Player Name</p>
            <p style="font-size: 2rem; font-weight: 650; text-shadow: 0 2px 2px #ffffff;">Top Player Team</p>
          </div>
          <div class="col-6 col-md-3">
            <h1>Round {{ tournament.currentRound }} / {{ tournament.totalRounds }} </h1>
          </div>
          <div>
            <div class="row">
              <div class="col-12 d-flex align-items-baseline">
                <i class="mdi mdi-account-multiple" style="font-size: 3rem; color: green;"></i>
                <i class="mdi mdi-account-multiple" style="font-size: 3rem; color: green;"></i>
                <i class="mdi mdi-account-multiple" style="font-size: 3rem; color: green;"></i>
                <i class="mdi mdi-account-multiple" style="font-size: 3rem; color: green;"></i>
                <i class="mdi mdi-account-multiple" style="font-size: 3rem; color: red;"></i>
                <i class="mdi mdi-account-multiple" style="font-size: 3rem; color: red;"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 p-4 order-1 order-md-2">
        <img :src="tournament.gameImg" class="img-fluid starship-img rounded-2" style="min-width: 40vw;"
        alt="">
        <RGBButton @click="joinTournament" />
      </div>
    </div>
    <div class="col-12 bg-img" style="height: 50px; width: 100%; opacity: .9; filter: blur(10px) brightness(.8);"></div>
    
  
      <!-- <div class="row justify-content-center bg-comments p-2 py-5">
        <div class="col-md-8 ">
          <div class=" elevation-5 comment-box p-2">
            <form @submit.prevent="createComment()">
              <div v-if="account" class="d-flex justify-content-center align-items-center mb-2">
                <img :src="account.picture" class="img-fluid img-responsive rounded-circle me-2" width="38">
                <textarea v-model="commentData" class="text-area w-100"></textarea>
              </div>
              <div class="text-end">
                <button type="submit" class="mb-1 transparent-button">Post comment</button>
              </div>
            </form>
          </div>
        </div>
      </div> -->
      <div class="row justify-content-center p-4">
        <div class="col-6">
          <form @submit.prevent="createComment()">
              <div v-if="account" class="d-flex justify-content-center align-items-center mb-2">
                <img :src="account.picture" class="img-fluid img-responsive rounded-circle me-2" width="38">
                <textarea v-model="commentData" class="text-area w-100"></textarea>
              </div>
              <div class="text-end">
                <button type="submit" class="mb-1 transparent-button">Post comment</button>
              </div>
            </form>
        </div>
      </div>
      <div class="row">
        <div class="col-12" v-for="c in comments" :key="c.id">
          <CommentCard :comment="c" />
        </div>
      </div>
  
  
    </section>
    <footer class="row bg-black g-0 sticky-bottom" style="width: 100%; max-height: 60px;">
      <marquee behavior="scroll" direction="right" scrollamount="5" class="text-light"
        style="width: 100vw; font-size: 2rem; font-weight: 650; font-style: italic;">
        <img
          src="https://th.bing.com/th/id/R.2bc5a9822d665e72c81b61d4b4bb005e?rik=QzK0idJb9fJMqw&riu=http%3a%2f%2ffiles.gamebanana.com%2fimg%2fico%2fsprays%2fkoopa.gif&ehk=P%2bR6goQOAICNSQF%2barcUljvK1EsIlBzWRDFrzjXORa0%3d&risl=&pid=ImgRaw&r=0"
          class="img-fluid pb-3" style="max-height: 80px;" alt="mario">
      </marquee>
    </footer>


</template>

<script>

import { ref, computed, onMounted } from 'vue';
import { AppState } from '../AppState';
import { tournamentsService } from '../services/TournamentsService';
import { participantsService } from '../services/ParticipantsService';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';
// import TournamentDetailsCard from '../components/TournamentDetailsCard.vue';
import { useRoute } from 'vue-router';
import TournamentCountdown from '../components/TournamentCountdown.vue';
import RGBButton from '../components/RGBButton.vue';
import { commentsService } from "../services/CommentsService.js";

export default {

  components: {
    TournamentCountdown,
    RGBButton
  },

  setup() {
    const commentData = ref('')
    const route = useRoute();

    onMounted(() => {
      setActiveTournament();
      getParticipants();
      getCommentsByTournamentId();
    });


    async function setActiveTournament() {
      try {
        const tournamentId = route.params.tournamentId
        logger.log('[ACTIVE TOURNAMENT ID]', tournamentId)
        await tournamentsService.setActiveTournament(tournamentId)

      } catch (error) {
        Pop.error(error)
      }

    }
    return {
      joinTournament,
      commentData,
      route,
      account: computed(() => AppState.account),
      tournament: computed(() => AppState.activeTournament),
      participants: computed(() => AppState.participants),
      comments: computed(() => AppState.comments),
      async createComment() {
      try {
        const trimmedComment = commentData.value.trim();
        if (trimmedComment.length == 0) {
          Pop.toast("Comments must contain a body")
          return
        }
        const tournyId = route.params.tournamentId
        let comment = {body: trimmedComment,tournamentId: tournyId }

        commentsService.createComment(comment)
        commentData.value = ""
      } catch (error) {
        logger.log(error);
      }
    },
    

    }

    async function getParticipants() {
      try {
        await participantsService.getParticipants(route.params.tournamentId)
      } catch (error) {
        logger.log('[getting participants for this tournament]', error);
        Pop.error(error.message);
      }
    }

    async function joinTournament(){
      try {
        
        if (AppState.account.id.length > 1) {
          const tournyId = route.params.tournamentId
          const accountId = AppState.account.id
          const participant = await participantsService.createParticipant({tournamentId: tournyId})
          logger.log(participant)
          await this.getParticipants
        }
      } catch (error) {
        logger.log(error);
      }
    }
    async function getCommentsByTournamentId() {
      try {
        const tournamentId = route.params.tournamentId;
        await commentsService.getCommentsByTournamentId(tournamentId);
      }
      catch (error) {
        Pop.error(error);
      }
    }
  },
}

</script>

<style scoped lang="scss">

h1,
h2,
h3,
h4,
h5,
h6 {
  text-shadow: 0 3px 5px #ffffff;
}

.bg-img {
  box-shadow: inset 0 -50px 50px 0px #11245ee1;
}
.bg-comments {
  background-color: #d8eaff;
  box-shadow: inset 0px -100px 150px #11245ee1;
}

.comment-box {
  width: 50vh;

}

.top-player {
  color: #ffd900ad;
  max-height: 3rem;
  text-shadow: 0 3px 2px #f5ff8cb7;
  animation: goldShimmer 2s infinite;
}

@keyframes goldShimmer {

  0% {
    filter: drop-shadow(0 0 30px 30px #ffd900ad) brightness(1);
    border-radius: 3rem;
    max-height: 3rem;
  }

  50% {
    filter: drop-shadow(0 0 30px 30px #ffd900e3) brightness(1.3);
    border-radius: 3rem;
    max-height: 3rem;
  }

  100% {
    filter: drop-shadow(0 0 30px 30px #ffd900ad) brightness(1);
    border-radius: 3rem;
    max-height: 3rem;
  }
}

.bg-img {
  background-image: url(https://th.bing.com/th/id/R.86e62bb1ffccef76ceac5690808e9bb0?rik=FSe9PVtGZLmmfw&pid=ImgRaw&r=0);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.pizza-img {
  opacity: .98;
  filter: brightness(1.2);

}

.starship-img:hover {
  filter: brightness(1.2);
  transition: 0.5s;
  box-shadow: 0px 0px 10px 10px #000000;
}

.bg-pending {
  color: #f0f0f0e9;
  font-size: 3rem;
  font-weight: 700;
  background-color: #ffb134;
  text-shadow: 0 3px 5px #000000;
  box-shadow: 0 0 50px 5px #ffb134;
  animation: pulse 3s infinite;
}

.bg-active {
  color: #f0f0f0e9;
  font-size: 3rem;
  font-weight: 700;
  background-color: #00ff4cd6;
  text-shadow: 0 3px 5px #000000;
  box-shadow: 0 0 50px 5px #00ff4cd6;
  animation: pulse 3s infinite;
}

.bg-finished {
  color: #f0f0f0e9;
  font-size: 3rem;
  font-weight: 700;
  background-color: #21d6ffd6;
  text-shadow: 0 3px 5px #000000;
  box-shadow: 0 0 50px 5px #21d6ffd6;
  animation: pulse 3s infinite;
}

.bg-cancelled {
  color: #f0f0f0e9;
  font-size: 3rem;
  font-weight: 700;
  background-color: #9a0000d6;
  text-shadow: 0 3px 5px #000000;
  box-shadow: 0 0 50px 5px #9a0000d6;
  animation: pulse 3s infinite;
}







@keyframes pulse {
  0% {
    box-shadow: 0 0 50px 5px #00ff4cd6;
  }

  50% {
    box-shadow: 0 0 60px 5px #00ff4cea;
    filter: brightness(1.3);
    color: #6eff9aea
  }

  100% {
    box-shadow: 0 0 50px 5px #00ff4cd6;
  }
}

@keyframes slideIn {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(0%);
  }
}
@media (max-width: 768px) {
.mobile-results{
   margin-bottom: 0rem;
    padding-top: 6rem;
}

}
</style>