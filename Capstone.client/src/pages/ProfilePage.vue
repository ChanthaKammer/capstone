<template>

   <section class="container-fluid bg-main">
      
      <div class="row">
         <div class="col-12 d-flex justify-content-center align-items-center">
            <img :src="activeProfile.coverImg" :alt="activeProfile.name" class="img-fluid profile-coverImg">
         </div>
      </div>

      <div class="row">
         <div class="col-3 d-flex align-items-center ms-5">
            <div class="card profile-card bg-filler p-1 mt-4" style="border: none; width: 12rem;">
               <img :src="activeProfile.picture" :alt="activeProfile.name" class="card-img-top profile-img" style="height: 12rem;">
               <div class="d-flex flex-column justify-content-center align-items-center" style="line-height: 35px;">
                 <p class="name-query my-0" style="text-shadow: 1px 1px 2px #000000; color: aliceblue; font-weight: 550;"> {{ activeProfile.name }} </p>
                 <p class="tag-query list-group-item small mb-3 fs-6"  style="line-height: 5px; font-weight: 550; font-style: italic; color: gold;"> <i class="mdi mdi-tag fs-5" style="color: gold;"></i> {{ activeProfile.gamerTag }} </p>
               </div>
             </div>
         </div>
      </div>

      <div class="d-flex justify-content-end text-center">
         <ul class="list-inline social-tab mb-0 mt-4 p-4 bg-filler" style="">
           <li class="list-inline-item">
             <h5 class="font-weight-bold mb-0 d-block"> {{ profileTournaments.length }} </h5><small class=""> <i class="mdi mdi-controller me-1"></i>Tournaments</small>
            </li>
         </ul>
      </div>

      <div class="bio mx-3" style="margin-top: 10rem;">
         <p class="ps-3 pt-4 pb-0" style="font-size: 2rem; font-weight: 600; color: aliceblue;"> {{ activeProfile.gamerTag }}'s Bio: </p>
         <div class="p-3 me-3 mb-5">
           <p> {{ activeProfile.bio }} </p>
         </div>
       </div>

      <div class="row">
         <div class="col-12 d-flex justify-content-center align-items-center p-3">
            <h3 style="color: aliceblue; text-shadow: 1px 1px 3px black;"><u>Badges Earned</u></h3>
            <div class="row">
               <div class="col-12">
                  <div v-for="r in profileRewards" :key="r.id">
                     <Badge :badge="r"/>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div class="row justify-content-center align-items-center pt-3" style="">
         <p class="col-12 d-flex justify-content-center align-items-center fs-3" style="color: aliceblue; text-shadow: 1px 1px 3px black;">Active Tournaments</p>
      </div>

      <div class="row bg-dark py-3 justify-content-center align-items-center">
         <div class="col-12 col-md-3 m-3" v-for="t in profileTournaments" :key="t.id">
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

* {
   --bs-gutter-x: 0px;
}
.bg-main {
   background-image: url(https://image.freepik.com/free-vector/gradient-neon-hexagonal-background_52683-61882.jpg);
   background-position: center;
   background-size: cover;
   background-repeat: no-repeat;
   background-color: #1f2937e3;
   box-shadow: 0 0 10px 10px #06080b9f;
   
 }
.profile-coverImg {
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
   height: 75vh;
   width: 100vw;
}
.profile-card {
   position: absolute;
   top: 31rem;
   left: 1rem;
   width: 10rem;
   aspect-ratio: 1/1;
   border: 2px double slateblue;
   border-radius: .5rem;
}
.bio {
   background-color: #2f395d76;
   color: aliceblue;
   font-weight: 550;
   text-shadow: 2px 2px 5px #000000;
   box-shadow: 0 0 10px 10px #38506e9f inset;
   border-radius: .5rem;
 }
 
 .bg-main {
   background-image: url(https://image.freepik.com/free-vector/gradient-neon-hexagonal-background_52683-61882.jpg);
   background-position: center;
   background-size: cover;
   background-repeat: no-repeat;
   background-color: #1f2937e3;
   box-shadow: 0 0 10px 10px #06080b9f;
 }
 
 .bg-inner {
   box-shadow: 0 0 10px 10px #06080b9f;
 }
 
 .bg-filler {
   background-color: #49678e7b;
 }
 
 .tournament-header {
   color: aliceblue;
 }
 
 .comment-header {
   color: aliceblue;
 }
 
 .bg-comments {
   background-position: center;
   background-size: cover;
   background-repeat: no-repeat;
   background-color: #1f2937;
   box-shadow: 0 0 10px 10px #06080b9f;
 }
 
 .neon-button {
   position: absolute;
   top: 6.5rem;
   right: 1rem;
   border: 2px solid #00000000;
   color: white;
   background-color: #49bfffe7;
   text-shadow: 0 1px 1px #000000;
   filter: brightness(1.5);
   border: #71acff57 .125em solid;
   text-shadow: .5px .5px .125em #0f0044d3;
   box-shadow: 0 0 20px 1px #49bfffe7;
   animation: colorChange 20s infinite;
 }
 
 .my-tournaments {
   cursor: pointer;
   text-overflow: ellipsis;
   overflow: hidden;
   cursor: pointer;
   text-shadow: 0 0 10px #01000066;
   border-radius: 0.5rem;
   opacity: 0.8;
   margin-bottom: 1rem;
 }
 
 .social-tab {
   color: aliceblue;
   text-shadow: 2px 2px 2px #010000;
   position: absolute;
   top: 41rem;
   right: 1rem;
   border-radius: .5rem;
 }
 
 @keyframes colorChange {
   0% {
     background-color: #561287fd;
     box-shadow: 0 0 15px #152A6108;
   }
 
   25% {
     background-color: #123c86;
     box-shadow: 0 0 15px #30156143;
   }
 
   50% {
     background-color: #22112e;
     box-shadow: 0 0 15px #6a81ba3b;
   }
 
   75% {
     background-color: #124e86;
     box-shadow: 0 0 15px #106e932a;
   }
 
   100% {
     background-color: #561287fd;
     box-shadow: 0 0 15px #293c6d08;
   }
 }
 
 @media screen and (max-width: 768px) {
   ul {
     padding: .5rem !important;
     border-radius: .5rem;
     
   }
   .profile-card {
     max-width: 25vw;
     max-height: 21vh;
     position: absolute;
     top: 20rem;
   }
   .profile-img {
     margin-top: .25rem !important;
     min-height: 5rem;
     max-height: 5rem;
     position: absolute;
   }
   .neon-button {
     font-size: .75rem;
     position: absolute;
     top: 12rem !important;

     min-width: 20vw;
   }
   .tag-query {
     font-size: .55rem !important;
   }
   .name-query {
     font-size: .85rem;
   }
 }
 
 @media (width: 412px) {
   ul {
     margin-top: 7rem;
   }
   .profile-card {
     max-width: 25vw !important;
     margin-top: 13rem !important;
   }
   .neon-button {
     margin-top: 8rem !important;
     width: 20vw !important;
   }
   .name-tag {
     margin-left: 2rem;
     margin-top: 3rem;
     white-space: nowrap;
   }
 }
 
 @media screen and (max-width: 500px) {
   ul {
     margin-top: 0;
     margin-right: .25rem;
   }
   .profile-img {
     max-width: 20vw !important;
     margin-top: 5rem;
     margin-left: .325rem;
   }
   .neon-button {
     margin-top: 0 !important;
     width: 20vw !important;
     white-space: nowrap;
     box-sizing: content-box;
   }
   .name-tag {
     margin-left: -3rem;
     margin-top: -1.5rem;
     white-space: nowrap;
   }
 
 }
</style>