<template>
   <div class="row bg-dark rounded-3">
      <div class="col-md-6 pt-2 pb-2 px-2" style="">
         <img
            src="https://th.bing.com/th/id/R.f645b78e51a192cb4e9caa4aac6c0875?rik=ZTglhfD9mmwNIA&riu=http%3a%2f%2fcdn.collider.com%2fwp-content%2fuploads%2fgod-of-war-image.jpg&ehk=D%2bfse8wLp7FcFA%2bqBBv%2bCP0fIUGXa8YSkuFKGmU83yk%3d&risl=&pid=ImgRaw&r=0"
            class="img-fluid rounded-3" alt="...">
      </div>
      <div class="col-md-6 pt-2 align-self-center">
         <h1>{{ game.name }}</h1>
         <h1>{{game.released}}</h1>
         <h1>{{game.genre}}</h1>
         <button class="btn btn-success float-end" data-bs-toggle="modal" data-bs-target="#eventModal">Create
            Tournament</button>
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
         </div>
      </div>
   </div>
</template>

<script>
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
import { logger } from '../utils/Logger.js';
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


<style></style>