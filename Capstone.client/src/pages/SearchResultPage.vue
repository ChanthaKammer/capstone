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
                     <div class="row justify-content-center">
                        <!-- Modal -->
                        
                                 
                                       <NewTournamentForm />
                           
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
                        
                           
                 
                     </div>
                  </div>
               </div>

      </section>
</template>

<script>
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
import { logger } from '../utils/Logger.js';
import { useRoute } from "vue-router";
import { rawgService } from "../services/RawgService.js";
// import { tournamentsService } from "../services/TournamentsService.js"
import { computed } from "vue";
import NewTournamentForm from "../components/NewTournamentForm.vue"

   export default {

      components: {
         NewTournamentForm
      },

      setup() {

         const route = useRoute();
         // const router = useRouter();

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