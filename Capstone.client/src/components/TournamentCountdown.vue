<template>
<!-- <div class="container-fluid"> -->
  <div class="row media-adjust justify-content-center align-items-center ms-4">
    <!-- <div class="col col-md-12"> -->
      <p class="text-center count-title">Tournament Countdown</p>
    <!-- </div> -->
    <div class="time__box d-flex justify-content-center mb-5">
      <div class="col-md-3">
        <p class="text-center"> {{ days }} </p>
        <span class="d-flex justify-content-center align-items-center">days</span>
      </div>
      <div class="col-md-3">
        <p class="text-center">{{ hours % 24 }} </p>
        <span class="d-flex justify-content-center align-items-center">hours</span>
      </div>
      <div class="col-md-3">
        <p class="text-center">{{ minutes % 60 }} </p>
        <span class="d-flex justify-content-center align-items-center">minutes</span>
      </div>
      <div class="col-md-3">
        <p class="text-center ">{{ seconds % 60 }} </p>
        <span class="d-flex justify-content-center align-items-center">seconds</span>
      </div>
    </div>
  </div>
<!-- </div> -->

</template>

<script>

import { ref } from "vue";
import { AppState } from "../AppState.js";


export default {
  props: {
      startDate: { type: Date, required: true },
   },

   setup(props) {
    const countDownDate = new Date(props.startDate);
    const days = ref(0);
    const hours = ref(0);
    const minutes = ref(0);
    const seconds = ref(0);

    setInterval(() => {
      const now = new Date();
      const timeBetween = countDownDate - now;

      if (timeBetween > 0) {
        seconds.value = Math.floor(timeBetween / 1000) % 60;
        minutes.value = Math.floor(timeBetween / 1000 / 60) % 60;
        hours.value = Math.floor(timeBetween / 1000 / 60 / 60) % 24;
        days.value = Math.floor(timeBetween / 1000 / 60 / 60 / 24);
      } else {
        // Countdown is finished, set all values to zero
        seconds.value = 0;
        minutes.value = 0;
        hours.value = 0;
        days.value = 0;
      }
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
  margin-top: 0rem;
  margin-bottom: -5rem;
}

.time__box {
  width: 100%;
  max-width: 100%;
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