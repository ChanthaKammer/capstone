<template>
  <section class="container-fluid bg-background">

    <!-- <section class="row bg-navbar justify-content-center align-items-center" style="height: 20px;">

    </section> -->

    <section class="row bg-nav-options shadow nav-bar2 py-3" style="text-shadow: 2px 2px 3px #000000;">
      <div class="col-12 d-flex justify-content-center align-items-center">
        <h2 class="text-white mt-3">FEATURED TOURNAMENTS</h2>
      </div>
      <!-- <div class="col-1" style="border-right: 5px double #ffffff99;"></div>
      <div class="col-3 d-flex justify-content-center align-items-center">
        <h2 class="text-white mt-3">HOST</h2>
      </div>
      <div class="col-1" style="border-left: 5px double #ffffff99;"></div>
      <div class="col-3 ps-5 d-flex justify-content-center align-items-center">
        <h2 class="text-white mt-3">COMPETE</h2>
      </div> -->
    </section>


    <!-- <section class="row bg-nav-accent">
    </section> -->

    <!-- SECTION my tournaments -->
    <section class="row">
      <div class="col-12">
        <h3 class="ps-5 fw-bold"></h3>
      </div>
    </section>

    <!-- SECTION filter buttons -->
    <!-- <div class="d-flex justify-content-around my-3 bg-categories rounded p-3">
          <button @click="filterBy = ''" class="btn btn-outline-light w-25 mx-2">All</button>
          <button @click="filterBy = 'online'" class="btn btn-outline-light w-25 mx-2">Online</button>
          <button @click="filterBy = 'local'" class="btn btn-outline-light w-25 mx-2">Local</button>
        </div>
      </section> -->

    <section class="row">
      <div class="col-12 bg-carousel justify-content-center align-items-center shadow-lg elevation-5">
        <Carousel ref="homeCarousel" :itemsToShow="3.95" :wrapAround="true" :transition="500" class="">
          <Slide v-for="slide in carouselTournaments" :key="slide" class="">
            <router-link :to="{name: 'TournamentDetails', params: {tournamentId: slide.id}}">
              <div> {{ slide.name }} </div>
              <div class="carousel__item"><img :src="slide.coverImg" alt=""></div>
            </router-link>
          </Slide>
        </Carousel>
      </div>
    </section>

        <!-- <HomeCarousel/> -->

        <!-- #region -->
        <!-- NOTE BACKGROUND BORDER FOR CAROUSEL ----------------------------->
        
<!-- #endregion -->

    <!-- SECTION CAROUSEL FOR 'MOST POPULAR' TOURNAMENTS BY SELECTABLE COVER IMAGE ***END*** ------------------------------>











    <div class="row accent-row d-flex mb-5 pb-2 pt-2" style="height: 4rem;">
    
      <div class="col-6 col-md-6 d-flex justify-content-center" style="position: absolute; top: -1.5rem; left: 0;">
        <button type="button" class="btn btn-info neon-button me-5" style="width: 10vw;" @click="homeCarousel.prev()">Previous Slide</button>
      </div>

      <div class="col-6 col-md-6 d-flex justify-content-center" style="position: absolute; top: -1.5rem; right: 0;">
        <button type="button" class="btn btn-info neon-button ms-5" style="width: 10vw;" @click="homeCarousel.next()">Next Slide</button>
      </div>

    </div>

        <!-- TODO GIVE THESE BUTTONS A ROUTE ONCE WE HAVE A USE FOR THEM --------------------------------------------->
        <!-- #region -->
          <!-- <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown"
            aria-expanded="false">
            <span class="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
          </ul> -->
          
          <!-- TODO GIVE THESE BUTTONS A ROUTE ONCE WE HAVE A USE FOR THEM --------------------------------------------->
          <!-- <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown"
            aria-expanded="false">
            <span class="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
          </ul> -->
        <!-- #endregion -->
        
    <!-- SECTION my tournaments -->
    <section class="row pt-1 lighting-bar">

      <!-- SECTION filter buttons -->
      <div class="d-flex justify-content-around my-3 bg-categories rounded p-3">
        <button @click="filterBy = ''" class="btn btn-outline-light w-25 mx-2">All</button>
        <button @click="filterBy = 'online'" class="btn btn-outline-light w-25 mx-2">Online</button>
        <button @click="filterBy = 'local'" class="btn btn-outline-light w-25 mx-2">Local</button>
      </div>
    </section>
    <!-- NOTE GAME INFO / DETAIL CARDS ------------------------------------------------------->
    <section class="row justify-content-center align-items-center accent-row px-2 pb-2">
      <div class="col-12 col-md-3 my-3" v-for="t in tournaments" :key="t.id">
        <!-- STUB Tournament Cards ------>
        <TournamentCard :tournament="t" />
      </div>
    </section>
  </section>

  <section>

    <!-- NOTE MEETUP / TOURNAMENT CARDS -->

  </section>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { tournamentsService } from '../services/TournamentsService.js'
