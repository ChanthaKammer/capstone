<template>
   <section class="container-fluid">
      <div class="row justify-content-center pt-5">
         <div class="col-md-9 pt-3 bg-dark text-white">
            <div class="row">
               <div class="col-md-4 text-center">
                  <h1>Grand Theft Auto V</h1>
                  <img src="https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png" class="img-fluid">
                  <h1>4/5</h1>
               </div>
               <div class="col-md-4">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis id molestiae natus earum illum. Possimus enim tempore odio maxime fugiat! Sint eligendi voluptas laborum possimus!</p>
               </div>
               <div class="col-md-4 text-center">
                  <p>Released</p>
                  <h2>2013-09-17</h2>
                  <p>Rated</p>
                  <h1>M</h1>
                  <p>Platforms</p>
                  <div class="row">
                     <div class="col-6">
                        <h2>Xbox</h2>
                     </div>
                     <div class="col-6">
                        <h2>PC</h2>
                     </div>
                  </div>
                  <div class="row">
                     <p>Genre</p>
                     <div class="col-6">
                        <h2>Action</h2>
                     </div>
                     <div class="col-6">
                        <h2>Adventure</h2>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<script>
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
import { logger } from '../utils/Logger.js';
   export default {
      setup(){
         return {

         }
      }
   }
</script>


<style>
*{
   border: 1px solid green
}
   body{
      background-image: url("https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg")
   }
</style>