<template>
   <div class="row bg-dark rounded-3 p-2 my-2">
      <div class="col-md-6" style="">
         <img
            :src="game.backgroundImg"
            class="img-fluid rounded-3 p-3" alt="...">
      </div>
      <div class="col-md-6 pt-2 align-self-center">
         <h1>{{ game.name }}</h1>
         <h3>Released: {{game.released}}</h3>


         <div class="text-center">
            <router-link :to="{ name: 'GameDetails', params: { slug: game.slug } }">
               <button class="btn btn-success">
                  Game Info
               </button>
            </router-link>
         </div>
         
         <!-- <button class="btn btn-success float-end" data-bs-toggle="modal" data-bs-target="#tournamentModal">Create
            Tournament</button>
         <div class="row justify-content-center">
            <div class="modal fade" id="tournamentModal" tabindex="-1" aria-labelledby="tournamentModal" aria-hidden="true">
               <div class="modal-dialog">
                  <div class="modal-content">
                     <div class="modal-header">
                        <h1 class="modal-title fs-5" id="createTournamentLabel">Create a tournament</h1>
                        <h1 class="fs-5 bg-dark rounded-3 p-3"> {{ game.name }}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                     </div>
                     <div class="modal-body justify-content-center">
                        <form @submit.prevent="createTournament" class="col-12">
                           <input class="form-control mb-3" type="text" placeholder="Tournament Name"
                              aria-label="groupName">
                           <input class="form-control mb-3" type="text" id="groupAvatarImage"
                              placeholder="Tournament Avatar Image">
                           <input class="form-control mb-3" type="text" id="groupAvatarImage"
                              placeholder="Tournament Cover Image">
                           <div class="row mb-3">
                              <div class="col-6"><input class="form-control" type="text" id="tournamentCity"
                                    placeholder="City"></div>
                              <div class="col-6"><input class="form-control" type="text" id="tournamentState"
                                    placeholder="State"></div>
                           </div>
                           <textarea class="form-control mb-3" id="exampleFormControlTextarea1" rows="3"
                              placeholder="Tournament Description"></textarea>
                           <select class="form-select mb-3" aria-label="Default select example">
                              <option selected>Group Age Rating</option>
                              <option value="Everyone">Everyone</option>
                              <option value="Teen">Teen</option>
                              <option value="Adult">Adult</option>
                           </select>
                           <input class="form-control mb-3" type="number" placeholder="Max Teams" aria-label="maxTeams"
                              min="1">
                           <input class="form-control mb-3" type="text" id="tournamentMoney"
                              placeholder="Tournament Money Prize">
                           <button class="btn btn-success text-end" type="submit" role="button">Create Tournament</button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div> -->

      </div>
   </div>
</template>

<script>
// import Pop from '../utils/Pop.js';
// import { AppState } from '../AppState.js';
// import { logger } from '../utils/Logger.js';
import { Game } from "../models/Game.js";
export default {
   props: {
      game: { type: Game, required: true },
   },
   setup() {

      return {

      }
   }
}
</script>


<style scoped>
body{
   background-image: url()
}
</style>