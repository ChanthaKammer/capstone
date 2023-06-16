<template>

<div>

{{ activeGame }}

</div>

</template>

<script>
import { onMounted } from "vue";
import { AppState } from "../AppState.js";
import { rawgService } from "../services/RawgService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { useRoute } from "vue-router";

export default {

  setup() {

    const route = useRoute();

    onMounted(() => {
      
    }),

    async function setActiveGame() {
      const gameSlug = route.params.gameSlug
      logger.log(gameSlug)
      

    }

    return {

    }
  }
}

</script>


<style scoped lang="scss">


</style>