<template>

  <button @click="scrapePage()" class="m-2"> Get dropzones</button>
</template>

<script>
import { AppState } from '../AppState';
import axios from 'axios';
export default {
  setup() {

    return {
      scrapePage,
      // ... other properties from AppState if needed
    };
  },
};
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
