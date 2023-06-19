<template>

  <nav class="navbar navbar-expand-lg bg-body-tertiary bg-navbar">
    <div class="container-fluid bg-navbar">
      <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
        <div class="d-flex flex-column align-items-center">
          <div>
            <img alt="logo" src="src/assets/img/gamePursuitLogo.png" class="rounded-pill elevation-2 shadow-lg me-3" style="" height="65" /><b>Game Pursuit</b></div>
        </div>
      </router-link>
        <form @submit.prevent="searchGames()" class="d-flex" role="search" style="width: 40%;">
          <input class="form-control me-2" type="search" :placeholder="searchTerm" aria-label="Search" v-model="editable">
          <button class="btn btn-primary me-3" style="opacity: .7;" type="submit">Search</button>
        </form> <!-- LOGIN COMPONENT HERE -->
        <Login />
      </div>

  </nav>

</template>

<script>
import { ref, computed } from 'vue';
import { useRouter } from "vue-router";
import Login from './Login.vue';
import { logger } from "../utils/Logger.js";
import { rawgService } from "../services/RawgService.js";
import { AppState } from '../AppState.js';
import Pop from "../utils/Pop.js";

export default {
  components: { Login },
  setup() {
    const router = useRouter()
    // const searchTerm = computed(() => AppState.query)
    const editable = ref('')
    return {
      editable,
      async searchGames() {
        try {
          // const searchTerm = search.value
          // const parts = searchTerm.split(' ');
          // const modifiedSearch = parts.join('+');
          const searchString = editable.value
            .split(' ')
            .join('+')
          logger.log("[SEARCH STRING]",searchString)
          AppState.query = searchString
          await rawgService.searchGames(searchString)
          router.push(
            { name: 'Search' , params: { query: searchString }}
          )
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      }
    }
  },
}
</script>

<style scoped>

.bg-navbar {
  background-color: #1a657aad;
  filter: drop-shadow(0px .5rem 1rem #0b0d12e8);
} 

a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

@media screen and (min-width: 768px) {
  nav {
    height: 64px;
  }
}

</style>