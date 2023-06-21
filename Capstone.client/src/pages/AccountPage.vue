<template>
  <section v-if="account" class="container-fluid bg-main p-0">
    <div class="row justify-content-center align-items-center shadow elevation-5 bg-inner">
      <div>
          <div class="row">
            <div class="col-12 mx-auto">
          
              <!-- PROFILE START ( COPY / PASTE TO PROFILE PAGE ) -->
              <div class="shadow rounded overflow-hidden">
                <div class=" elevation-5 shadow-lg px-4 pt-0 pb-4" :style="{ background: `url(${account.coverImg})` }" style="background-position: center; background-size: cover; background- background-repeat: no-repeat; height: 50vh">
                  <div class="media align-items-end profile-header">
                    <div class="profile pt-5" style="margin-right: 25vw;">
                      <div class="row media-body pt-5 text-white">
                        <div class="col-3" style="position: absolute; top: 22rem;">
                          <img :src="account.picture" :alt="account.name" class="img-fluid profile-img" style="max-width: 150px; min-width:100px;">
                        </div>
                        <div class="col-3 name-tag" style="position: absolute; top: 25rem; left: 9.75rem;">
                          <h4 class="my-0 mx-4"> {{ account.name }} </h4>
                          <div class="row">
                            <div class="col-12">
                              <p class="small mb-4 mx-4 fs-6" style="font-weight: 550; font-style: italic; color: gold;"> <i class="mdi mdi-tag fs-5" style="color: gold;"></i> {{ account.gamerTag }} </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                      
                    <div class="col-md-3">
                      <button class="btn neon-button mt-5" style="position: absolute; top: 29rem; min-width: 10vw;" data-bs-toggle="modal" data-bs-target="#accountModal">Edit Account</button>
                        <div class="row justify-content-center">
          
                          <!-- Modal -->
                          <div class="modal fade" id="accountModal" tabindex="-1" aria-labelledby="accountModal" aria-hidden="true">
                              <div class="modal-dialog">
                              <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="editAccountLabel">Edit Account</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body justify-content-center">
                                    <form @submit.prevent="editAccount()" class="col-12">
                                      <input class="form-control mb-3" type="text" placeholder="Name" aria-label="name" v-model="editable.name">
                                      <input class="form-control mb-3" type="text" id="avatarImg" placeholder="Avatar Image" v-model="editable.picture">
                                      <input class="form-control mb-3" type="text" id="coverImg" placeholder="Cover Image" v-model="editable.coverImg">
                                      <div class="row mb-3">
                                        <div class="col-6">
                                          <input class="form-control" type="number" id="name" placeholder="Age" v-model="editable.age">
                                        </div>
                                        <div class="col-6">
                                          <input class="form-control" type="text" id="gamertag" placeholder="Gamertag" v-model="editable.gamerTag">
                                        </div>
                                      </div>
                                      <textarea class="form-control mb-3" id="bio" rows="3" placeholder="Bio" v-model="editable.bio"></textarea>
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

                <div class="d-flex justify-content-end text-center">
                  <ul class="list-inline social-tab mb-0 p-4 bg-filler">
                    <li class="list-inline-item">
                      <h5 class="font-weight-bold mb-0 d-block"> {{ myParticipations.length }} </h5><small class=""> <i class="mdi mdi-controller me-1"></i>Tournaments</small>
                    </li>
                    <li class="list-inline-item">
                      <h5 class="font-weight-bold d-block" style="">4K</h5><small class=""> <i class="mdi mdi-account-circle me-1"></i>Followers</small>
                    </li>
                  </ul>
                </div>

                <div class="bio-box">
                  <p class="ps-5 pt-5 pb-0" style="font-size: 2rem; font-weight: 600; color: aliceblue;"> {{ account.gamerTag }}'s Bio: </p>
                  <div class="p-5 mx-5 mb-5 bio">
                    <p> {{ account.bio }} </p>
                  </div>
                </div>

                <div class="py-4 px-4 mb-5">
                  <div class="d-flex align-items-center justify-content-between mb-3">
                    <h5 class="mt-5 tournament-header"> {{ account.name }}'s Tournaments:</h5>
                  </div>
                  <div class="row">

                    <!-- VISUALLY SHOWS TOURNAMENT CARDS FOR TOURNAMENTS THE ACCOUNT HOLDER IS ATTENDING -->
                  <section>
                    <div class="d-flex align-items-center">
                      <div class="col-md-3 col-12" v-for="p in myParticipations" :key="p.id">
                        <MyJoinedTournamentsCard :myParticipation="p"/>
                      </div>
                    </div>
                  </section>

                  </div>

                  <div class="py-4">
                    <h5 class="mb-3 comment-header">Recent posts</h5>
                    <div class="p-4 bg-comments rounded shadow-sm">
                      <div class="col-8 my-4" v-for="c in comments" :key="c.id">
                        <CommentCard :comment="c"/>
                      </div>
                      <p class="text-light" style="text-shadow: 1px 1px 4px #000000; font-weight: 550;">No more recent comments on tournaments.</p>
                      <ul class="list-inline small text-light mt-3 mb-0">
                        <li class="list-inline-item"><i class="mdi mdi-comment me-2 text-light"></i>12 Comments</li>
                        <li class="list-inline-item"><i class="mdi mdi-heart-plus me-2" style="color: red;"></i>200 Likes</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div><!-- END PROFILE ( COPY / PASTE TO PROFILE PAGE ) -->
          
            </div>
          </div>

      </div>
    </div>

  </section>
