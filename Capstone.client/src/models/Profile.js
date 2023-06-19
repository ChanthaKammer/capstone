export class Profile {
  constructor(data) {
    this.id = data.id
    this.email = data.email
    this.name = data.name
    this.picture = data.picture
    // TODO add additional properties if needed
    this.gpBalance = data.gpBalance
    this.platforms = data.platforms
    this.bio = data.bio
    this.coverImg = data.coverImg
    this.gamerTag =data.gamerTag
  }
}