<template>

  <section class="container-fluid bg-img g-0">
    <div class="row">
      <div v-if="!tournament.isCancelled" class="col-4 mt-4 text-light">
        <p class="ms-5 mt-1 mb-0 my-0" style="font-size: 5rem; font-weight: 750; font-style: italic;">LOCATION</p>
        <div class="row">
          <div class="col-12">
            <p class="ms-5 ps-3 mt-0 pb-3" style="font-size: 3.5rem; font-weight: 650; font-style: italic;"> {{ tournament.location }} </p>
            <p class="ms-5 ps-3 mt-2 mb-0" style="font-size: 2.75rem; font-weight: 650; font-style: italic;">ADDRESS</p>
            <p class="ms-5 ps-2 my-0" style="font-size: 2rem; font-weight: 650; font-style: italic;">1234 MAIN ST BOISE, ID</p>
          </div>
        </div>
      </div>
      <div class="col-8 pt-5 px-5 d-flex justify-content-end">
        <img src="https://res.cloudinary.com/teepublic/image/private/s--umyiOn8Z--/t_Preview/t_watermark_lock/b_rgb:262c3a,c_lpad,f_jpg,h_630,q_90,w_1200/v1607894822/production/designs/17315339_1.jpg" class="img-fluid pizza-img rounded-2 h-75 shadow-lg elevation-5" alt="PizzaImg">
      </div>
    </div>
    <div class="row bg-status">
      <div class="col-12 d-flex justify-content-center align-items-center">
        <p style="font-style: italic;">ACTIVE</p>
      </div>
    </div>
    <div class="row mb-2">
      <div class="col-12 col-md-6 order-2-sm text-light">
        <p class="ms-5 mt-4 mb-0 my-0" style="font-size: 4rem; font-weight: 750; font-style: italic;">TOP PLAYER</p>
        <div class="row ps-5">
          <div class="col-3">
            <i class="mdi mdi-account-circle" style="font-size: 9rem;"></i>
          </div>
          <div class="col-9">
            <div class="row">
              <div class="col-12">
                <p style="font-size: 3rem; font-weight: 750; font-style: italic;">Top Player Name</p>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <p style="font-size: 3rem; font-weight: 750; font-style: italic;">Top Player's Team</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row ms-5 ps-5">
          <div class="col-5 d-flex ps-5 ms-5">
            <p style="font-size: 2rem; font-weight: 650; font-style: italic;">Round 3/4</p>
          </div>
        </div>
        <div class="row">
          <div class="col-12 d-flex align-items-baseline">
            <i class="mdi mdi-account-multiple" style="font-size: 5rem; color: green;"></i>
            <i class="mdi mdi-account-multiple" style="font-size: 5rem; color: green;"></i>
            <i class="mdi mdi-account-multiple" style="font-size: 5rem; color: green;"></i>
            <i class="mdi mdi-account-multiple" style="font-size: 5rem; color: green;"></i>
            <i class="mdi mdi-account-multiple" style="font-size: 5rem; color: red;"></i>
            <i class="mdi mdi-account-multiple" style="font-size: 5rem; color: red;"></i>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 order-1-sm pt-5 pe-5">
        <img src="https://th.bing.com/th/id/OIP.W78c51LqpoCxKRIVJJIIXwHaEK?pid=ImgDet&w=3840&h=2160&rs=1" class="img-fluid starship-img rounded-2" style="min-width: 500px;" alt="StarShipCitizen">
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <div class="row justify-content-around p-4">
          <div class="col-3 text-center">
            <i class="mdi mdi-account-circle" style="font-size: 9rem;"></i>
            <h1>1st Place</h1>
          </div>
          <div class="col-6">
            <h1>Top Player Name</h1>
            <h1>Top Player Team</h1>
            <h1>Round 3/4</h1>
            <div class="row">
              <div class="col-12 d-flex align-items-baseline">
                <i class="mdi mdi-account-multiple" style="font-size: 3.5rem; color: green;"></i>
                <i class="mdi mdi-account-multiple" style="font-size: 3.5rem; color: green;"></i>
                <i class="mdi mdi-account-multiple" style="font-size: 3.5rem; color: green;"></i>
                <i class="mdi mdi-account-multiple" style="font-size: 3.5rem; color: green;"></i>
                <i class="mdi mdi-account-multiple" style="font-size: 3.5rem; color: red;"></i>
                <i class="mdi mdi-account-multiple" style="font-size: 3.5rem; color: red;"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6 p-4">
        <img src="https://th.bing.com/th/id/OIP.W78c51LqpoCxKRIVJJIIXwHaEK?pid=ImgDet&w=3840&h=2160&rs=1" class="img-fluid starship-img rounded-2" style="min-width: 500px;" alt="StarShipCitizen">
      </div>
    </div>
    <footer class="row bg-black g-0 sticky-bottom" style="width: 100%;">
      <marquee behavior="scroll" direction="right" scrollamount="10" class="text-light" style="width: 100vw; font-size: 2rem; font-weight: 650; font-style: italic;">
        <img src="https://media.giphy.com/media/pjb1HPZ41i5BS/source.gif" class="img-fluid" style="max-height: 50px;" alt="mario">
      </marquee>
    </footer>
  </section>

