<template>
  <section v-if="account" class="container-fluid bg-main">
    <div class="row justify-content-center align-items-center shadow elevation-5 bg-inner">
      <div>
          <div class="row">
            <div class="col-12 mx-auto">
          
              <!-- Profile widget -->
              <div class="bg-dark shadow rounded overflow-hidden">
                <div class="px-4 pt-0 pb-4 bg-dark" :style="{ background: `url(${account.coverImg})` }" style="background-position: center; background-size: cover; background-repeat: no-repeat; height: 40vh;">
                  <div class="media align-items-end profile-header">
                    <div class="profile pt-5" style="margin-right: 25vw;">
                      <div class="row media-body pt-5 text-white">
                        <div class="col-3" style="position: absolute; top: 22rem;">
                          <img :src="account.picture" :alt="account.name" class="img-fluid" style="min-width: 115px;">
                        </div>
                        <div class="col-3" style="position: absolute; top: 24rem; left: 9.75rem;">
                          <h4 class="my-0"> {{ account.name }} </h4>
                          <div class="row">
                            <div class="col-12">
                              <p class="small mb-4"> <i class="fa fa-map-marker"></i> {{ account.gamerTag }} </p>
                            </div>
                        </div>
                        </div>
                      </div>
                    </div>
                      
                    <div class="col-md-3">
                      <button class="btn btn-success mt-5" style="overflow: auto; white-space: nowrap; position: absolute; top: 26.5rem;" data-bs-toggle="modal" data-bs-target="#accountModal">Edit Account</button>
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
                                          <div class="col-6"><input class="form-control" type="number" id="name" placeholder="Age" v-model="editable.age"></div>
                                          <div class="col-6"><input class="form-control" type="text" id="gamertag" placeholder="Gamertag" v-model="editable.gamerTag"></div>
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
          
                <div class="bg-filler p-4 d-flex justify-content-end text-center">
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item">
                      <h5 class="font-weight-bold mb-0 d-block"> {{ myParticipations.length }} </h5><small class=""> <i class="fa fa-picture-o me-1"></i>Tournaments</small>
                    </li>
                    <li class="list-inline-item">
                      <h5 class="font-weight-bold mb-0 d-block">4K</h5><small class=""> <i class="fa fa-user-circle-o me-1"></i>Followers</small>
                    </li>
                  </ul>
                </div>

                <div class="bio-box">
                  <p class="ps-5 pt-5 pb-0" style="font-size: 2rem; font-weight: 600;">About</p>
                  <div class="p-5 mx-5 mb-5 bio">
                    <p> {{ account.bio }} </p>
                  </div>
                </div>
          
                <div class="py-4 px-4 mb-5">
                  <div class="d-flex align-items-center justify-content-between mb-3">
                    <h5 class="mt-5"> {{ account.name }}'s Tournaments:</h5>
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
                    <h5 class="mb-3">Recent posts</h5>
                    <div class="p-4 bg-light rounded shadow-sm">
                      <div class="col-8 offset-2 my-4" v-for="c in comments" :key="c.id">
                        <CommentCard :comment="c"/>
                      </div>
                      <ul class="list-inline small text-muted mt-3 mb-0">
                        <li class="list-inline-item"><i class="fa fa-comment-o me-2"></i>12 Comments</li>
                        <li class="list-inline-item"><i class="fa fa-heart-o me-2"></i>200 Likes</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div><!-- End profile widget -->
          
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
  background-color: #2f395d;
  color: #ffffff;
  font-weight: 550;
  text-shadow: 0 0 5px #000000;
  box-shadow: 0 0 10px 10px #49678e9f;
}

.bg-main {
  background-color: #1f2937e3;
  box-shadow: 0 0 10px 10px #06080b9f;
}

.bg-inner {
  box-shadow: 0 0 10px 10px #06080b9f;
}

.bg-filler {
  background-color: #49678e7b;
}

.my-tournaments {
  cursor: pointer;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
  text-shadow: 0 0 10px rgba(1, 0, 0, 0.4);
  border-radius: 0.5rem;
  opacity: 0.8;
  margin-bottom: 1rem;
}

img {
  max-width: 100px;
}

@media (max-width: 768px) {
  ul {
    margin-top: 7rem;
  }
  .bio-box {
    
  }
}

</style>
