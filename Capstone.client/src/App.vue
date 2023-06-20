<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
    <div>
      
    </div>
</main>


  <footer class="row bg-black g-0 sticky-bottom " style="width: 100%;">
    <marquee behavior="scroll" direction="right" scrollamount="10" class="text-light" style="width: 100vw; font-size: 2rem; font-weight: 650; font-style: italic;">
      <img src="https://media.giphy.com/media/pjb1HPZ41i5BS/source.gif" class="img-fluid" style="max-height: 80px; margin-top" alt="mario">
      <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/75da5f11-dc9b-4dd7-a092-9002f227c0b1/dezhjhw-38d6e769-32d0-4277-8214-0ec75cdf4437.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc1ZGE1ZjExLWRjOWItNGRkNy1hMDkyLTkwMDJmMjI3YzBiMVwvZGV6aGpody0zOGQ2ZTc2OS0zMmQwLTQyNzctODIxNC0wZWM3NWNkZjQ0MzcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.veTdjyDx8JnMlKpmr6CFHw9bS1cB-wPkjP2RPRiBPLQ" class="img-fluid" style="max-height: 80px; margin-top" alt="mario"><img src="https://media.tenor.com/2lFt6lp1KaMAAAAi/run-pokemon.gif" class="img-fluid" style="max-height: 80px; margin-top" alt="mario">
    </marquee>
    <img src='../src/assets/img/mario-level.psd' class="" style="background-size: cover; background-repeat: norepeat; background-position: center; max-height: 50px; margin-bottom: 5rem;" alt="">
  </footer>

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
      </div>

</template>

<script>
import { computed, ref } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import { useRouter } from 'vue-router';
import { logger } from './utils/Logger.js';
import { tournamentsService } from './services/TournamentsService.js';
import { Modal } from 'bootstrap';
import Pop from './utils/Pop.js';


export default {
  setup() {
    const editable = ref({});
         const router = useRouter();
         
         
         return {
          appState: computed(() => AppState),
            editable,
            async createTournament(){
               try {
                  logger.log(editable.value)
                  editable.value.gameSlug = AppState.activeGame.slug
                  const newTournament = await tournamentsService.createTournament()
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
  },
  components: { Navbar}
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root{
  --main-height: calc(100vh - 32px - 64px);
}


footer {
  max-height: 80px;
}
</style>