</template>

<script>
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState';
import { logger } from '../utils/Logger.js';
import {ref, watchEffect} from 'vue';
import MyJoinedTournamentsCard from '../components/MyJoinedTournamentsCard.vue';
import Pop from '../utils/Pop.js';
import { accountService } from '../services/AccountService.js';
import { useRoute } from "vue-router";
import CommentCard from '../components/CommentCard.vue'

export default {

  // props: {
  //   tournament: {
  //     type: Object,
  //     required: true
  //   },
  //   participant: {
  //     type: Object,
  //     required: true
  //   }
  // },

  components: {
    MyJoinedTournamentsCard, CommentCard
  },

    setup() {

      const route = useRoute();

      const editable = ref({})
      watchEffect(() => {
        editable.value = { ...AppState.account }
      })

      async function getAccountParticipations() {
          try {
            await accountService.getAccountParticipations()
          } catch (error) {
            logger.error(error);
            Pop.toast(error.message, `Error finding tournaments for ${AppState.account.name}`)
          }
        }

      onMounted(() => {
        getAccountParticipations();
      });

        return {
          editable,
          route,
          account: computed(() => AppState.account),
          tournaments: computed(() => AppState.activeTournament),
          // myTournaments: computed(() => AppState.myTournaments),
          comments: computed(() => AppState.comments),
          myParticipations: computed(() => AppState.myParticipations),
          isCancelled: computed(() => AppState.activeTournament.isCancelled),
          
          async editAccount(){
            try {
              logger.log(editable.value)
              await accountService.updateAccountInfo(editable.value)
              } catch (error) {
                Pop.error(error)
              }
            }
          };

    },
}
</script>

<style scoped lang="scss">

.bio {
  background-color: #2f395d76;
  color: aliceblue;
  font-weight: 550;
  text-shadow: 2px 2px 5px #000000;
  box-shadow: 0 0 10px 10px #38506e9f inset;
}

.bg-main {
  background-image: url(https://image.freepik.com/free-vector/gradient-neon-hexagonal-background_52683-61882.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #1f2937e3;
  box-shadow: 0 0 10px 10px #06080b9f;
}

.bg-inner {
  box-shadow: 0 0 10px 10px #06080b9f;
}

.bg-filler {
  background-color: #49678e7b;
  box-shadow: 0 0 10px 3px #1f2937e3 inset;
}

.tournament-header {
  color: aliceblue;
}

.comment-header {
  color: aliceblue;
}

.bg-comments {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #1f2937;
  box-shadow: 0 0 10px 10px #06080b9f;
}

.neon-button {
  animation: colorChange 15s infinite;
  border: 2px solid #00000000;
  color: white;
  background-color: #49bfffe7;
  text-shadow: 0 1px 1px #000000;
  filter: brightness(1.5);
  border: #71acff57 .125em solid;
  text-shadow: .5px .5px .125em #0f0044d3;
  box-shadow: 0 0 20px 1px #49bfffe7;
  animation: colorChange 20s infinite;
}

.neon-button::before {
  content: '';
  position: absolute;
  display: block;
  background: #2bbcff;
  top: 100%;
  left: -10%;
  width: 130%;
  height: 75%;
  transform: perspective(1em) rotateX(40deg) scale(1, .35);
  filter: blur(1em) brightness(1.5);
  animation: colorChange 20s infinite;
}

.my-tournaments {
  cursor: pointer;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
  text-shadow: 0 0 10px #01000066;
  border-radius: 0.5rem;
  opacity: 0.8;
  margin-bottom: 1rem;
}

.social-tab {
  color: aliceblue;
  text-shadow: 2px 2px 2px #010000;
}

img {
  max-width: 100px;
}

@keyframes colorChange {
  0% {
    background-color: #561287fd;
    box-shadow: 0 0 15px #152A6108;
  }

  25% {
    background-color: #123c86;
    box-shadow: 0 0 15px #30156143;
  }

  50% {
    background-color: #22112e;
    box-shadow: 0 0 15px #6a81ba3b;
  }

  75% {
    background-color: #124e86;
    box-shadow: 0 0 15px #106e932a;
  }

  100% {
    background-color: #561287fd;
    box-shadow: 0 0 15px #293c6d08;
  }
}

@media (max-width: 900px) {
  ul {
    margin-top: 7rem;
  }
  .profile-img {
    max-width: 20vw !important;
    margin-top: 3rem;
  }
  .neon-button {
    margin-top: 6rem !important;
    width: 20vw !important;
    
  }
}

@media (min-width: 1600px) {

  .profile-img {
    max-width: 10vw !important;
    margin-top: 3rem;
  }
  .neon-button {
    margin-top: 9rem !important;
  }
  .name-tag {
    margin-left: 3rem;
    margin-top: 5rem;
  }
}

</style>
