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
      <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/75da5f11-dc9b-4dd7-a092-9002f227c0b1/dezhjhw-38d6e769-32d0-4277-8214-0ec75cdf4437.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc1ZGE1ZjExLWRjOWItNGRkNy1hMDkyLTkwMDJmMjI3YzBiMVwvZGV6aGpody0zOGQ2ZTc2OS0zMmQwLTQyNzctODIxNC0wZWM3NWNkZjQ0MzcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.veTdjyDx8JnMlKpmr6CFHw9bS1cB-wPkjP2RPRiBPLQ" class="img-fluid" style="max-height: 80px; margin-top" alt="mario">
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
