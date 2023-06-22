<template>
   <section class="container-fluid bg-animate" :style="{ background: `url(${game?.background})` }" style="background-repeat: repeat; background-size: cover; height: 100vh;">
      <div class="row justify-content-center pt-5">
         <div class="col-md-9 pt-3 bg-dark text-white rounded-3 animate-in pt-4 pb-3 mobile-card" style="opacity: .9;">
            <div v-if="game" class="row">
               <div class="col-md-4 text-center">
                  <h1> {{ game.name }} </h1>
                  <img :src="game.coverImg" :alt="game.name" class="img-fluid">
                  <h1>  {{ game.rating }}/5</h1>
               </div>
               <div class="col-md-4">
                  <div class="card">
                     <h6 class="card-header text-center">Description</h6>
                     <span class="text-light p-2" style="overflow-y: auto; max-height: 38vh;"> {{ game.description }} </span>
                  </div>
                  <div class="p-2 pt-4 mobile-btn-area d-flex flex-column">
                     <p class="ps-2" style="font-style: italic; font-weight: 600;"><small>Think you're the world's top player?</small></p>
                     
                     <NewTournamentForm v-if="user.isAuthenticated"/>
                  </div>
               </div>
               <div class="col-md-4 text-center">
                  <div class="row card mx-3">
                     <p class="card-header">Platforms</p>
                     <div v-if="game.platforms?.length > 0" class="col-12 px-2" style="overflow-y: auto; max-height: 10vh;">
                        <div v-for="p in game.platforms" :key="p.platform">
                           <span class="card-body"> {{ p.platform.name }} </span>
                        </div>
                     </div>
                  </div>
                  <div class="row mt-4">
                     <div class="col-12 mt-1">
                        <h3 class="mb-0">Released:</h3>
                     </div>
                     <div class="col-12 px-2">
                        <p class="fs-2" style="font-weight: 600;"> {{ game.released }} </p>
                     </div>
                     <div class="col-12 mt-2 mb-0">
                        <h3 class="mt-2 mb-0">Rated:</h3>
                     </div> 
                     <div class="col-12 px-2">
                        <p class="fs-2" style="font-weight: 600;"> {{ game.esrb_rating }} </p>
                     </div>
                     <div class="col-12">
                        <h3 class="mt-2 mb-0">Genre:</h3>
                     </div>
                     <div class="col-12 px-2">
                        <p class="fs-2" style="font-weight: 600;"> {{ game.genres }} </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- <div class="polygon"></div> -->
   </section>

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

<style scoped lang="scss">

   .card {
      color: #fff;
      background-color: #f0f0f019;
      background-size: cover;
      background-position: center;
      border: 3px solid #ffffff20;
      border-radius: .5rem;
   }

   .card-header {
      background-color: #f0f0f057;
      border-bottom: 1px solid #fff;
      border-top-left-radius: .5rem;
      border-top-right-radius: .5rem;
   }

   ::-webkit-scrollbar {
      background-color: #2d288cc6;
      width: .85rem;
      border-radius: 0.25rem;
    }
    
    ::-webkit-scrollbar-thumb {
      background-color: #8b8b8b5f;
      border-radius: 0.25rem;
    }
    
    ::-webkit-scrollbar-track {
      background-color: rgba(32, 20, 12, 0.512);
      border-radius: 0.25rem;
      border-style: ridge; 
    }
    
    ::-webkit-scrollbar-corner {
      background-color: #2d288c;
      border-radius: 0.5rem;
      border-style: groove; 
    }

   .bg-animate {
      animation: move 300s ease-in-out infinite;
   }

   @keyframes move {
      0% {
         background-position: left top;
      }
      25% {
         background-position: right bottom;
      }
      50% {
         background-position: left bottom;
      }
      75% {
         background-position: right top;
      }
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
   @media (max-width: 768px) {
.mobile-card{
   margin-top: 3.2rem;
   // margin-bottom: 0rem;
}
// .mobile-btn-area{
   
   
// }
}
</style>