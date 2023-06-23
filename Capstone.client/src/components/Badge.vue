<template>

{{ reward.name }}
{{ reward.tournamentId }}
{{ reward.accountId }}
{{ reward.badge }}
{{ reward.gpCoins }}
{{ reward.recipientId }}

</template>


<script>
import { Reward } from '../models/Reward.js';

export default {
    props: {
        reward: { type: Reward, required: true}
    },
    setup(){
        return {}
    }
}
</script>


<style lang="scss" scoped>

</style>