export class Game{
   constructor(data){
      this.slug = data.slug
      this.name = data.name
      this.platform = data.platform
      this.platforms = data.platforms
      this.images = data.short_screenshots
      this.backgroundImg = data.background_image
      this.genres = data.genres
      this.released = data.released
      this.rating = data.rating
      this.esrb_rating = data.esrb_rating
   }
}

