<template>

<TournamentDetailsCard />

</template>

<script>

import { computed, onMounted } from 'vue';
import { AppState } from '../AppState';
import { tournamentsService } from '../services/TournamentsService';
import { participantsService } from '../services/ParticipantsService';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';
import TournamentDetailsCard from '../components/TournamentDetailsCard.vue';
import { useRoute } from 'vue-router';

export default {
  
  components: {
    TournamentDetailsCard
  },

  setup() {
        const route = useRoute();
       
        onMounted(() => {
            getTournamentById();
            getParticipants();
        });

        return {
            route,
            event: computed(() => AppState.activeEvent),
            participants: computed(() => AppState.participants),


        }

        async function getTournamentById() {
            try {
                await tournamentsService.getTournamentById(route.params.tournamentId);
            }
            catch (error) {
                logger.error('async function "getTournamentById() failed."', error);
                Pop.error(error);
            }
        }

        async function getParticipants() {
          try {
            await participantsService.getParticipants(route.params.tournamentId)
          } catch (error) {
            logger.log('[getting participants for this tournament]', error);
            Pop.error(error.message);
          }
        }
    },
}

</script>