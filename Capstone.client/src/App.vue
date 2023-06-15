<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer class="row bg-black g-0 sticky-bottom " style="width: 100%;">
    <marquee behavior="scroll" direction="right" scrollamount="10" class="text-light" style="width: 100vw; font-size: 2rem; font-weight: 650; font-style: italic;">
      <img src="https://media.giphy.com/media/pjb1HPZ41i5BS/source.gif" class="img-fluid" style="max-height: 80px; margin-top" alt="mario">
    </marquee>
    <img src='../src/assets/img/mario-level.psd' class="" style="background-size: cover; background-repeat: norepeat; background-position: center; max-height: 50px; margin-bottom: 5rem;" alt="">
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root{
  --main-height: calc(100vh - 32px - 64px);
}


footer {
  max-height: 100px;
}
</style>
