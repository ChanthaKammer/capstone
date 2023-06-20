import { AppState } from '../AppState'
import { Account } from '../models/Account.js'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = new Account(res.data)
      logger.log(res.data)
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async getAccountParticipations(){
    const res = await api.get('/account/participants')
    logger.log(res.data)
    AppState.myParticipations = res.data
  }

  async updateAccountInfo(editable) {
    const res =  await api.put('/account', editable)
    logger.log(editable)
    AppState.account = new Account(res.data)
  }
}

export const accountService = new AccountService()
