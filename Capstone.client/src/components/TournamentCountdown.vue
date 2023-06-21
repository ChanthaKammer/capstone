<template>
<div class="container-fluid">
  <div class="row media-adjust justify-content-center align-items-center ms-4">
    <div class="col-12">
      <p class="text-center count-title">Tournament Countdown</p>
    </div>
    <div class="time__box d-flex justify-content-center mb-5">
      <div class="col-3">
        <p class="text-center"> {{ days }} </p>
        <span class="d-flex justify-content-center align-items-center">days</span>
      </div>
      <div class="col-3">
        <p class="text-center">{{ hours % 24 }} </p>
        <span class="d-flex justify-content-center align-items-center">hours</span>
      </div>
      <div class="col-3">
        <p class="text-center">{{ minutes % 60 }} </p>
        <span class="d-flex justify-content-center align-items-center">minutes</span>
      </div>
      <div class="col-3">
        <p class="text-center ">{{ seconds % 60 }} </p>
        <span class="d-flex justify-content-center align-items-center">seconds</span>
      </div>
    </div>
  </div>
</div>

</template>

<script>

import { ref } from "vue";
import { AppState } from "../AppState.js";


export default {

  setup() {
    const days = ref(0);
    const hours = ref(0);
    const minutes = ref(0);
    const seconds = ref(0);

    const countDownDate = new Date(AppState.activeTournament.startDate);

    setInterval(() => {
      const now = new Date();
      const timeBetween = countDownDate - now;

      seconds.value = parseInt(timeBetween / 1000)
      minutes.value = parseInt(seconds.value / 60)
      hours.value = parseInt(minutes.value / 60)
      days.value = parseInt(hours.value / 24)
    }, 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  },
};

</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap');

* {
  border: none;
}

span {
  font-size: 1rem;
  font-weight: 500;
  color: #ffffff75;
  
}

.count-title {
  font-size: 2rem;
  font-weight: 500;
  color: #ffffff;

  font-family: 'Orbitron', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 4rem;
  margin-bottom: -5rem;
}

.time__box {
  width: 75%;
  max-width: 75%;
  margin-bottom: 2rem;
  padding: 1em;
  background-color: #0811124f;
  filter: drop-shadow(0 0 10px #000);
  border-radius: 5px;

  transform: translateY(100px);
}

.time__box p {
  height: 80%;
  font-size: 3em;
  font-family: 'Orbitron', sans-serif;
  line-height: 100px;
  font-weight: bold;
  color: #45bdd0f0;

  border-radius: 5px;

  transition: 1s;
}

@media (max-width: 768px) {
  .media-adjust, .count-title {
    width: 100%;
    padding-right: 2rem;
  }

  .time__box p {
    width: 20vw;
  }
}

</style>