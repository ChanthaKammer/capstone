<template>
   <section class="container-fluid">
      <div class="row justify-content-center pt-3">
         <div class="col-md-8 bg-dark text-white rounded-3">
            <div class="row justify-content-around p-3">
               <div class="col-md-6">
                  <img src="" alt="" class="img-fluid">
                  <h3>Badges</h3>
                  <div class="row">
                     <h3 class="col-auto"><i class="mdi mdi-trophy" title="Trophy One"></i></h3>
                     <h3 class="col-auto"><i class="mdi mdi-trophy" title="Trophy Two"></i></h3>
                     <h3 class="col-auto"><i class="mdi mdi-trophy" title="Trophy Three"></i></h3>
                     <h3 class="col-auto"><i class="mdi mdi-trophy" title="Trophy Four"></i></h3>
                  </div>
               </div>
               <div class="col-md-6">
                  <h1>{{ activeProfile.name }}</h1>
                  <h1>{{ activeProfile.gamerTag }}</h1>
                  <h1>Platforms</h1>
                  <div class="row justify-content-center">
                     <div class="col-auto">
                        <h2><i class="mdi mdi-microsoft-xbox" style="color: limegreen;"></i></h2>
                     </div>
                     <div class="col-auto">
                        <h2><i class="mdi mdi-sony-playstation" style="color: dodgerblue;"></i></h2>
                     </div>
                     <div class="col-auto">
                        <h2>PC</h2>
                     </div>
                  </div>
                  <p>{{ activeProfile.bio }}</p>
               </div>
            </div>
         </div>
      </div>
      <div class="row justify-content-center pt-3">
         <div class="col-8 bg-dark text-white">
            <h1 class="text-center">Won Tournaments</h1>
            <h1>V-for Tournaments</h1>
         </div>
      </div>
   </section>
</template>

<!--Next tournament 

-->

<script>
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
import { logger } from '../utils/Logger.js';
import TournamentCard  from '../components/TournamentCard.vue'
import { useRoute } from 'vue-router';
import { tournamentsService } from '../services/TournamentsService.js';
import { profileService } from '../services/ProfileService.js'
import { onMounted } from 'vue';
import { computed } from '@vue/reactivity';
import { participantsService } from '../services/ParticipantsService.js';
import { rewardsService } from '../services/RewardsService.js'
   export default {
      components: {
         TournamentCard
      },
      setup(){
         const route = useRoute()

         async function getProfile(){
            try {
               const profileId = route.params.profileId
               await profileService.getProfile(profileId)
            } catch (error) {
               logger.error(error)
               Pop.toast(error.message, 'error')
            }
         }

         async function getProfileTournaments(){
            try {
               // logger.log('[GETTING TOURNAMENTS]')
               const profileId = route.params.profileId
               await tournamentsService.getProfileTournaments(profileId)
            } catch (error) {
               logger.error(error)
               Pop.toast(error.message, 'error')
            }
         }

         async function getProfileParticipants(){
            try {
               const profileId = route.params.profileId
               await participantsService.getProfileParticipants(profileId)
            } catch (error) {
               logger.error(error)
               Pop.toast(error.message, 'error')
            }
         }

         async function getProfileRewards(){
            try {
               const profileId = route.params.profileId
               await rewardsService.getProfileRewards(profileId)
            } catch (error) {
               logger.error(error)
               Pop.toast(error.message, 'error')
            }
         }
         
         onMounted(() => {
         getProfile(),
         getProfileTournaments(),
         getProfileParticipants(),
         getProfileRewards()
         })

         return {
            profileTournaments: computed(() => AppState.profileTournaments),
            activeProfile: computed(() => AppState.activeProfile),
            profileParticipants: computed(() => AppState.profileParticipants),
            profileRewards: computed(() => AppState.profileRewards)
         }
      }
   }
</script>


<style lang="scss" scoped>
   
</style>