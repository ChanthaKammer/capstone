<template>
   <div class="row bg-dark rounded-3 p-2 my-2">
      <div class="col-12 col-md-6" style="">
         <img :src="game.backgroundImg" class="img-fluid object-fit-cover rounded-3 p-3" style="height: 100%; aspect-ratio: 1/1;" :alt="game.name">
      </div>
      <div class="col-12 col-md-6 d-flex flex-column justify-content-around">
         <h2>{{ game.name }}</h2>
         <!-- <h6 class="mt-3"><em>Genre: {{ game.genres[0].name }}</em></h6> -->
         <h5 class="mt-5 mb-0">Released:</h5>
         <h3>{{ 
            new Date( game.released )
            .toLocaleDateString('en-US', {
               year: 'numeric', 
               month: 'short', 
               day: 'numeric'
            }) }}</h3>
         <router-link :to="{ name: 'GameDetails', params: { slug: game.slug } }">
            <button class="btn media-button p-1">
               Game Info
            </button>
         </router-link>

         <!-- <button class="btn btn-success float-end" data-bs-toggle="modal" data-bs-target="#tournamentModal">Create
            Tournament</button>
         <div class="row justify-content-center">
            <div class="modal fade" id="tournamentModal" tabindex="-1" aria-labelledby="tournamentModal"
               aria-hidden="true">
               <div class="modal-dialog">
                  <div class="modal-content">
                     <div class="modal-header">
                        <h1 class="modal-title fs-5" id="createTournamentLabel">Create an tournament</h1>
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
import { computed } from "vue";
import { Game } from "../models/Game.js";
import { ref } from "vue";
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


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');
* {
   color: rgb(194, 194, 194);
}

.media-button{
   font-family: 'Raleway', sans-serif;
   background-color: #050801;
   color: #03e9f4;
   font-weight: bold;
   border: none;
   border-radius: 5px;
   letter-spacing: 4px;
   overflow: hidden;
   transition: 0.5s;
   cursor: pointer;
}

.media-button:hover{
   background: #03e9f4;
   color: #050801;
   box-shadow: 0 0 5px #03e9f4,
               0 0 25px #03e9f4,
               0 0 50px #03e9f4,
               0 0 200px #03e9f4;
   -webkit-box-reflect:below 1px linear-gradient(transparent, rgba(0, 0, 0, 0.044));
}


@keyframes popIn {
   0% {
     transform: scale(0);
   }
 
   100% {
     transform: scale(1);
   }
 }

@media screen and (max-width: 768px) {
   // .media-button {
   //    position: relative;
   //    top: -13vh;
   //    left: 45vw;
   // }
}
</style>