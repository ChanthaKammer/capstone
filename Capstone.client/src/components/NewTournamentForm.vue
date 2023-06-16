<template>
   <button class="btn btn-success float-end" data-bs-toggle="modal" data-bs-target="#tournamentModal">Create Tournament</button>
   <div class="row justify-content-center">
      Modal
      <div class="modal fade" id="tournamentModal" tabindex="-1" aria-labelledby="tournamentModal" aria-hidden="true">
         <div class="modal-dialog">
         <div class="modal-content">
            <div class="modal-header">
               <h1 class="modal-title fs-5" id="createTournamentLabel">Create a Tournament</h1>
               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body justify-content-center">
               <div v-if="editable">
                  <form @submit.prevent="createTournament" class="col-12">
                     <input class="form-control mb-3" type="text" placeholder="Tournament Name" aria-label="tournamentName" v-model="editable.name">
                     <input class="form-control mb-3" type="text" id="tournamentAvatarImg" placeholder="Tournament Avatar Image" v-model="editable.avatarImg">
                     <input class="form-control mb-3" type="text" id="tournamentCoverImg" placeholder="Tournament Cover Image" v-model="editable.coverImg">
                     <input type="datetime-local" name="startDate" class="form-control" placeholder="Start Date" v-model="editable.startDate">
                     <div class="row mb-3">
                        <div class="col-6"><input class="form-control" type="text" id="tournamentCity" placeholder="City" v-model="editable.city"></div>
                        <div class="col-6"><input class="form-control" type="text" id="tournamentState" placeholder="State" v-model="editable.state"></div>
                     </div>
                     <select class="form-select mb-3" aria-label="Default select example" v-model="editable.type">
                        <option selected>Event Type</option>
                        <option value="Online">Online</option>
                        <option value="Local">Local</option>
                     </select>
                     <textarea class="form-control mb-3" id="tournamentDescription" rows="3" placeholder="Tournament Description" v-model="editable.description"></textarea>
                     <select class="form-select mb-3" aria-label="Default select example" v-model="editable.ageRating">
                        <option selected>Group Age Rating</option>
                        <option value="Everyone">Everyone</option>
                        <option value="Teen">Teen</option>
                        <option value="Adult">Adult</option>
                     </select>
                     <input class="form-control mb-3" type="number" placeholder="Max Teams" aria-label="maxTeams" min="1" v-model="editable.maxTeams">
                     <input class="form-control mb-3" type="text" id="tournamentMoney" placeholder="Tournament Money Prize" v-model="editable.reward">
                     <input class="form-control mb-3" type="text" id="firstPlaceBadge" placeholder="First Place Badge" v-model="editable.firstPlaceBadge">
                     <input class="form-control mb-3" type="text" id="secondPlaceBadge" placeholder="Second Place Badge" v-model="editable.secondPlaceBadge">
                     <input class="form-control mb-3" type="text" id="thirdPlaceBadge" placeholder="Third Place Badge" v-model="editable.thirdPlaceBadge">
                  <button class="btn btn-success text-end" type="submit" role="button">Create Event</button>
                  </form>
               </div>
            </div>
         </div>
         </div>
      </div>
   </div>

</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Modal } from "bootstrap";
import { tournamentsService } from "../services/TournamentsService.js";
import Pop from "../utils/Pop.js";

   export default {
      setup(){
         const editable = ref({});
         const router = useRouter();
         
         
         return {
            editable,
            async createTournament(){
               try {
                  const tournamentData = editable.value
                  const newTournament = await tournamentsService.createTournament(tournamentData)
                  Modal.getOrCreateInstance('#tournamentModal').hide()
                  editable.value = {}
                  router.push(
                     { name: 
                        'TournamentDetails', 
                       params: {
                         tournamentId: newTournament.id 
                        }}
                        )
               } catch (error) {
                  Pop.error(error)
               }
            },
            
         }
      }
   }

</script>


<style>

</style>