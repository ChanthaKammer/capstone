export class Comment{
  constructor(data){
    this.id = data.id
    this.creatorId = data.creatorId
    this.tournamentId = data.tournamentId
    this.body = data.body
    this.creator = data.creator
  }
}
