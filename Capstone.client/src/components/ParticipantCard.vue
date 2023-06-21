<template>

    
      
      <!-- <div class="col-1 col-md-1 pb-2"> -->
        <img class="pfp rounded" :src="participant.profile.picture" alt="">
        <p class="text-white">{{ participant.profile.name }}</p>
      <!-- </div> -->
   

</template>


<script>

export default {
  props: {
    participant: {}
  },
  setup(){
    return {
      // participants: computed(()=> AppState.participants)
      

    }
  }
}
</script>


<style lang="scss" scoped>
.pfp{
  aspect-ratio: 1/1;
  min-height: 4rem;
  max-height: 4rem;
}
</style>
