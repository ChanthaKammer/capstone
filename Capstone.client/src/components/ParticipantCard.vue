<template>
 <section class="container-fluid">
    <div class="row">
      <p class="text-white">WE'RE GOING!</p>
      <router-link :to="{name: 'Profile', params: { profileId: participant.accountId }}">
        <div class="col-md-1 pb-4">
          <img class="rounded-circle participants" :src="participant.profile.picture" alt="">
          <p class="text-white">{{ participant.profile.name }}</p>
        </div>
      </router-link>
    </div>
  </section>
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

</style>
