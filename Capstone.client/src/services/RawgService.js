import { rawgApi } from "./AxiosService.js";
import { logger } from "../utils/Logger.js"
class RawgService {
  async getGames() {
    const res = await rawgApi.get(`/games?key=c10295c7f83d492e8e807604409`)
    logger.log('[RAWG DATA]', res.data)
  }
  // async searchGames() {
  //   const res = await rawgApi.get(`/games?key=c10295c7f83d492e8e807604409`, {
  //     params: {search: 'search=diablo'}
  //   })
  //   logger.log('[RAWG DATA]', res.data)
  // }
}
export const rawgService = new RawgService();
