<template>
  <section v-if="account" class="container-fluid bg-main p-0">
    <div class="justify-content-center align-items-bottom shadow elevation-5 bg-inner">
      <div>

            <div class="col-md-12">
              <!-- PROFILE START ( COPY / PASTE TO PROFILE PAGE ) -->
              <div class="shadow rounded overflow-hidden">
                <div class="elevation-5 shadow-lg" :style="{ background: `url(${account.coverImg})` }" style="background-position: top; background-size: cover; background- background-repeat: no-repeat; height: 50vh">
                  <div class="container-fluid py-5">
                      <div class="row justify-content-center align-items-center p-5">
                        <div class="col-md-3 text-center text-white shadow-lg elevation-5 pt-3 bg-glass rounded-3" >
                          <img :src="account.picture" :alt="account.name" class="img-fluid object-fit-cover profile-img rounded" style="height:40%">
                          <h4 class="my-0" style="text-shadow:  1px 1px 1px black;"> {{ account.name }} </h4>
                          <p class="small fs-4" style="font-weight: 550; font-style: italic; color: gold;"> <i class="mdi mdi-tag fs-5" style="color: gold;"></i> {{ account.gamerTag }} </p>
                        </div>
                      </div>
                    <div class="col-md-3">
                      
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
                                      <label class="edit-labels" for="text">Name</label>
                                      <input class="form-control mb-3" type="text" placeholder="Name" aria-label="name" v-model="editable.name">
                                      <label class="edit-labels" for="text">Avatar Image</label>
                                      <input class="form-control mb-3" type="text" id="avatarImg" placeholder="Avatar Image" v-model="editable.picture">
                                      <label class="edit-labels" for="text">Cover Image</label>
                                      <input class="form-control mb-3" type="text" id="coverImg" placeholder="Cover Image" v-model="editable.coverImg">
                                      <div class="row mb-3">
                                        <div class="col-6">
                                          <label class="edit-labels" for="text">Age</label>
                                          <input class="form-control" type="number" id="name" placeholder="Age" v-model="editable.age">
                                        </div>
                                        <div class="col-6">
                                          <label class="edit-labels" for="text">Gamertag</label>
                                          <input class="form-control" type="text" id="gamertag" placeholder="Gamertag" v-model="editable.gamerTag">
                                        </div>
                                      </div>
                                      <label class="edit-labels" for="text">Bio</label>
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

                <div class="d-flex justify-content-between text-center p-3">
                  <ul class="list-inline social-tab mb-0 p-4 bg-filler" style="margin-right: 45px;margin-top: 20px;">
                    <li class="list-inline-item">
                      <h5 class="font-weight-bold mb-0 d-block"> {{ myParticipations.length }} </h5><small class=""> <i class="mdi mdi-controller me-1"></i>Tournaments</small>
                    </li>
                    <li class="list-inline-item">
                      <h5 class="font-weight-bold d-block" style="">4K</h5><small class=""> <i class="mdi mdi-account-circle me-1"></i>Followers</small>
                    </li>
                  </ul>
                  <button class="btn neon-button" style="" data-bs-toggle="modal" data-bs-target="#accountModal">Edit Account</button>
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
                  
                  <!-- VISUALLY SHOWS TOURNAMENT CARDS FOR TOURNAMENTS THE ACCOUNT HOLDER IS ATTENDING -->
                  <section>
                    <div class="row align-items-center">
                      <div class="col-12 col-md-4 col-lg-3 py-3" v-for="p in myParticipations" :key="p.id">
                        <MyJoinedTournamentsCard :myParticipation="p"/>
                      </div>
                    </div>
                  </section>


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

    <!-- STUB AFTER WE HAVE STORAGE FOR BADGES WE CAN REMOVE THIS. DIDN'T KNOW WHERE ELSE TO PLACE THEM TEMPORARILY OTHER THAN THEIR OWN PAGE. -->
    <section class="d-flex justify-content-center">
      <router-link :to="{name: 'About'}">
        <h1 class="selectable"><u><em>BADGES</em></u></h1>
      </router-link>
    </section>
  </section>



</template>

<script>
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState';
import { logger } from '../utils/Logger.js';
import { Modal } from "bootstrap";
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
              logger.log('edit account function',editable.value)
              await accountService.updateAccountInfo(editable.value)
              Modal.getOrCreateInstance('#accountModal').hide()
              
              } catch (error) {
                Pop.error(error)
              }
            }
          };

    },
}
</script>

<style scoped lang="scss">
.bg-glass{
  background-color: rgba(0, 0, 0, 0.314);
  backdrop-filter: blur(5px);
}
* {
  border: 0px solid green
}
.pfp-image{
  // max-width: 0rem;
}
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
  margin-left: 50px;
  margin-top: 60px;
  height: 3rem;
  min-width: 15vh;
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
 .profile-img {
    aspect-ratio: 1/1;
    max-width: 30vw;
    max-height: 30vh;
  }
@media screen and (max-width: 768px) {
  ul {
    margin-top: 7rem;
  }
  .profile-img {
    aspect-ratio: 1/1;
    max-width: 30vw;
    max-height: 30vh;
  }
  // .neon-button {
  //   margin-top: 6.5rem !important;
  //   width: 20vw !important;
  // }
  .name-tag {
    margin-left: 1rem;
    margin-top: 3rem;
    white-space: nowrap;
  }
}

@media (max-width: 900px) {
  ul {
    margin-top: 7rem;
  }
  
  // .neon-button {
  //   margin-top: 8rem !important;
  //   width: 20vw !important;
  // }
  .name-tag {
    margin-left: 2rem;
    margin-top: 3rem;
    white-space: nowrap;
  }
}

@media screen and (max-width: 500px) {
  ul {
    margin-top: 0;
    margin-right: .25rem;
  }
  
  // .neon-button {
  //   margin-top: 9rem !important;
  //   width: 20vw !important;
  //   white-space: nowrap;
  //   box-sizing: content-box;
  // }
  .name-tag {
    margin-left: -3rem;
    margin-top: -1.5rem;
    white-space: nowrap;
  }

}

@media (min-width: 1600px) {

  .profile-img {
    // max-width: 10vw !important;
    // margin-top: 3rem;
  }
  // .neon-button {
  //   margin-top: 9rem !important;
  // }
  .name-tag {
    margin-left: 3rem;
    margin-top: 5rem;
  }
}

</style>
