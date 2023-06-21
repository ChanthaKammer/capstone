import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import BaseController from '../utils/BaseController'
import { participantsService } from '../services/ParticipantsService.js'
import { rewardsService } from '../services/RewardsService.js'
import { logger } from "../utils/Logger.js"
import { commentsService } from '../services/CommentsService.js'

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      .get('/participants', this.getAccountParticipations)
      .get('/rewards', this.getAccountRewards)
      .put('', this.updateAccount)
  }
  async updateAccount(req, res, next) {
    try {
      const accountData = req.body
      const account = await accountService.updateAccount(req.userInfo, accountData)
      return res.send(account)
    } catch (error) {
      next(error)
    }
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

  async getAccountRewards(req, res, next){
    try {
      const accountId = req.userInfo.id
      const rewards = await rewardsService.getAccountRewards(accountId)
      return res.send(rewards)
    } catch (error) {
        next(error)
    }
  }

  async getAccountComments(req, res, next){
    try {
      const creatorId = req.userInfo.id
      const comments = await commentsService.getAccountComments(creatorId)
      return res.send(comments)
    } catch (error) {
      next(error)
    }
  }
}
