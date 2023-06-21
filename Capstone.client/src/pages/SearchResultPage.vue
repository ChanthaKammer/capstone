<template>
   <section v-if="game" class="container-fluid pt-3 bg-background">
         <h1 class="text-center mobile-results">Search Results for "{{ query }}"</h1>
         <div class="row p-3 justify-content-around">
            <GameCard :game="g" class="col-md-5" v-for="g in games" :key="g.slug"/>
         </div>
         <div class="row justify-content-around py-2">
            <div class="col-4 card py-3 elevation-3 bg-dark">
               <div class="row justify-content-around">
                  <button class="col-auto btn btn-info" :disabled="!previouspage" @click="changePage(previouspage)">Previous</button>
                  <button class="col-auto btn btn-info" :disabled="!nextpage" @click="changePage(nextpage)">Next</button>
               </div>
            </div>
         </div>
      </section>                  
      <!-- <div class="row p-4">
         <div class="col-md-6 p-4">
            <div class="row rounded-3">
               <div class="col-md-6 pt-2 pb-2 px-2" style="">
                  <img :src="game.backgroundImg" class="img-fluid rounded-3" :alt="game.name">
               </div>
               <div class="col-md-6 pt-2 align-self-center">
                     <h1> {{ game.name }} </h1>
                     <h1> {{ game.released }} </h1>
                     <h1> {{ game.genres }} </h1>
                  <div class="row justify-content-center">
                     Modal
                     
                              
                                    
                        
                              </div>
                           </div>
                           </div>
         </div>
      </div> -->
                  <!-- <div class="col-md-6 p-4">
                     <div class="row bg-dark rounded-3">
                        <div class="col-md-6 pt-2 pb-2 px-2" style="">
                           <img src="https://th.bing.com/th/id/R.f645b78e51a192cb4e9caa4aac6c0875?rik=ZTglhfD9mmwNIA&riu=http%3a%2f%2fcdn.collider.com%2fwp-content%2fuploads%2fgod-of-war-image.jpg&ehk=D%2bfse8wLp7FcFA%2bqBBv%2bCP0fIUGXa8YSkuFKGmU83yk%3d&risl=&pid=ImgRaw&r=0" class="img-fluid rounded-3" alt="...">
                        </div>
                        <div class="col-md-6 pt-2 align-self-center">
                              <h1>Diablo 4</h1>
                              <h1>Released: 2017-04-04</h1>
                              <h1>Game Genre</h1> -->
</template>

<script>
// import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
// import { logger } from '../utils/Logger.js';
import { useRoute } from "vue-router";
import { rawgService } from "../services/RawgService.js";
// import { tournamentsService } from "../services/TournamentsService.js"
import { computed, onMounted } from "vue";
import GameCard from "../components/GameCard.vue"
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';

   export default {

      components: {
         GameCard
      },
      setup() {
         const route = useRoute();
         const query = route.params.query
         // const router = useRouter();

         // async function getDetailsBySlug() {
         //    try {
         //       logger.log(('[GETTING GAME BY SLUG]'))
         //       const slug = route.params.slug
         //       await rawgService.getDetailsBySlug(slug)
         //    } catch (error) {
         //       logger.error(error)
         //       Pop.toast(error.message, 'error')
         //    }
         // }
         async function searchGames(){
            await rawgService.searchGames(query)
         }
         onMounted(() => {
            searchGames()
         })
         return {
            // getDetailsBySlug,
            game: computed(()=> AppState.activeGame),
            games: computed(() => AppState.games),
            query: computed(() => route.params.query.split('+').join(" ")),
            nextpage: computed(() => AppState.nextPage),
            previouspage: computed(() => AppState.previousPage),
            async changePage(direction){
               try {
                  await rawgService.changePage(direction)
                  window.scrollTo({
                     top: 0,
                     behavior: 'smooth'
                  });
               } catch (error) {
                  Pop.error
               }
            }
         }
      }
   }
   
</script>


<style>
.bg-background{
   background-color: #374466;
   filter: drop-shadow(0 0 15px 15px #152A6108);
   box-shadow: 0 0 15px #152A6108;
   animation: colorChange 15s infinite;
}
@media (max-width: 768px) {
 
  .mobile-results { 
    margin-top: 5rem;
    margin-bottom: -1rem;
  }
}
</style>