import { logger } from '../utils/Logger.js'
import Pop from '../utils/Pop.js'
import { AppState } from '../AppState.js'
import TournamentCard from '../components/TournamentCard.vue'
// import HomeCarousel from '../components/HomeCarousel.vue'
import { Carousel,Slide } from 'vue3-carousel'

export default {

  name: 'HomePage',

  components: {
    TournamentCard,
    // HomeCarousel,
    Carousel,
    Slide,
  },

  setup() {

    const filterBy = ref('')
    const homeCarousel = ref(null)

    //NOTE If we want to randomize between an array of set background colors / images this is how we can do that
    // async getTournamentBg() {
    //   try {
    //     logger.log('getting tournament bg')
    //     await tournamentsService.getTournamentBg()
    //   } catch (error) {
    //     Pop.error(error.message)
    //     logger.log(error)
    //   }
    // }

    async function getAllTournaments() {
      try {
        logger.log('[GETTING TOURNAMENTS]')
        await tournamentsService.getAllTournaments()
      } catch (error) {
        Pop.error(error.message)
        logger.log(error)
      }
    }

    onMounted(() => {
      getAllTournaments()
    })


    return {
      filterBy,
      homeCarousel,
      tournament: computed(() => AppState.activeTournament),
      carouselTournaments: computed(()=>AppState.tournaments),
      tournaments: computed(() => {
        if (filterBy.value == '') {
          return AppState.tournaments
        } else {
          return AppState.tournaments.filter(
            t => filterBy.value ?
              t.type == filterBy.value : true
          )
        }
      }),
    }
  }
};

</script>

<style scoped lang="scss">
.btn-group {
  opacity: .8;
  animation: colorChange 15s infinite;
  border: 2px solid #00000000;
  color: white;
  text-shadow: 0 1px 1px #000000;
  filter: brightness(1.5);
}

