<template>
 <section class="container-fluid">
    <div class="row">
      <p class="text-white">WE'RE GOING!</p>
      <div class="col-md-1 pb-4" v-for="p in participant" :key="p.id">
        <img class="rounded-circle participant" :src="p.profile.picture" alt="">
        <p class="text-white">{{ p.profile.name }}</p>
      </div>
    </div>
  </section>
</template>


<script>
import { computed } from "vue"
import { AppState } from "../AppState.js"
export default {
  props: {
    participant: {}
  },
  setup(){
    return {
      participants: computed(()=> AppState.participants)
      

    }
  }
}
</script>


<style lang="scss" scoped>

</style>
