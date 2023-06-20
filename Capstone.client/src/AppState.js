import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},

  /** @type {import('./models/Tournament.js').Tournament} */
  tournaments: [],
  myTournaments: [],
  activeTournament: {},
  
  participants: [],
  activeParticipant: {},
  myParticipants: [],
  myParticipations: [],
  
  /** @type {import('./models/Game.js').Game} */
  games: [],
  /** @type {import('./models/GameDetails.js').GameDetails} */
  activeGame: {},
  
  searchGames: [],
  
  query: '',

  previousPage: null,
  nextPage: null,

  /** @type {import('./models/Comment.js').Comment[]} */
  comments: [], 
})
