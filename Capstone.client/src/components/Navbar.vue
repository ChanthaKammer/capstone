<template>

  <nav class="navbar navbar-expand-lg bg-navbar">
    <div class="container-fluid bg-navbar">
      <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
        <div class="d-flex flex-column align-items-center">
          <div class="logo">
            <img alt="logo" src="src/assets/img/gamePursuitLogo.png" class="rounded-pill elevation-2 shadow-lg me-3" style="" height="65" /><b>Game Pursuit</b></div>
        </div>
      </router-link>
        <form @submit.prevent="searchGames()" class="d-flex col-12 col-md-4 searchbar" role="search" style="width: 40%;">
          <input class="form-control me-2 search-input" type="search" :placeholder="searchTerm" aria-label="Search" v-model="editable" style="">
          <button class="btn btn-primary me-3" style="opacity: .7;" type="submit">Search</button>
        </form>
        <div v-if="user.isAuthenticated" class="">
          <div class="d-flex justify-content-end align-items-end fs-4 ms-5 gp-balance" style="font-style: normal; color: #000000;">🪙: {{ account.gpBalance }} </div>
        </div>
        <!-- LOGIN COMPONENT HERE -->
        <Login class="login-pfp"/>
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
    const editable = ref('')
    return {
      editable,
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),

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

nav {
  z-index: 1;
}

.bg-navbar {
  background-color: #18a7aaad;
  filter: drop-shadow(0px .5rem 1rem #ffffff48);
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

@media screen and (max-width: 768px) {
  .search-input{
    min-width: 58vw;
  }
  .logo{
    position: relative;
    top: -.5rem;
    left: 0;
    width: 80vw;
    height: 5rem;
  }
  .login-pfp {
  position: absolute;
  top: -1.25rem;
  right: 1rem;
  }
  nav {
    height: 64px;
  }
  .bg-navbar {
    height: 65px;
  }
  .searchbar {
    position: relative;
    top: -1rem;
    left: 1.5rem;
    margin-bottom: -3.75rem;
  }
  .gp-balance {
  position: absolute;
  top: .75rem;
  right: 5rem;
  }
}

</style>