</template>

<script>

import { computed } from 'vue';
import { AppState } from '../AppState';
import { tournamentsService } from '../services/TournamentsService';
import { participantsService } from '../services/ParticipantsService';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';

export default {

setup() {
  
  return { 
    account: computed(() => AppState.account),
    tournament: computed(() => AppState.activeTournament),


    async joinTournament() {
      try {
        if(!AppState.account.id){
          throw new Error('Please log in to continue.')
        }
        let newParticipant = {
          tournamentId: AppState.activeTournament.id,
          accountId: AppState.account.id
        };
        await participantsService.create(newParticipant);
        AppState.activeTournament.capacity--;
        Pop.success(`${AppState.account.name} joined ${AppState.activeTournament.name}`)
        }
      catch (error) {
        logger.error('async function "joinTournament" was not successful.', error);
        Pop.error(error);
        }
    },
    async leaveTournament() {
      try {
        let eliminated = AppState.participants.find(p => p.accountId == AppState.account.id);
        await participantsService.leaveTournament(eliminated.id);
        AppState.activeTournament.capacity++;
        Pop.success('You left the lobby.')
        }
      catch (error) {
        logger.error('async function "leaveTournament" was not successful.', error);
        Pop.error(error);
      }
    },
    async cancelTournament() {
       try {
         let tournament = AppState.activeTournament
         await tournamentsService.cancelTournament(tournament.id)
         AppState.activeTournament.isCancelled = true
         Pop.success(`${tournament.name} has been cancelled`)
       } catch (error) {
         logger.error('async function "cancelTournament" was not successful.', error)
         Pop.error(error)
       }
     }
    
    
  };
},
}

</script>

<style scoped lang="scss">

.bg-img {
  background-image: url(https://th.bing.com/th/id/R.86e62bb1ffccef76ceac5690808e9bb0?rik=FSe9PVtGZLmmfw&pid=ImgRaw&r=0);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.pizza-img {
  opacity: .98;
  filter: brightness(1.2);
  animation: slideIn 2s forwards;
}

.starship-img:hover {
  filter: brightness(1.2);
  transition: 0.5s;
  box-shadow: 0px 0px 10px 10px #000000;
}

.bg-status {
  color: #f0f0f0e9;
  font-size: 3rem;
  font-weight: 700;
  background-color: #00ff4cd6;
  text-shadow: 0 3px 5px #000000;
  box-shadow: 0 0 50px 5px #00ff4cd6;
  animation: pulse 3s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 50px 5px #00ff4cd6;
  }
  50% {
    box-shadow: 0 0 60px 5px #00ff4cea;
    filter: brightness(1.3);
    color: #6eff9aea
  }
  100% {
    box-shadow: 0 0 50px 5px #00ff4cd6;
  }
}

@keyframes slideIn {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
}

</style>