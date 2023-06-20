<template>

<div v-if="comment" class="mt-5 mb-5">
  <div class="d-flex justify-content-center row">
    <div class="d-flex flex-column col-md-8">
      
      <!-- <div class="comment-bottom bg-white p-2 px-4">
        <div class="d-flex flex-row add-comment-section mt-4 mb-4">
          <img class="img-fluid img-responsive rounded-circle me-2" :src="comment.creator.picture" width="38"><input type="text" class="form-control me-3" placeholder="Add comment"><button class="btn btn-primary" type="button">Comment</button></div>
        <div
          class="commented-section mt-2">
          <div class="d-flex flex-row align-items-center commented-user">
            <h5 class="me-2"> {{ comment.creator.name }} </h5><span class="dot mb-1"></span><span style="color: darkblue;" class="mb-1 ms-2"> {{
              new Date(comment.creator.createdAt)
                .toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                }) }}
            @ {{
              new Date(comment.creator.createdAt)
                .toLocaleTimeString('en-US', {
                  hour: 'numeric',
                  minute: 'numeric'
                }) }}
               </span></div>
          <div class="comment-text-sm"><span class="text-dark"> {{ comment.body }} </span></div>
          <div
            class="reply-section">
            <div class="d-flex flex-row align-items-center voting-icons">
              <div>
                <i class="mdi mdi-arrow-up fa-2x mt-3 hit-voting"></i>
              </div>
              <div>
                <i class="mdi mdi-arrow-down fa-2x mb-3 hit-voting"></i>
              </div>
              <span class="text-dark ms-2">Upvotes</span><span class="dot ms-2"></span>
              <h6 class="ms-2 mt-1 reply-text">Reply</h6>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</div>

</template>

<script>

import { commentsService } from '../services/CommentsService.js';
import { AppState } from "../AppState.js";
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Pop from "../utils/Pop.js";
import { logger } from "../utils/Logger.js";
import { ref } from "vue";

export default {
    props: {
        comment: {
            type: Comment, 
            required: true
        }
    },
setup() {

const route = useRoute()
const editable = ref({})

return {
    editable,
    route,
    account: computed(() => AppState.account),
    activeTournament: computed(() => AppState.activeTournament),
    comments: computed(() => AppState.comments),
    async deleteComment(commentId) {
        try {
            if (await Pop.confirm()) {
                await commentsService.deleteComment(commentId);
            }
        } catch (error) {
            logger.log('Failed to delete comment at "deleteComment(commentId)"', error)
        }
      }
    }; 
  }
}


  </script>

  <style lang="scss" scoped>

  

  </style>