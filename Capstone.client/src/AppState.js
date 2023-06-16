import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},

  /** @type {import('./models/Tournament.js').Tournament} */
  tournaments: [],
  games: [],

  activeTournament: {},
  activeGame:{},

  participants: [],
  activeParticipant: {},
  myParticipants: [],

  query: '',
  searchTournaments: [],


  previousPage: null,
  nextPage: null,
})