.bg-background {
  background-color: #374466;
  filter: drop-shadow(0 0 15px 15px #152A6108);
  box-shadow: 0 0 15px #152A6108;
  animation: colorChange 15s infinite;
}

.bg-nav-options {
  background-color: #0e2241;
  filter: drop-shadow(0 0 15px 15px #0e224170);
  box-shadow: 0 15px 15px #0e2241;
}

.bg-nav-accent {
  color: #ffffff;
  background-color: #1a407a4d;
  filter: drop-shadow(0 0 15px 15px #1A417A70);
  box-shadow: 0 0 15px 15px #1A417A70;
}

.bg-carousel {
  border-top: 3px solid black;
  margin-top: .5rem;
  padding-bottom: 6rem;
  animation: colorChange2 30s infinite;
}

.caption-text-1 {
  color: #000000;
  text-decoration: 3px solid red;
  text-shadow: 0 3px 3px #ff9c9c;
  animation: fadeIn 1.5s forwards;
}

.caption-text-2 {
  color: #32c1f5fe;
  text-decoration: 3px solid #000000;
  text-shadow: 0 3px 3px #130324;
  animation: fadeIn 1.5s forwards;
}

.caption-text-3 {
  color: #b9b9b9;
  text-shadow: 0 3px 3px #a80000;
  animation: fadeIn 1.5s forwards;
}

.neon-button,
.dropdown-toggle {
  color: #000000;
  border: #71acff57 .125em solid;
  text-shadow: .5px .5px .125rem #14005e;
  box-shadow: 0 0 20px 1px #49bfffe7;
  animation: pulse 3s infinite;
}

.neon-button::before {
  content: '';
  position: absolute;
  display: block;
  background: #2bbcff;
  top: 120%;
  right: -15%;
  width: 130%;
  height: 100%;
  transform: perspective(1em) rotateX(40deg) scale(1, .35);
  filter: blur(1em);
}

.bg-games {
  background-color: #34265599;
  filter: drop-shadow(0 0 15px 15px #4EFE7F90);
  opacity: .85;
  box-shadow: 0px 0px 30px 30px inset #000000;
}

.game-img {
  aspect-ratio: 1/.5;
  box-shadow: 0 0 15px 15px #000000;
  filter: drop-shadow(0 0 15px 15px #000000);
}

.accent-row {
  background-color: #1f5b7b45;
  box-shadow: 0px 0px 150px 15px inset outset #1a407a;
  filter: drop-shadow(0px 0px 30px #682f2f);
  border-top: 5px double #1a407a;
  border-bottom: 5px double #1a407a;
  border-style: inset groove;
}

.card-custom {
  color: #efefef;
  text-shadow: 0 1px 5px #998ce2;
  overflow: hidden;
  min-height: 450px;
  background-color: #0a0b14f3;
  box-shadow: 0 0 15px rgba(10, 10, 10, 0.3);
  transition: .5 ease-in-out;
}

.card-custom-img {
  height: 200px;
  min-height: 200px;
  background-color: #00000090;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: .8;
  filter: brightness(1.3);
  border-color: inherit;
}

/* First border-left-width setting is a fallback */
.card-custom-img::after {
  position: absolute;
  content: '';
  top: 161px;
  left: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-top-width: 40px;
  border-right-width: 0;
  border-bottom-width: 0;
  border-left-width: 545px;
  border-left-width: calc(575px - 5vw);
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-left-color: #0b0d12ef;
}

.card-custom-avatar img {
  border-radius: 50%;
  box-shadow: 0 0 15px #0a0a0a9a;
  border: solid 3px black;
  position: absolute;
  top: 100px;
  left: 1.25rem;
  width: 100px;
  height: 100px;
}

.card-custom:hover {
  transform: scale(1.01);
  filter: brightness(1.1);
  transition: .5s ease-in-out;
}

.battle-card {
  background-image: url(https://wallpaper.dog/large/20391959.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border: 2px solid #00000000;
  border-radius: .25rem;
  filter: drop-shadow(0 0 15px 15px #000000);
  margin-right: 23.5rem;
  box-shadow: 0 0 15px #000000;
  transition: 1s ease-in-out;
}

.battle-card:hover {
  transform: scale(1.01);
  filter: brightness(1.1);
  animation: returnMargin 1s forwards;
  transition: 1s ease-in-out;
}

@keyframes returnMargin {
  0% {
    margin-right: 23.5rem;
  }

  100% {
    margin-right: 0rem;
  }
}

@keyframes returnUserMargin {
  0% {
    margin-left: -1.5rem;
  }

  100% {
    margin-left: 0rem;
    color: #18113e;
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 20px 1px #49bfffe7;
  }

  50% {
    box-shadow: 0 0 40px 2px #49bfffe7;
    filter: brightness(1.3);
  }

  100% {
    box-shadow: 0 0 20px 1px #49bfffe7;
  }
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

.bg-games-info {
  background-color: #BFBFBF60;
}

.bg-footer {
  background-color: #152A6108;
  filter: drop-shadow(0 0 15px 15px #152A6108);
  box-shadow: 0 0 15px #152A6108;
  width: 100vw;
  place-content: center;
  height: 32px;
}

.info-header {
  background-color: D9D9D9;
  border: 14px solid #2f486d4a;
  border-top-left-radius: .5rem;
  border-top-right-radius: .5rem;
  border-bottom-left-radius: .25rem;
  border-bottom-right-radius: .25rem;
  filter: drop-shadow(0 0 6px #242a31);
}

.info-card {
  background-color: #00000005;
}

.info-body {
  fill: #000000;
  border: .7rem solid #00000020;
  border-bottom-left-radius: .75rem;
  border-bottom-right-radius: .75rem;
  filter: drop-shadow(0 0 6px #000000);
}

.info-textbox {
  font-size: .95rem;
  font-weight: 600;
  line-height: 1.4;
  color: #000000;
  text-shadow: 2px 4px 3px #152A6129;
}


@keyframes colorChange {
  0% {
    background-color: #374466;
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
    background-color: #374466;
    box-shadow: 0 0 15px #293c6d08;
  }
}

@keyframes colorChange2 {
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

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  50% {
    opacity: .5;
  }

  100% {
    opacity: 1;
  }
}

.neon-btn-one {
  position: absolute;
  top: -3.5vh;
  left: 19.5%;
  max-width: fit-content;
}

@media (max-width: 768px) {
  .card-custom-img::after {
    border-top-width: 20px;
    border-left-width: 300px;
    border-left-width: calc(300px - 5vw);
  }

  .bg-games {
  background-color: #34265599;
  filter: drop-shadow(0 0 15px 15px #4EFE7F90);
  opacity: .85;
  box-shadow: 0px 0px 30px 30px inset #000000;
  margin-bottom: 0rem;
}
  .nav-bar2 {
    display: none;
  }

  .neon-btn-two {
    display: none;
  }

  .neon-btn-one {

  position: absolute;
  top: -3.5vh;
  left: 31%;
  max-width: fit-content;
    // left: 32.5%;
  }

  .carousel-top { 
    margin-top: 5rem;
    margin-bottom: -3rem;
  }
  .lighting-bar{
    margin-top: -4rem;
  }

}

//#region carousel styles
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  height: 50vh;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}

.carousel__item>img{
height: 35vh;
width: 100%;
object-fit: cover;
}
//#endregion

@media screen and (max-width: 768px) {
  .carousel__slide {
    min-width: 65vw;
  }
  .neon-button {
    display: none;
  }
}

</style>
