export class Tournament {
  constructor(data) {
    this.id = data.id
    this.creator = data.creator
    this.creatorId = data.creatorId
    this.name = data.name
    this.description = data.description
    this.capacity = data.capacity
    this.totalRounds = data.totalRounds
    this.currentRound = data.currentRound
    this.createdAt = data.createdAt
    this.updatedAt = data.updatedAt
    this.isCancelled = data.isCancelled
    this.isFinished = data.isFinished
    this.type = data.type
    this.gameSlug = data.gameSlug
    this.gameName = data.gameName
    this.gameImg = data.gameImg
    this.participantCount = data.participantCount

    
  }
}