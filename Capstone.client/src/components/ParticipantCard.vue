<template>

    
  <div class="col-1 col-md-1 pb-2">
      <router-link :to="{name: 'Profile', params: { profileId: participant.accountId }}">
        <img v-if="participant.status != 'eliminated'" class="pfp rounded" :src="participant.profile.picture" alt="">
        <img v-else class="pfp rounded player-eliminated" :src="participant.profile.picture" alt="">
      </router-link>
      <p class="text-white fw-normal m-0" style="white-space: nowrap;text-shadow: 1px 1px 1px black;">{{ participant.profile.name }}</p>
    </div>
   

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
.player-eliminated{
  filter: grayscale(100%);
}
</style>
