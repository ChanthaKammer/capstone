<template>
   <section class="container-fluid bg-background" 
   :style="{ background: `url(${activeProfile.coverImg})` || 'background-color: #4a70e196;' }">
      <div class="row justify-content-center pt-3 p-3">
         <div class="col-md-8 bg-dark text-white rounded-3">
            <div class="row justify-content-around p-3">
               <div class="col-md-6">
                  <img :src="activeProfile.picture" :alt="activeProfile.name" class="img-fluid">
                  <h3>Badges</h3>
                  <div class="row">
                     <!-- <div v-for="r in profileRewards" :key="r.id">
                        <Badge :badge="r"/>
                     </div> -->
                  </div>
               </div>
               <div class="col-md-6">
                  <h1>Name: {{ activeProfile.name }}</h1>
                  <h1>Gamertag: {{ activeProfile.gamerTag }}</h1>
                  <p>{{ activeProfile.bio }}</p>
               </div>
            </div>
         </div>
      </div>
      <div class="row justify-content-center pt-3 p-3">
         <div class="col-md-8 bg-dark text-white rounded-3">
            <h1 class="text-center">Participating Tournaments</h1>
         </div>
      </div>
      <div class="row justify-content-center">
         <div class="col-12 col-md-3 my-3" v-for="t in profileTournaments" :key="t.id">
            <TournamentCard :tournament="t" />
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
import Badge from '../components/Badge.vue';
import { useRoute } from 'vue-router';
import { tournamentsService } from '../services/TournamentsService.js';
import { profileService } from '../services/ProfileService.js'
import { onMounted } from 'vue';
import { computed } from 'vue';
import { participantsService } from '../services/ParticipantsService.js';
import { rewardsService } from '../services/RewardsService.js'
   export default {
      components: {
         TournamentCard,
         Badge
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
               logger.log(AppState.profileRewards)
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
.bg-background{
   background-color: #4a70e196;
}
</style>