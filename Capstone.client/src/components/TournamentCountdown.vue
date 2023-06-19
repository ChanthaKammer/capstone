<template>
<div class="container-fluid">
  <div class="row media-adjust ms-4">
    <div class="col-12">
      <p class="text-center count-title pe-5">Tournament Countdown</p>
    </div>
    <div class="time__box d-flex mb-5">
      <div class="col-3">
        <p class="text-center"> {{ days }} </p>
        <span class="ms-5">days</span>
      </div>
      <div class="col-3">
        <p class="text-center">{{ hours % 24 }} </p>
        <span class="ms-5">hours</span>
      </div>
      <div class="col-3">
        <p class="text-center">{{ minutes % 60 }} </p>
        <span class="ms-5">minutes</span>
      </div>
      <div class="col-3">
        <p class="text-center ">{{ seconds % 60 }} </p>
        <span class="ms-5">seconds</span>
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

span {
  font-size: 1rem;
  font-weight: 500;
  color: #ffffff75;
  text-shadow: 0 0 10px #000;
}

.count-title {
  font-size: 2rem;
  font-weight: 500;
  color: #ffffff;
  text-shadow: 0 0 10px #000;
  font-family: 'Orbitron', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 4rem;
  margin-bottom: -5rem;
}

.time__box {
  width: 100%;
  min-width: 93%;
  margin-bottom: 2rem;
  padding: 1em;
  background-color: #0811124f;
  filter: drop-shadow(0 0 10px #000);
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  transform: translateY(100px);
}

.time__box p {
  height: 80%;
  width: 10vw;
  font-size: 3em;
  font-family: 'Orbitron', sans-serif;
  line-height: 100px;
  font-weight: bold;
  color: #aa0000f0;
  filter: drop-shadow(0 0 5px #000051ad);
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
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