import { rawgApi } from "./AxiosService.js";
import { logger } from "../utils/Logger.js"
import { AppState } from "../AppState.js";
class RawgService {
  // async getGames() {
  //   const res = await rawgApi.get(``)
  //   logger.log('[RAWG DATA]', res.data)
  // }
  async searchGames(searchTerm) {
    const res = await rawgApi.get(``, {
      params: {search: `${searchTerm}`}
    })
    logger.log('[SEARCH RESULTS]', res.data)
    AppState.nextPage = res.data.next
    AppState.previousPage = res.data.previous
  }
}
export const rawgService = new RawgService();
