<template>

  <div v-if="tournament">
    <div class="carousel-inner p-5">
      <div class="carousel-item active">
      <div>
        <div v-if="tournament.participantCount.length > 5 ">
          <img :src="tournament.coverImg"
          class="d-block w-75 game-img rounded-3" style="position: relative; right: 12%; left: 12%;" alt="...">
        </div>



          </div>
          <div class="carousel-caption d-none d-md-block mb-5"
          style="font-weight: 550; text-shadow: 0 2px 3px black;">
        <h1 class="caption-text-1" style="filter: brightness(1.5)">GOD OF WAR</h1>
        <h5 class="caption-text-1" style="filter: brightness(1.5);"><b>Join the battle with others that are
            slaying their way to the top of Olympus.</b></h5>
      </div>
    </div>
    <div class="carousel-item">
      <img
        src="https://th.bing.com/th/id/R.4c1438a6790709e13fedec0919ab9262?rik=vuldbqZ%2fyCjFpA&pid=ImgRaw&r=0"
        class="d-block w-75 game-img rounded-3" style="position: relative; right: 12%; left: 12%;" alt="...">
      <div class="carousel-caption d-none d-md-block mb-5"
        style="font-weight: 550; text-shadow: 0 2px 3px black;">
        <h1 class="caption-text-2" style="filter: brightness(1.5)">Star Citizen</h1>
        <h5 class="caption-text-2" style="filter: brightness(1.5);"><b>#1 game for anyone looking to explore a
            creative universe built around cosmic destruction.</b></h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://cdn.mos.cms.futurecdn.net/Goqyz5GacSCWcBHT522gJ9-970-80.jpg.webp"
      class="d-block w-75 game-img rounded-3" style="position: relative; right: 12%; left: 12%;" alt="...">
      <div class="carousel-caption d-none d-md-block mb-5"
        style="font-weight: 550; text-shadow: 0 2px 3px black;">
        <h1 class="caption-text-3" style="filter: brightness(1.5)">Elden Ring</h1>
        <h5 class="caption-text-3" style="filter: brightness(1.5);"><b>Up for something extra challenging? See
            the kind of dedication brought to the table by checking out our Most OP monster slayers!</b></h5>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import { AppState } from "../AppState.js";
import { Tournament } from "../models/Tournament.js";


export default {
  
  props: {
    tournament: {
      type: Tournament,
      required: true
    }
  },

  setup() {

    return {
      // participantCount: computed(() => AppState.activeTournament.participant)
    }

  }
}

</script>