import BaseController from "../utils/BaseController.js"


export class ParticipantsController extends BaseController{
    constructor(){
        super('api/participants')
        this.router
    }
}