<template>


  <section class="container-fluid bg-background">
      
    <!-- <section class="row bg-navbar justify-content-center align-items-center" style="height: 20px;">

    </section> -->

    <section class="row bg-nav-options shadow" style="padding-left: 5rem;">
      <div class="col-3 d-flex justify-content-center align-items-center">
        <h2 class="text-white mt-3">PLAY</h2>
      </div>
      <div class="col-1" style="border-right: 5px double #ffffff99;"></div>
      <div class="col-3 d-flex justify-content-center align-items-center">
        <h2 class="text-white mt-3">HOST</h2>
      </div>
      <div class="col-1" style="border-left: 5px double #ffffff99;"></div>
      <div class="col-3 ps-5 d-flex justify-content-center align-items-center">
        <h2 class="text-white mt-3">COMPETE</h2>
      </div>
    </section>

    <!-- <section class="row bg-nav-accent">
      
    </section> -->

      <!-- SECTION my tournaments -->
      <section class="row pt-5">
        <div class="col-12">
          <h3 class="ps-5 fw-bold"></h3>
        </div>
  
        <!-- SECTION filter buttons -->
        <div class="d-flex justify-content-around my-3 bg-categories rounded p-3">
          <button @click="filterBy = ''" class="btn btn-outline-light w-25 mx-2">All</button>
          <button @click="filterBy = 'online'" class="btn btn-outline-light w-25 mx-2">Online</button>
          <button @click="filterBy = 'local'" class="btn btn-outline-light w-25 mx-2">Local</button>
        </div>
      </section>

    <section class="row">
      <div class="col-12">
        
        <!-- NOTE BACKGROUND BORDER FOR CAROUSEL ----------------------------->
        <div class="row bg-carousel justify-content-center align-items-center shadow-lg elevation-5">

          <!-- NOTE CAROUSEL FOR 'PC BUILD' PARTS IMAGES ------------------------------>
          <div class="bg-games p-5">
            <div id="carouselExampleIndicators" class="carousel slide">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://th.bing.com/th/id/R.f645b78e51a192cb4e9caa4aac6c0875?rik=ZTglhfD9mmwNIA&riu=http%3a%2f%2fcdn.collider.com%2fwp-content%2fuploads%2fgod-of-war-image.jpg&ehk=D%2bfse8wLp7FcFA%2bqBBv%2bCP0fIUGXa8YSkuFKGmU83yk%3d&risl=&pid=ImgRaw&r=0" class="d-block w-75 game-img rounded-3" style="position: relative; right: 12%; left: 12%;" alt="...">
                  <div class="carousel-caption d-none d-md-block mb-5" style="font-weight: 550; text-shadow: 0 2px 3px black;">
                    <h1 class="caption-text-1" style="filter: brightness(1.5)">GOD OF WAR</h1>
                    <h5 class="caption-text-1" style="filter: brightness(1.5);"><b>Join the battle with others that are slaying their way to the top of Olympus.</b></h5>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="https://th.bing.com/th/id/R.4c1438a6790709e13fedec0919ab9262?rik=vuldbqZ%2fyCjFpA&pid=ImgRaw&r=0" class="d-block w-75 game-img rounded-3" style="position: relative; right: 12%; left: 12%;" alt="...">
                  <div class="carousel-caption d-none d-md-block mb-5" style="font-weight: 550; text-shadow: 0 2px 3px black;">
                    <h1 class="caption-text-2" style="filter: brightness(1.5)">Star Citizen</h1>
                    <h5 class="caption-text-2" style="filter: brightness(1.5);"><b>#1 game for anyone looking to explore a creative universe built around cosmic destruction.</b></h5>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="https://cdn.mos.cms.futurecdn.net/Goqyz5GacSCWcBHT522gJ9-970-80.jpg.webp" class="d-block w-75 game-img rounded-3" style="position: relative; right: 12%; left: 12%;" alt="...">
                  <div class="carousel-caption d-none d-md-block mb-5" style="font-weight: 550; text-shadow: 0 2px 3px black;">
                    <h1 class="caption-text-3" style="filter: brightness(1.5)">Elden Ring</h1>
                    <h5 class="caption-text-3" style="filter: brightness(1.5);"><b>Up for something extra challenging? See the kind of dedication brought to the table by checking out our Most OP monster slayers!</b></h5>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="row justify-content-between mb-5 py-3 accent-row shadow-lg">
      <div class="col-md-6 mb-5 pe-5" style="position: absolute; top: -3.5vh; left: 19.5%;">
        <div class="btn-group">
          <button type="button" class="btn btn-info neon-button">Highlights</button>
          <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
          </ul>
        </div>
      </div>

      <div class="col-md-6 mb-5 ps-5" style="position: absolute; top: -3.5vh; left: 65.5%;">
        <div class="btn-group">
        <button type="button" class="btn btn-info neon-button">Top Gamers</button>
          <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
          </ul>
        </div>
      </div>
    </div>

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

export default {

  name: 'HomePage',

  components: {
    TournamentCard,
},

  setup() {

    const filterBy = ref ('')

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
      tournaments: computed(() => {
        if (filterBy.value == '') {
          return AppState.tournaments
        } else {
          return AppState.tournaments.filter ( 
            t => filterBy.value ? 
            t.type == filterBy.value : true 
            )
        }}),
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
  filter: drop-shadow( 0 0 15px 15px #0e224170);
  box-shadow: 0 15px 15px #0e2241;
}

.bg-nav-accent {
  color: #ffffff;
  background-color: #1a407a4d;
  filter: drop-shadow(0 0 15px 15px #1A417A70);
  box-shadow: 0 0 15px 15px #1A417A70;
}

.bg-carousel {
  background-color: #26553442;
  padding-bottom: 6rem;
  filter: drop-shadow(0 0 3rem #561287fd);
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

.neon-button, .dropdown-toggle {
  border: #71acff57 .125em solid;
  text-shadow: .5px .5px .125em rgba(15, 0, 68, 0.827);
  box-shadow: 0 0 20px 1px #49bfffe7;
  animation: pulse 3s infinite;
}

.neon-button::before {
  content: '';
  position: absolute;
  display: block;
  background: #2bbcff;
  top: 120%;
  left: 0;
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

@media (max-width: 768px) {
  .card-custom-img::after {
    border-top-width: 20px;
    border-left-width: 300px;
    border-left-width: calc(300px - 5vw);
  }
}

</style>


  




