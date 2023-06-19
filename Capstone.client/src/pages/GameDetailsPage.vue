<template>
   <section class="container-fluid" :style="{ backgroundImage: `url(${game?.background})` }">
      <div class="row justify-content-center pt-5">
         <div class="col-md-9 pt-3 bg-dark text-white rounded-3 animate-in">
            <div v-if="game" class="row">
               <div class="col-md-4 text-center">
                  <h1> {{ game.name }} </h1>
                  <img :src="game.coverImg" :alt="game.name" class="img-fluid">
                  <h1>4/5</h1>
               </div>
               <div class="col-md-4">
                  <p class="py-3"> {{ game.description }} </p>
                  <p role="button" v-if="user.isAuthenticated">
                     <NewTournamentForm />
                  </p>
               </div>
               <div class="col-md-4 text-center">
                  <p>Released</p>
                  <h2> {{ game.released }} </h2>
                  <p>Rated</p>
                  <h1> {{ game.esrb_rating }} </h1>
                  <p>Platforms</p>
                  <div class="row">
                     <div class="col-4">
                        <h2><i class="mdi mdi-microsoft-xbox" style="color: limegreen;"></i></h2>
                     </div>
                     <div class="col-4">
                        <h2><i class="mdi mdi-sony-playstation" style="color: dodgerblue;"></i></h2>
                     </div>
                     <div class="col-4">
                        <h2>PC</h2>
                     </div>
                  </div>
                  <div class="col-12">
                     <p>Genre</p>
                  </div>
                  <div class="row">
                     <div class="col-12">
                        <h2> {{ game.genres }} </h2>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <div class="polygon"></div>
<!-- 
   <section class="container-fluid">
      <div class="row justify-content-center pt-5">
         <div class="col-md-9 pt-3 bg-dark text-white rounded-3">
            <div v-if="game" class="row">
               <div class="col-md-4 text-center">
                  <h1> {{ game.name }} </h1>
                  <img :src="game.backgroundImg" :alt="game.name" class="img-fluid">
                  <h1>4/5</h1>
               </div>
               <div class="col-md-4">
                  <p> {{ game.description }} </p>
               </div>
               <div class="col-md-4 text-center">
                  <p>Released:</p>
                  <h2> {{ game.released }} </h2>
                  <p>Rated</p>
                  <h1> {{ game.rated }} </h1>
                  <p>Platforms: {{ game.platforms }} </p>
                  <div class="row">
                     <div class="col-6">
                        <h2><i class="mdi mdi-microsoft-xbox"></i></h2>
                     </div>
                     <div class="col-6">
                        <h2><i class="mdi mdi-sony-playstation"></i></h2>
                     </div>
                     <div class="col-6">
                        <h2>PC</h2>
                     </div>
                  </div>
                  <div class="row">
                     <p>Genre</p>
                     <div class="col-6">
                        <h2>Action {{ game.genre }} </h2>
                     </div>
                     <div class="col-6">
                        <h2>Adventure</h2>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section> -->
</template>

<script>
// import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
import { logger } from '../utils/Logger.js';
import { computed, onMounted } from "vue";
import NewTournamentForm from "../components/NewTournamentForm.vue"
import { rawgService } from "../services/RawgService.js";
import { useRoute } from "vue-router";

   export default {

      components: {
         NewTournamentForm
      },

      setup(){
         const route = useRoute();

         async function getGameDetails(){
            try {
               const gameSlug = route.params.slug
               await rawgService.getGameDetails(gameSlug)
            } catch (error) {
               logger.log(error);
            }
         }

         onMounted(() => {
            getGameDetails();
         })

         return {
            game: computed(() => AppState.activeGame),
            user: computed(() => AppState.user),
         }
      }
   }
</script>


<style lang="scss">

   .polygon {
      position: absolute;
      top: 11.9%;
      right: 12.5%;
      width: 30%;
      height: 41vh;
      background-color: #f0f0f019;
      background-size: cover;
      background-position: center;
      clip-path: polygon(25% 0, 100% 0, 100% 100%, 0% 100%);
      animation: fadeIn ease 2s;
   }

   .animate-in {
      animation: fadeIn ease 1s;
   }

   @keyframes fadeIn {
      0% {
         opacity:0;
         transform: scale3d(0, .5, .1);
         
      }
      100% {
         opacity:1;
         transform: scale3d(1, 1, 1);
         
      }
   }

   @media (min-width: 1440px) {
      .polygon {
         width: 30%;
         height: 46.6vh;
         top: 12%;
         right: 12.75vw;
      }
   }

   @media (max-width: 1440px) {
      .polygon {
         width: 30%;
         height: 46.5vh;
         top: 12%;
      }
   }

   @media (min-width: 1200px) {
      .polygon {
         width: 30%;
         height: 48.5vh;
         top: 13%;
      }
   }

   @media (max-width: 1200px) {
      .polygon {
         visibility: hidden;
      }
   }

   @media (max-width: 992px) {
      .polygon {
         visibility: hidden;
      }
   }

</style>