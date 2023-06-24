function formatDateAndTime(dateString) {
  const date = new Date(dateString);
  // Format date as MM/DD/YYYY
  const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  // Format time as regular 12-hour format
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const amPm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  const formattedTime = `${hours}:${minutes.toString().padStart(2, '0')} ${amPm}`;
  return {formattedDate, formattedTime};
}

export class Tournament {
  constructor(data) {
    this.id = data.id
    this.creator = data.creator
    this.creatorId = data.creatorId
    this.name = data.name
    this.description = data.description
    this.coverImg = data.coverImg
    this.location = data.location
    this.capacity = data.capacity
    this.totalRounds = data.totalRounds
    this.currentRound = data.currentRound
    this.startDate = formatDateAndTime(data.startDate).formattedDate
    this.startTime = formatDateAndTime(data.startDate).formattedTime
    this.createdAt = data.createdAt
    this.updatedAt = data.updatedAt
    this.isCancelled = data.isCancelled
    this.isFinished = data.isFinished
    this.started = this.currentRound > 1
    this.type = data.type
    this.gameSlug = data.gameSlug
    this.gameName = data.gameName
    this.gameImg = data.gameImg
    this.participantCount = data.participantCount
    // new Date(data.createdAt).toLocaleTimeString('en-US', { timeStyle: 'short' })
    
  }
}