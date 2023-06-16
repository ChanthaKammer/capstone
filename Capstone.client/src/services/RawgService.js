import { rawgApi } from "./AxiosService.js";
import { logger } from "../utils/Logger.js"
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
  }
}
export const rawgService = new RawgService();
