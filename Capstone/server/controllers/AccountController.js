import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import BaseController from '../utils/BaseController'
import { participantsService } from '../services/ParticipantsService.js'

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      .get('/participants', this.getAccountParticipations)
  }

  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }

  async getAccountParticipations(req, res, next){
    try {
        const participations = await participantsService.getAccountParticipations(req.userInfo.id)
        return res.send(participations)
    } catch (error) {
      next(error)
    }
  }
}
