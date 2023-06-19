export class GameDetails{
   constructor(data, data2){
      this.slug = data.slug
      this.name = data.name
      this.description = data.description_raw
      this.descriptionHTML = data.description
      this.metacritic = data.metacritic
      this.released = data.released
      this.rating = data.rating
      this.parent_platforms = data.parent_platforms
      this.platforms = data.platforms
      this.stores = data.stores
      this.developers = data.developers
      this.genres = data.genres[0].name || null
      this.tags = data.tags
      this.publishers = data.publishers
      this.esrb_rating = data.esrb_rating.name
      this.screenshots = data2.results
      this.coverImg = data.background_image
      this.background = data.background_image_additional
   }
}