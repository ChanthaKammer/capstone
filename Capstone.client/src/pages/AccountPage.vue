<template>
  <section v-if="account" class="container-fluid pt-3 bg-dark">
    <div class="row justify-content-center align-items-center">
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-4">
            <img :src="account.picture" :alt="account.name" class="img-fluid rounded-circle">
          </div>
          <div class="col-md-6">
            <div class="card bg-dark pt-4 welcome-fade">
              <div class="card-body text-center">
                <h5 class="card-title">User Account</h5>
                <div class="card-text">
                  <h5>Welcome back, {{ account.name }}</h5>
                  <h6>📩: {{ account.email }}</h6>

                  <!-- <h6>Tournaments Joined: {{ account.myParticipantCount }}</h6> -->
                  <h6>Comments: {{ account.myComments }}</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-2">
            <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#accountModal">Edit Account</button>
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

          
        
            <!-- VISUALLY SHOWS TOURNAMENT CARDS FOR TOURNAMENTS THE ACCOUNT HOLDER IS ATTENDING -->
            <section>

              <div class="d-flex justify-content-center align-items-center my-5">
                <h1 class=""> {{ account.name }}'s Tournaments:</h1>
              </div>
              <div class="d-flex justify-content-center align-items-center">
                <div class="col-md-6 col-12" v-for="p in myParticipations" :key="p.id">
                  <MyJoinedTournamentsCard :myParticipation="p"/>
                </div>
              </div>

            </section>

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
    MyJoinedTournamentsCard,
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
</style>
