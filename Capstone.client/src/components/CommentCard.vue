<template>
  <div class="row">
    <div class="p-2 col-md-2">
      <img class="rounded-circle" :src="comment.creator.picture" alt="">
      <p class="mb-0 pt-1">{{ comment.creator.name }}</p>
    </div>
    <div class="col-md-10 pt-3">
      <p>{{ comment.body }}</p>
    </div>
    <div>
      <i v-if="comment.creatorId == account.id" @click="deleteComment()" class="mdi mdi-delete pe-1 icon"></i>
    </div>
  </div>
</template>


<script>
import { computed } from "vue";
import { AppState } from "../AppState.js";
import { Comment } from "../models/Comment.js";
import { commentsService } from "../services/CommentsService.js";
import Pop from "../utils/Pop.js";

export default {
  props: {
    comment: { type: Comment, required: true}
  },
  setup(props){
    return {
      account: computed(() => AppState.account),
      
      async deleteComment() {
        try {
          const commentId = props.comment.id
          if (await Pop.confirm('Delete Comment?'))
            await commentsService.deleteComment(commentId)
        } catch (error) {
          Pop.error(error)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>

img{
  height: 4em;
}

.icon{
  cursor: pointer;
}

</style>