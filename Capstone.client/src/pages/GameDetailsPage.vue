<template>
   <section class="container-fluid">
      <div class="row justify-content-center pt-5">
         <div class="col-md-9 pt-3 bg-dark text-white rounded-3 animate-in">
            <div v-if="game" class="row">
               <div class="col-md-4 text-center">
                  <h1> {{ game.name }} </h1>
                  <img src="https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png" class="img-fluid">
                  <h1>4/5</h1>
               </div>
               <div class="col-md-4">
                  <p class="py-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis id molestiae natus earum illum. Possimus enim tempore odio maxime fugiat! Sint eligendi voluptas laborum possimus!</p>
                  <p role="button" v-if="user.isAuthenticated">
                     <NewTournamentForm />
                  </p>
               </div>
               <div class="col-md-4 text-center">
                  <p>Released</p>
                  <h2>2013-09-17</h2>
                  <p>Rated</p>
                  <h1>M</h1>
                  <p>Platforms</p>
                  <div class="row">
                     <div class="col-4">
                        <h2><i class="mdi mdi-microsoft-xbox"></i></h2>
                     </div>
                     <div class="col-4">
                        <h2><i class="mdi mdi-sony-playstation"></i></h2>
                     </div>
                     <div class="col-4">
                        <h2>PC</h2>
                     </div>
                  </div>
                  <div class="col-12">
                     <p>Genre</p>
                  </div>
                  <div class="row">
                     <div class="col-6">
                        <h2>Action</h2>
                     </div>
                     <div class="col-6">
                        <h2>Adventure</h2>
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
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
import { logger } from '../utils/Logger.js';
import { computed } from "vue";
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
         return {
            game: computed(() => AppState.activeGame),
            user: computed(() => AppState.user),
         }
      }
   }
</script>


<style lang="scss">

   body{
      background-image: url("https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg");
   }

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
         top: 12%
      }
   }

   @media (max-width: 1440px) {
      .polygon {
         width: 30%;
         height: 46.5vh;
         top: 12%
      }
   }

   @media (min-width: 1200px) {
      .polygon {
         width: 30%;
         height: 46.5vh;
         top: 12%
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