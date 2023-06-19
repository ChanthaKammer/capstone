import { rawgApi } from "./AxiosService.js";
import { logger } from "../utils/Logger.js"
import { AppState } from "../AppState.js";
import { Game } from "../models/Game.js";
class RawgService {
  // async getGames() {
  //   const res = await rawgApi.get(``)
  //   logger.log('[RAWG DATA]', res.data)
  // }

  //NOTE FOR GETTING GAMES BY THEIR DETAILS PAGE. NEEDS TO BE FIXED
  // async getGameBySlug(slug) {
  //   const res = await rawgApi.get(`games/${slug}`)
  //   logger.log('[GETTING GAME BY SLUG]', res.data)
  //   AppState.activeGame = new Game(res.data)
  //   logger.log('[ACTIVE GAME]', AppState.activeGame)
  // }

  async searchGames(searchTerm) {
    const res = await rawgApi.get(``, {
      params: {search: `${searchTerm}`}
    })
    AppState.nextPage = res.data.next
    AppState.previousPage = res.data.previous
    AppState.games = res.data.results.map(g => new Game(g))
    logger.log('[SEARCH RESULTS]', AppState.games)
    logger.log('[SEARCH TERM', AppState.query)
  }

  async getGameDetails(slug){
    const res = rawgApi.get(`${slug}`)
  }

}
export const rawgService = new RawgService();
