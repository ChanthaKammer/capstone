<!-- <TournamentDetailsCard /> -->
<template>
  <section class="container-fluid bg-details">
    <div class="row">
      <div v-if="!tournament?.isCancelled" class="col-12 col-md-6 pt-3 text-light  details-top">
        <p class="ms-4 mt-1 mb-0 my-0 text-uppercase" style="font-size: 2.5rem; font-weight: 650; font-style: italic;">{{
          tournament?.name
        }} ({{ tournament?.type }}) </p>
        <div v-if="!started" class="row justify-content-center">
          <div class="col-12">
            <p class="ms-4 ps-3 mt-0 mb-0" style="font-size: 1.9rem; font-weight: 450; font-style: italic;">Location:
              <span class="fw-light text-white fs-2"> {{
                tournament?.location }}</span> </p>
            <p class="ms-4 ps-3 mt-2 mb-0" style="font-size: 1.9rem; font-weight: 450; font-style: italic;">Date:
              {{ startDate }}

            </p>
            <p class="ms-4 ps-3 mt-2 mb-3" style="font-size: 1.9rem; font-weight: 450; font-style: italic;">

              Time: {{ startTime }}
            </p>
            <div v-if="!tournamentStarted && !isFinished" class="pb-5 countdown-area">
              <TournamentCountdown :startDate="tournament?.startDate" />
            </div>
          </div>
        </div>
        <div v-if="tournamentStarted">
          <h4 class="fw-normal fs-3 ms-5">Tournament has begun</h4>
          <h5 class="fw-lighter ms-5">May the best player win</h5>
        </div>
        <div v-if="tournament.isFinished == true" class="text-center">
          <h4 class="fw-bold fs-2 ms-0">WINNER</h4>
          <h5 class="fw-lighter ms-4">Congratulations to <span class="text-white fw-bold fs-5"> {{ first?.profile?.gamerTag }}</span> for winning the tournament!</h5>
        </div>
        <div v-if="isFinished" class="text-center">
          <img class="winner" :src="first?.profile?.picture" alt="">
        </div>
      </div>
      <div class="col-12 col-md-6 pt-5 px-5 d-flex  align-items-center">
        <img :src="tournament?.coverImg" :alt="tournament?.coverImg" class=" tournament-image" style="">
      </div>
      <div>

      </div>
      <!-- <div class="row">
        <div class="col-12 pb-5">
          <div v-if="tournament.startDate" class="pb-5">
            <TournamentCountdown />
          </div>
        </div>
      </div> -->
    </div>

    <!--NOTE This section conditionally renders the status of the tournament
      * If cancelled, displays red banner reading "CANCELLED"
      * If active, green banner reads "ACTIVE"
      * If finished, light blue banner reads "FINISHED"
      * If pending, yellow banner reads "PENDING" -->
    <!--NOTE Expand further on card methodology once minimum requirements are met elsewhere -->
    <section>
      <div class="my-4">
        <div class="row ">
          <div v-if="!tournamentStarted && !isCancelled && !isFinished && !started"
            class="bg-pending col-12 d-flex justify-content-center align-items-center">
            <div>
              <p class="pending" style="font-style: italic;">Tournament Pending</p>
            </div>
          </div>
          <div v-else-if="started && !isFinished || tournamentStarted"
            class="bg-active d-flex justify-content-center align-items-center">
            <p style="font-style: italic;">Tournament live!</p>
          </div>
        </div>
        <!-- <div class="row bg-active">
          <div class="col-12 d-flex justify-content-center align-items-center">

          </div>
        </div> -->
        <div class="row bg-finished">
          <div class="col-12 d-flex justify-content-center align-items-center">
            <div v-if="tournament.isFinished">
              <p class="finished" style="font-style: italic;">Congratulations {{ first?.profile?.gamerTag }}</p>
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

    <!-- SECTION WHEN TOURNAMENT IS FINISHED SHOW THE WINNERS -->
    <div class="row">
      <div v-if="!isFinished" class="col-12 col-md-6 ">

        <!-- SECTION SHOW CURRENT PLAYERS WHILE TOURNAMENT IS NOT FINISHED -->
        <div v-if="isFinished" class="col-12">
          <div class=" mb-3 row justify-content-center text-center">
            <h1 class="">Active players</h1>
            <div class="col-3 mx-2" v-for="p in activePlayers" :key="p.id">
              <ParticipantCard :participant="p" />
            </div>
          </div>
          <div class="row text-center mb-3">
            <h1 class="fw-normal">Eliminated Players</h1>
            <div class="col-3" v-for="p in eliminatedPlayers" :key="p.id">
              <ParticipantCard :participant="p" />
            </div>
          </div>
          <div class="row text-center ">
            <h2 class="fw-normal ">Round {{ tournament.currentRound }} / {{ tournament.totalRounds }} </h2>

            <div class="col-md-6 text-center">
            </div>
          </div>

        </div>

      </div>
      <div v-else class="col-12 col-md-6 d-flex justify-content-around">
        <div>
          <p class="fs-3 text-center">Second place</p>
          <img :src="second?.profile?.picture" alt="" class="winner2">
          <p class="fs-3 text-center">{{ second?.profile?.gamerTag }}</p>
        </div>
        <div>
          <p class="fs-3 text-center">Third place</p>
          <img :src="third?.profile?.picture" alt="" class="winner2">
          <p class="fs-3 text-center">{{ third?.profile?.gamerTag }}</p>
        </div>

      </div>

      <div class="col-12 col-md-6 p-4 order-1 order-md-2">
        <img :src="tournament.gameImg" :alt="tournament.name" class="game-img rounded-2" style="" alt="">

        <div v-if="user.isAuthenticated && !isFinished" class="d-flex justify-content-evenly">
          <div>
            <div v-if="!isParticipant">
              <RGBButton class="px-2 rgb-btn" aria-label="JoinTournamentButton" buttonText="Join the Tournament!"
                @click="joinTournament" />
            </div>
            <div v-else-if="tournamentStarted">
              <RGBButton class="px-2 rgb-btn" buttonText="Leave Tournament!" @click="leaveTournament" />
            </div>
          </div>
          <div v-if="isTournamentCreator">
            <RGBButton class="px-2 rgb-btn" buttonText="Cancel Tournament" @click="cancelTournament" />
          </div>
          <div v-if="isTournamentCreator">
            <RGBButton class="px-2 rgb-btn" buttonText="Edit Tournament" data-bs-toggle="modal"
              data-bs-target="#editTournamentModal" />
            <div class="row justify-content-center">

              <!-- SECTION Tournament Edit Modal -->
              <div class="modal fade" id="editTournamentModal" tabindex="-1" aria-labelledby="editTournamentModal"
                aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="editTournamentLabel"></h1>
                      <p class="m-0 fs-1 text-dark">Edit Tournament</p>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body justify-content-center">
                      <form @submit.prevent="editTournament()" class="col-12">
                        <label class="edit-labels" for="text">Tournament Name</label>
                        <input class="form-control mb-3" type="text" placeholder="Tournament Name"
                          aria-label="tournament Name" v-model="editable.name">
                        <label class="edit-labels" for="text">Tournament Avatar Image</label>
                        <input class="form-control mb-3" type="text" id="tournamentAvatarImg"
                          aria-label="tournament Avatar" placeholder="Tournament Avatar Image"
                          v-model="editable.coverImg">
                        <label class="edit-labels" for="text">Tournament Cover Image</label>
                        <input class="form-control mb-3" type="text" id="gameImg" placeholder="Tournament Cover Image"
                          aria-label="tournament Cover Image" v-model="editable.gameImg">
                        <label class="edit-labels" for="text">Start Date</label>
                        <input type="datetime-local" name="startDate" class="form-control mb-3" placeholder="Start Date"
                          aria-label="Start Date" v-model="editable.startDate">
                        <label class="edit-labels" for="text">Location</label>
                        <input class="form-control mb-3" type="text" id="totalRounds" placeholder="Location"
                          aria-label="Location" v-model="editable.location">
                        <label class="edit-labels" for="text">Total Rounds</label>
                        <input class="form-control mb-3" type="text" id="totalRounds" placeholder="Total Rounds"
                          aria-label="Total Rounds" v-model="editable.totalRounds">
                        <label class="edit-labels" for="text">Capacity</label>
                        <input class="form-control mb-3" type="text" id="capacity" placeholder="Capacity"
                          aria-label="Capacity" v-model="editable.capacity">
                        <label class="edit-labels" for="text">Match Type</label>
                        <select class="form-select mb-3" aria-label="Tournament Type" v-model="editable.type"
                          style="background-color: white;">
                          <option class="text-dark" selected value="match" disabled>Match Type</option>
                          <option class="text-dark" value="online">Online</option>
                          <option class="text-dark" value="local">Local</option>
                        </select>
                        <label class="edit-labels" for="text">Tournament Description</label>
                        <textarea class="form-control mb-3" id="tournamentDescription" rows="3"
                          aria-label="tournament Description" placeholder="Tournament Description"
                          v-model="editable.description"></textarea>
                        <label class="edit-labels" for="text">Tournament Age Rating</label>
                        <select class="form-select mb-3" aria-label="Tournament Age Rating" v-model="editable.ageRating"
                          style="background-color: white;">

                          <option class="text-dark" value="Everyone">Everyone</option>
                          <option class="text-dark" value="Teen">Teen</option>
                          <option class="text-dark" value="Adult">Adult</option>
                        </select>
                        <label class="edit-labels" for="text label-">Max Teams</label>
                        <input class="form-control mb-3 bg-white" type="number" placeholder="Max Teams"
                          aria-label="max Teams" min="1" v-model="editable.maxTeams">
                        <label class="edit-labels" for="text">Tournament GP Prize</label>
                        <input class="form-control mb-3 bg-white" type="text" id="tournamentMoney"
                          placeholder="Tournament GP Prize" aria-label="Tournament Reward Coins"
                          v-model="editable.reward">
                        <label class="edit-labels" for="text">First Place Badge</label>
                        <input class="form-control mb-3 bg-white" type="text" id="firstPlaceBadge"
                          placeholder="First Place Badge" aria-label="First Place Badge"
                          v-model="editable.firstPlaceBadge">
                        <label class="edit-labels" for="text">Second Place Badge</label>
                        <input class="form-control mb-3 bg-white" type="text" id="secondPlaceBadge"
                          placeholder="Second Place Badge" aria-label="Second Place Badge"
                          v-model="editable.secondPlaceBadge">
                        <label class="edit-labels" for="text">Third Place Badge</label>
                        <input class="form-control mb-3 bg-white" type="text" id="thirdPlaceBadge"
                          placeholder="Third Place Badge" aria-label="Third Place Badge"
                          v-model="editable.thirdPlaceBadge">
                        <button class="btn btn-success text-end" type="submit" role="button">Save Edits</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  

    <!-- SECTION tournament management -->

    <div v-if="isTournamentCreator && !isFinished" class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="text-decoration-underline">Tournament Management</h1>
        </div>
      </div>
      
      <div class="row">
        <div class="col-7">
          <form>
            <div class="form-group" v-for="(participant, index) in participants" :key="participant.id">
              <div>
                <img v-if="participant.status != 'eliminated'" class="img-fluid pfp-manage"
                  :src="participant.profile.picture" alt="">
                <img v-else class="img-fluid pfp-manage player-eliminated" :src="participant.profile.picture" alt="">
                <h1 v-if="participant.status == 'active'" class="fs-5">{{ participant.profile.name }} - Tournament status
                  - <span class="text-success">{{ participant.status }}</span></h1>
                <h1 v-else-if="participant.status == 'eliminated'" class="fs-5">{{ participant.profile.name }} -
                  Tournament status - <span class="text-danger">{{ participant.status }}</span></h1>
                <h1 v-else class="fs-5">{{ participant.profile.name }} - Tournament status - <span class="text-success">{{
                  participant.status }}</span></h1>
              </div>
              <select v-if="lastRound" class="mb-3 form-control" v-model="participant.status" aria-label="player status">
                <option class="text-dark" value="active">Active</option>
                <option class="text-dark" value="eliminated">Eliminated</option>
                <option class="text-dark" value="first">First Place</option>
                <option class="text-dark" value="second">Second Place</option>
                <option class="text-dark" value="third">Third Place</option>
              </select>
              <label class="text-light">Distribute gpCoins</label>
              <div v-if="lastRound" class="input-group mb-2" aria-label="gp Coins">
                
                <input type="number" min="0" class="form-control" name="gpPoints" aria-label="Gp Coins"
                  v-model="participant.gpCoins">
              </div>
              <label class="text-white">Select a badge</label>
              <div v-if="lastRound" class="input-group mb-2">
                <select class="form-select" aria-label="badge awards" v-model="participant.badge">
                  <option value="">Select a badge to reward</option>
                  <option value="firstPlaceBadge">1st place badge</option>
                  <option value="secondPlaceBadge">2nd Place badge</option>
                  <option value="thirdPlaceBadge">3rd Place badge</option>
                  <option value="ruthlessBadge">Ruthless badge</option>
                  <option value="teamleaderBadge">Team leader badge</option>
                  <option value="coldBloodedBadge">Cold Blooded badge</option>
                  <option value="moneyBagsBadge">Money Bags badge</option>
                  <option value="topSponsorBadge">Top Sponsors badge</option>
                </select>
              </div>
            </div>
          </form>
        </div>
        <div class="col-5">
          <div>
            <h1>Round {{ tournament?.currentRound }} of {{ tournament?.totalRounds }}</h1>
          </div>
          <button @click="finalizeRound()" v-if="!lastRound" type="button" class="m-1 btn btn-success">Finalize
            Round</button>
          <button @click="finalizeTournament()" v-if="lastRound" type="button" class="m-1 btn btn-danger">Finalize
            Tournament</button>
          <div class="row">

          </div>
        </div>
      </div>
    </div>

    <!-- SECTION Comments -->
    <div class="row p-4 bg-dark justify-content-center">
      <h1 class="text-center pb-4">Tournament comments</h1>
      <div v-if="user.isAuthenticated" class="col-12 col-md-6 card p-1 px-3 rounded-3 elevation-5 comment-area"
        style="position: relative;">
        <form @submit.prevent="createComment()">
          <div class="d-flex align-items-center mb-2">
            <img :src="account.picture" :alt="account.name"
              class="img-fluid img-responsive object-fit-cover rounded-circle me-2 pfp" width="38"
              style="position: absolute; top: -46px; box-shadow: 0px 0px 1px 1px white;">
            <h3 style="position: absolute; top: -5px;left:100px;">{{ account.name }}</h3> <small
              class="text-white fw-normal mobile-post-comment"
              style="text-shadow: 1px 1px 1px black;position: absolute; top: 8px;right: 57px;">join the
              conversation</small>
          </div>
          <div class="text-end">
            <textarea style="margin-top: 20px;" v-model="commentData"
              class="text-area w-100 bg-light rounded-3 comment-box text-dark" aria-label="Text Area"></textarea>
            <RGBButton class="mobile-rgb" buttonText="Post Comment" type="submit" />
          </div>
        </form>
      </div>
    </div>
    <div class="row justify-content-center bg-dark">
      <div class="col-md-7" v-for="c in comments" :key="c.id">
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
import { watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import TournamentCountdown from '../components/TournamentCountdown.vue';
import RGBButton from '../components/RGBButton.vue';
import { commentsService } from "../services/CommentsService.js";
import { Modal } from 'bootstrap';
import ParticipantCard from "../components/ParticipantCard.vue";
import { Reward } from "../models/Reward.js";
import { rewardsService } from "../services/RewardsService.js";
// import isAuthenticated from '../services/AuthService'

export default {

  components: {
    TournamentCountdown,
    RGBButton,
    ParticipantCard
  },

  setup() {
    const commentData = ref('')
    const editable = ref({})
    const route = useRoute()
    const rewards = ref([])
    watchEffect(() => {
      editable.value = { ...AppState.activeTournament }

    })
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
        if (AppState.activeTournament.currentRound > 1) {
          AppState.activeTournament.started = true

        }


      } catch (error) {
        Pop.error(error)
      }

    }
    return {
      setActiveTournament,
      formatDateAndTime,
      cancelTournament,
      leaveTournament,
      joinTournament,
      commentData,
      route,
      editable,
      rewards,
      // FIXME add computed for appstate.rewards
      rewards: computed(() => AppState.rewards),
      started: computed(() => AppState.activeTournament.started),
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      tournament: computed(() => AppState.activeTournament),

      lastRound: computed(() => AppState.activeTournament.currentRound === AppState.activeTournament.totalRounds),
      participants: computed(() => AppState.participants),
      first: computed(() => {
       return AppState.participants.find(p => p.status === 'first')
      }),
      second: computed(() => {
        return AppState.participants.find(p => p.status === 'second')
      }),
      third: computed(() => {
        return AppState.participants.find(p => p.status === 'third')
      }),
      activePlayers: computed(() => {
        return AppState.participants.filter(p => p.status != 'eliminated')
      }),
      eliminatedPlayers: computed(() => {
        return AppState.participants.filter(p => p.status == 'eliminated')
      }),
      isCancelled: computed(() => AppState.activeTournament.isCancelled),
      isFinished: computed(() => AppState.activeTournament.isFinished),
      startDate: computed(() => {
        return formatDateAndTime(AppState.activeTournament?.startDate).formattedDate
      }),
      startTime: computed(() => {
        return formatDateAndTime(AppState.activeTournament.startDate).formattedTime
      }),
      isParticipant: computed(() => {

        if (AppState.myParticipations.find(p => p.tournamentId == AppState.activeTournament.id)) {
          return true;
        }
        return false
      }),
      isTournamentCreator: computed(() => {

        if (AppState.activeTournament.creatorId === AppState.account.id) {
          return true;
        }
        return false
      }),
      comments: computed(() => AppState.comments),
      async createComment() {
        try {
          const trimmedComment = commentData.value.trim();
          if (trimmedComment.length == 0) {
            Pop.toast("Comments must contain a body")
            return
          }
          const tournyId = route.params.tournamentId
          let comment = { body: trimmedComment, tournamentId: tournyId }

          commentsService.createComment(comment)
          commentData.value = ""
        } catch (error) {
          logger.log(error)
        }
      },
      tournamentStarted: computed(() => {
        const startDate = new Date(AppState.activeTournament.startDate)
        const currentDate = new Date()
        return startDate < currentDate
      }),
      // SECTION tournament management functions
      async finalizeRound() {
        try {
          if (await Pop.confirm(`This will advance the tournament to the next round. Please confirm all players status before accepting as you can not go back.`)) {

            const newRound = AppState.activeTournament.currentRound + 1
            AppState.activeTournament = await tournamentsService.editTournament(AppState.activeTournament.id, { currentRound: newRound })
            logger.log("[ACTIVE TOURNAMENT FROM FINALIZE ROUND]", AppState.activeTournament)
            await AppState.participants.forEach(p => {

              const participantUpdate = participantsService.updatePlayerStatus(p.id, { status: p.status })
              logger.log(participantUpdate)
              setActiveTournament()
            });
          }
        } catch (error) {
          logger.log(error);
        }
      },
      async finalizeTournament() {
        try {
          if (await Pop.confirm(`This will end the tournament and distribute tournament rewards to the top 3 players. Are your rewards assigned?`)) {
            await AppState.participants.forEach((p, i) => {
              const participantUpdate = participantsService.updatePlayerStatus(p.id, { status: p.status })
              logger.log(participantUpdate)
              if (p.status != 'eliminated' || 'active') {
                const tempReward = {
                  tournamentId: AppState.activeTournament.id,
                  recipientId: p.id,
                  accountId: AppState.account.id,
                  name: p.status,
                  gpCoins: p.gpCoins,
                  badge: p.badge
                }
                AppState.rewards.push(tempReward)
                // FIXME take this tempReward obj and POST to the API
                rewardsService.createReward(tempReward)
                

              }
              logger.log(AppState.rewards, '[APPSTATE REWARDS]')
            });
            AppState.activeTournament.isFinished = true
            const finishedTournament = await tournamentsService.editTournament(AppState.activeTournament.id, {isFinished: true})
            tournamentsService.setActiveTournament
            logger.log("[FINISHED TOURNAMENT DATA]", finishedTournament)
          }
        } catch (error) {
          logger.log(error);
        }
      },
      async editTournament() {
        try {
          const tournamentId = route.params.tournamentId;
          await tournamentsService.editTournament(tournamentId, editable.value)
          logger.log(editable.value)
          Modal.getOrCreateInstance('#editTournamentModal').hide()
        } catch (error) {
          Pop.error(error)
        }
      }
    }

    async function getParticipants() {
      try {
        await participantsService.getParticipants(route.params.tournamentId)
        AppState.participants.forEach(p => p.badge = "");
        AppState.participants.forEach(p => p.gpCoins = 0);
      } catch (error) {
        logger.log('[getting participants for this tournament]', error);
        Pop.error(error.message);
      }
    }
    async function cancelTournament() {
      try {
        if (await Pop.confirm('This will toggle the tournament cancellation. Are you sure you want to do this?')) {

          const cancelledTournament = await tournamentsService.cancelTournament(route.params.tournamentId)
          AppState.activeTournament.isCancelled = !AppState.activeTournament.isCancelled
          logger.log(cancelledTournament)
        }
      } catch (error) {
        logger.log(error);
      }
    }

    async function joinTournament() {
      try {

        if (AppState.account.id.length > 1) {
          const tourneyId = route.params.tournamentId
          const participant = await participantsService.createParticipant({ tournamentId: tourneyId })
          logger.log(participant)
          // await this.getParticipants()

        }
      } catch (error) {
        logger.log(error);
      }
    }
    async function leaveTournament() {
      try {
        const participant = AppState.myParticipations.find(p => p.tournamentId == AppState.activeTournament.id)
        await participantsService.leaveTournament(participant.id)
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
function formatDateAndTime(dateString) {

  const date = new Date(dateString);
  // Format date as MM/DD/YYYY
  const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  // Format time as regular 12-hour format
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const amPm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  const formattedTime = `${hours}:${minutes.toString().padStart(2, '0')} ${amPm}`;
  return { formattedDate, formattedTime };
}
</script>


<style scoped lang="scss">
.bg-background {
  background-color: #4a70e196;
}

.bg-details {
  background-color: #374466;
  filter: drop-shadow(0 0 15px 15px #152A6108);
  box-shadow: 0 0 15px #152A6108;
  animation: colorChange 15s infinite;
}

.comment-box {
  background-color: rgb(214, 210, 210);
}

.comment-area {
  background-color: #374466;
}

// SECTION management classes
.pfp {
  aspect-ratio: 1/1;
  min-width: 4rem;
}

.pfp-manage {
  aspect-ratio: 1;
  min-width: 5rem;
  min-height: 5rem;
  max-height: 5rem;
  max-width: 5rem;
  border-radius: 50%;
}

.player-eliminated {
  filter: grayscale(100%);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: aliceblue;
  text-shadow: 1px 1px 0 #000000;
}

p {
  color: aliceblue;
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
.winner{
  aspect-ratio: 1/1;
  min-width: 20rem;
  min-height: 20rem;
  max-width: 20rem;
  max-height: 20rem;
  border-radius: 3%;
}
.winner2{
  aspect-ratio: 1/1;
  min-width: 15rem;
  min-height: 15rem;
  max-width: 15rem;
  max-height: 15rem;
  border-radius: 3%;
}
.tournament-image {
  // padding-left: 5rem;
  // padding-right: 5rem;
  margin-left: auto;
  aspect-ratio: 1/1;
  min-height: 45vh;
  min-width: 40vw;
  max-height: 45vh;
  max-width: 40vw;
  border-radius: 3%;
}

.tournament-image:hover {
  filter: brightness(1.2);
  transition: 0.5s;
  box-shadow: 0px 0px 10px 10px #10a5a548;
}

.game-img {
  margin-left: 4rem;
  aspect-ratio: 1/1;
  min-height: 45vh;
  min-width: 40vw;
  max-height: 45vh;
  max-width: 40vw;
}

.game-img:hover {
  filter: brightness(1.2);
  transition: 0.5s;
  box-shadow: 0px 0px 10px 10px #10a5a548;
}

.bg-pending {
  color: #f0f0f0e9;
  font-size: 3rem;
  font-weight: 700;
  background-color: #ffb134;
  text-shadow: 0 3px 5px #000000;
  box-shadow: 0 0 50px 5px #ffb134;
  animation: pulsePending 3s infinite;
}

@keyframes pulsePending {
  0% {
    opacity: 0.5;
    box-shadow: 0 0 50px 5px #ffb134;
  }

  50% {
    opacity: 0.9;
    box-shadow: 0 0 60px 5px #ffb134;
    filter: brightness(1.3);
    color: #6eff9aea
  }

  100% {
    opacity: 0.5;
    box-shadow: 0 0 50px 5px #b17b25;
  }
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
  animation: pulseFinished 3s infinite;
}

@keyframes pulseFinished {
  0% {
    opacity: 0.5;
    box-shadow: 0 0 50px 5px #21d6ffd6;
  }

  50% {
    opacity: 0.9;
    box-shadow: 0 0 60px 5px #21d6ffd6;
    filter: brightness(1.3);
    color: #6eff9aea
  }

  100% {
    opacity: 0.5;
    box-shadow: 0 0 50px 5px #21d6ffd6;
  }
}

.bg-cancelled {
  color: #f0f0f0e9;
  font-size: 3rem;
  font-weight: 700;
  background-color: #9a0000d6;
  text-shadow: 0 3px 5px #000000;
  box-shadow: 0 0 50px 5px #9a0000d6;
  opacity: 0.8;
  animation: pulseCancelled 3s infinite;
}

@keyframes pulseCancelled {
  0% {
    opacity: 0.5;
    box-shadow: 0 0 50px 5px #9a0000d6;
  }

  50% {
    opacity: 0.9;
    box-shadow: 0 0 60px 5px #9a0000d6;
    filter: brightness(1.3);
    color: #6eff9aea
  }

  100% {
    opacity: 0.5;
    box-shadow: 0 0 50px 5px #9a0000d6;
  }
}


@keyframes pulse {
  0% {
    opacity: 0.5;
    box-shadow: 0 0 50px 5px #00ff4cd6;
  }

  50% {
    opacity: 0.9;
    box-shadow: 0 0 60px 5px #00ff4cea;
    filter: brightness(1.3);
    color: #6eff9aea
  }

  100% {
    opacity: 0.5;
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

.rgb-btn {
  width: 10vw;
  height: 3rem;
}

.edit-labels {
  color: black;
}

@media (max-width: 768px) {
  .finished{
    font-size: 40px;
  }
  .winner{
  aspect-ratio: 1/1;
  min-width: 15rem;
  min-height: 15rem;
  max-width: 15rem;
  max-height: 15rem;
  border-radius: 3%;
}
  .winner2{
  aspect-ratio: 1/1;
  min-width: 10rem;
  min-height: 10rem;
  max-width: 10rem;
  max-height: 10rem;
  border-radius: 3%;
}
  .mobile-results {
    margin-bottom: 0rem;
    padding-top: 6rem;
  }

  .rgb-btn {
    width: 100%;
  }

  .game-img {
    margin-left: auto;
    aspect-ratio: 1/1;
    min-height: 30vh;
    min-width: 90vw;
    max-height: 45vh;
    max-width: 40vw;
  }

  .tournament-image {
    display: none;
  }

  // .countdown-area{
  //   display: none;
  // }
  .details-top {
    margin-top: 0rem;
  }

  .mobile-rgb {
    width: 10rem;
  }

  .mobile-post-comment {
    display: none;
  }
}
</style>