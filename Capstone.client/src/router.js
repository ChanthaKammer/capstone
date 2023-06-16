import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  },
  {
    path: '/tournament/:tournamentId',
    name: 'TournamentDetails',
    component: loadPage('TournamentDetailsPage')
  },
  {
    path: '/tournaments/search',
    name: 'Search',
    //ANCHOR CHANGE NAME OF SEARCH COMPONENT LOADPAGE LATER JUST SENDING TO ABOUT PAGE TO TEST SEARCH FUNCTIONALITY
    component: loadPage('AboutPage')
  },
  {
    path: '/test',
    name: 'Test',
    component: loadPage('Test')
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
