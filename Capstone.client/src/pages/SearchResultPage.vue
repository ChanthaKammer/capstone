<template>
   <section v-if="game" class="container-fluid pt-3">
      <h1 class="text-center">Search Results</h1>
      <div class="row p-4">
         <div class="col-md-6 p-4">
            <div class="row bg-dark rounded-3">
               <div class="col-md-6 pt-2 pb-2 px-2" style="">
                  <img :src="game.backgroundImg" class="img-fluid rounded-3" :alt="game.name">
               </div>
               <div class="col-md-6 pt-2 align-self-center">
                     <h1> {{ game.name }} </h1>
                     <h1> {{ game.released }} </h1>
                     <h1> {{ game.genres }} </h1>
                     <button class="btn btn-success float-end" data-bs-toggle="modal" data-bs-target="#eventModal">Create Tournament</button>
                     <div class="row justify-content-center">
                        <!-- Modal -->
                        <div class="modal fade" id="eventModal" tabindex="-1" aria-labelledby="eventModal" aria-hidden="true">
                           <div class="modal-dialog">
                           <div class="modal-content">
                              <div class="modal-header">
                                 <h1 class="modal-title fs-5" id="createEventLabel">Create Tournament</h1>
                                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div class="modal-body justify-content-center">
                                 <form @submit.prevent="createEvent" class="col-12">
                                    <input class="form-control mb-3" type="text" placeholder="Tournament Name" aria-label="groupName">
                                    <input class="form-control mb-3" type="text" id="groupAvatarImage" placeholder="Game Image">
                                    <div class="row mb-3">
                                       <div class="col-6"><input class="form-control" type="text" id="tournamentCity" placeholder="City"></div>
                                       <div class="col-6"><input class="form-control" type="text" id="tournamentState" placeholder="State"></div>
                                    </div>
                                    <textarea class="form-control mb-3" id="exampleFormControlTextarea1" rows="3" placeholder="Tournament Description"></textarea>
                                    <select name="esrb_rating" id="esrb_rating" class="form-select mb-3" aria-label="Default select example" v-model="editable.esrb_rating">
                                       <option selected>Group Age Rating</option>
                                       <option value="Everyone">Everyone</option>
                                       <option value="Teen">Teen</option>
                                       <option value="Adult">Adult</option>
                                    </select>
                                    <input class="form-control mb-3" type="number" placeholder="Max Teams" aria-label="maxTeams" min="1" v-model="editable.capacity">
                                    <input class="form-control mb-3" type="text" id="tournamentMoney" placeholder="Tournament Money Prize">
                                 <button class="btn btn-success text-end" type="submit" role="button">Create Event</button>
                                 </form>
                              </div>
                           </div>
                           </div>
                        </div>
                     </div>
               </div>
            </div>
         </div>  
         <div class="col-md-6 p-4">
            <div class="row bg-dark rounded-3">
               <div class="col-md-6 pt-2 pb-2 px-2" style="">
                  <img src="https://th.bing.com/th/id/R.f645b78e51a192cb4e9caa4aac6c0875?rik=ZTglhfD9mmwNIA&riu=http%3a%2f%2fcdn.collider.com%2fwp-content%2fuploads%2fgod-of-war-image.jpg&ehk=D%2bfse8wLp7FcFA%2bqBBv%2bCP0fIUGXa8YSkuFKGmU83yk%3d&risl=&pid=ImgRaw&r=0" class="img-fluid rounded-3" alt="...">
               </div>
               <div class="col-md-6 pt-2 align-self-center">
                     <h1>Diablo 4</h1>
                     <h1>Released: 2017-04-04</h1>
                     <h1>Game Genre</h1>
                     <button class="btn btn-success float-end" data-bs-toggle="modal" data-bs-target="#eventModal">Create Tournament</button>
                     <div class="row justify-content-center">
                        <!-- Modal -->
                        <div class="modal fade" id="eventModal" tabindex="-1" aria-labelledby="eventModal" aria-hidden="true">
                           <div class="modal-dialog">
                           <div class="modal-content">
                              <div class="modal-header">
                                 <h1 class="modal-title fs-5" id="createEventLabel">Create an Event</h1>
                                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div class="modal-body justify-content-center">
                                 <form @submit.prevent="createEvent" class="col-12">
                                    <input class="form-control mb-3" type="text" placeholder="Tournament Name" aria-label="groupName">
                                    <input class="form-control mb-3" type="url" id="groupAvatarImage" placeholder="Tournament Avatar Image">
                                    <input class="form-control mb-3" type="url" id="coverImg" placeholder="Tournament Cover Image" v-model="editable.coverImg">
                                    <div class="row mb-3">
                                       <div class="col-6"><input class="form-control" type="text" id="location" placeholder="City" v-model="editable.location"></div>
                                       <div class="col-6"><input class="form-control" type="text" id="tournamentState" placeholder="State"></div>
                                    </div>
                                    <textarea class="form-control mb-3" id="exampleFormControlTextarea1" rows="3" placeholder="Tournament Description" v-model="editable.description"></textarea>
                                    <select class="form-select mb-3" aria-label="Default select example">
                                       <option selected>Group Age Rating</option>
                                       <option value="Everyone">Everyone</option>
                                       <option value="Teen">Teen</option>
                                       <option value="Adult">Adult</option>
                                    </select>
                                    <input class="form-control mb-3" type="number" placeholder="Max Teams" aria-label="maxTeams" min="1">
                                    <input class="form-control mb-3" type="text" id="tournamentMoney" placeholder="Tournament Money Prize">
                                 <button class="btn btn-success text-end" type="submit" role="button">Create Event</button>
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
   </section>
</template>

<script>
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
import { logger } from '../utils/Logger.js';
import { useRoute, useRouter } from "vue-router";
import { rawgService } from "../services/RawgService.js";
import { computed, ref } from "vue";
import { tournamentsService } from "../services/TournamentsService.js";
import { Modal } from "bootstrap";
   export default {
      setup() {

         //NOTE * * * 'editable = ref({});' NEEDS TO BE BROUGHT TO THE 'CreateTournamentForm.vue' COMPONENT * * *
         const editable = ref({});
         const route = useRoute();

         //NOTE * * * 'const router = useRouter();' NEEDS TO BE BROUGHT TO THE 'CreateTournamentForm.vue' COMPONENT * * *
         const router = useRouter();

         async function getDetailsBySlug() {
            try {
               logger.log(('[GETTING GAME BY SLUG]'))
               const slug = route.params.slug
               await rawgService.getDetailsBySlug(slug)
            } catch (error) {
               logger.error(error)
               Pop.toast(error.message, 'error')
            }
         }

         return {
            //NOTE * * * 'editable' AND 'async handleSubmit()' NEEDS TO BE 'RETURNED' IN THE 'CreateTournamentForm.vue' COMPONENT'S SETUP * * *
            editable,
            async handleSubmit() {
               try {
                  const tournamentData = editable.value
                  const newTournament = await tournamentsService.createTournament(tournamentData)
                  Modal.getOrCreateInstance
               } catch (error) {
                  logger.error(error)
                  Pop.toast(error.message, 'error')

               }
            }
            
            getDetailsBySlug,
            game: computed(() => AppState.games),
         }
      }
   }
</script>


<style>
* {
   border: 1px solid green;
}
</style>