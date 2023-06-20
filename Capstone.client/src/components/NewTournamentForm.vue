<template>
   <button class="btn modal-button" data-bs-toggle="modal" data-bs-target="#tournamentModal">Create New Tournament</button>
   <!-- <div class="row justify-content-center"> -->
      <!-- <div class="modal fade" id="tournamentModal" tabindex="-1" aria-labelledby="tournamentModal" aria-hidden="true">
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
                        <input class="form-control mb-3" type="text" id="tournamentAvatarImg" placeholder="Tournament Avatar Image" v-model="editable.coverImg">
                        <input class="form-control mb-3" type="text" id="gameImg" placeholder="Tournament Cover Image" v-model="editable.gameImg">
                        <input type="datetime-local" name="startDate" class="form-control" placeholder="Start Date" v-model="editable.startDate">
                        <div class="row mb-3">
                           <div class="col-6"><input class="form-control" type="text" id="tournamentCity" placeholder="City" v-model="editable.city"></div>
                           <div class="col-6"><input class="form-control" type="text" id="tournamentState" placeholder="State" v-model="editable.state"></div>
                        </div>
                        <select class="form-select mb-3" aria-label="Default select example" v-model="editable.type">
                           <option selected>Match Type</option>
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
                        <button class="btn btn-success text-end" type="submit" role="button">Create Tournament</button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div> -->
   <!-- </div> -->

</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Modal } from "bootstrap";
import { tournamentsService } from "../services/TournamentsService.js";
import Pop from "../utils/Pop.js";
import { logger } from "../utils/Logger.js";
import { AppState } from "../AppState.js";

   export default {
      setup(){
         // const editable = ref({});
         // const router = useRouter();
         
         
         // return {
         //    editable,
         //    async createTournament(){
         //       try {
         //          logger.log(editable.value)
         //          editable.value.gameSlug = AppState.activeGame.slug
         //          const newTournament = await tournamentsService.createTournament()
         //          Modal.getOrCreateInstance('#tournamentModal').hide()
         //          editable.value = {}
         //          router.push(
         //             { name: 
         //                'TournamentDetails', 
         //                params: {
         //                   tournamentId: newTournament.id 
         //                }}
         //                )
         //       } catch (error) {
         //          Pop.error(error)
         //       }
         //    },
            
         // }
      }
   }

</script>


<style scoped lang="scss">

/* CSS */
.modal-button {
  padding: 0.6em 2em;
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.modal-button:hover {
   box-shadow: 0 0 30px #fff;
   filter: brightness(1.2);
}

.modal-button:before {
  content: "";
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  -webkit-filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowingModalButton 20s linear infinite;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

@keyframes glowingModalButton {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}

.modal-button:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #222;
  left: 0;
  top: 0;
  border-radius: 10px;
}

</style>