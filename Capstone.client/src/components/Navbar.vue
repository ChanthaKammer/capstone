<template>

  <nav class="navbar navbar-expand-lg bg-body-tertiary bg-navbar">
    <div class="container-fluid bg-navbar">
      <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
        <div class="d-flex flex-column align-items-center">
          <DIV><img alt="logo" src="src/assets/img/gamePursuitLogo.png" class="rounded-pill elevation-2 shadow-lg me-3" style="" height="65" /><b>Game Pursuit</b></DIV>
        </div>
      </router-link>
      
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll offset-1" style="--bs-scroll-height: 100px;">
          <li class="nav-item mx-2">
            <router-link :to="{ name: 'About' }" class="btn lighten-30 selectable text-uppercase">
              Builder
            </router-link>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" href="#">Build Guides</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" href="#">Completed Builds</a>
          </li>
          <li class="nav-item mx-2 dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Browse Products
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex" role="search" style="width: 40%;">
          <input class="form-control me-2" type="search" placeholder="Search Games..." aria-label="Search">
          <button class="btn btn-primary me-3" style="opacity: .7;" type="submit">Search</button>
        </form>
         <!-- LOGIN COMPONENT HERE -->
        <Login />
      </div>

  </nav>

</template>

<script>
import Login from './Login.vue';
export default {
  setup() {
    return {}
  },
  components: { Login }
}
</script>

<style scoped>

.bg-navbar {
  background-color: #1a657aad;
  filter: drop-shadow(0px 4rem 2rem #0b0d12e8);
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
