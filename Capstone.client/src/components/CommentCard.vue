<template>
<div class="row bg-background rounded-4 elevation-3 mb-3">
  <div class="comment-bottom p-2 px-4 rounded" style="">
    <div class="d-flex flex-row add-comment-section mt-1 mb-4">
  </div>

      <div
      class="commented-section mt-2 ps-4">
      <div class="d-flex flex-row  align-items-center commented-user">
        <span class="mb-1">
          <router-link :to="{name: 'Profile', params: { profileId: comment.creatorId }}">
            <img :src="comment.creator.picture" :alt="comment.creator.name" class="img-fluid comment-pfp" style="max-height: 50px;">
          </router-link>
        </span>
        <h5 class="me-2"> {{ comment.creator.name }} </h5>
        <span style="color: darkblue;" class="mb-1 ms-2"> {{
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
        </span>
      </div>

      <div class="comment-text"><span class="text-dark px-3"> {{ comment.body }} </span>
        <i v-if="comment.creatorId == account.id" @click="deleteComment()" class="mdi mdi-delete pe-1 icon fs-4 float-end"></i></div>
      <div
        class="reply-section">
        <div class="d-flex flex-row align-items-center voting-icons">
          <div>
            <i class="mdi mdi-arrow-up fa-2x mt-3 hit-voting"></i>
          </div>
          <div>
            <i class="mdi mdi-arrow-down fa-2x mb-3 hit-voting-down"></i>
          </div>
          <span class="text-dark ms-2">Upvotes</span><span class="dot ms-2"></span>
          <h6 class="ms-2 mt-1 reply-text">Reply</h6>
        </div>
      </div>
    </div>
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
.bg-background{
  background-color: #374466
}
.comment-bottom{
  background-color: #374466
}
.comment-pfp{
  aspect-ratio: 1/1;
  min-width: 4rem;
  max-width: 4rem;
  min-height: 4rem;
  max-height: 4rem;
  border-radius: 50%;
}
span {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0);
  font-weight: 650;
  padding: 0.5em;
  padding-bottom: 1rem;
}

img{
  height: 4em;
}

.icon{
  cursor: pointer;
  color: red;
  text-shadow: 1px 1px 2px black;
}

.bg-comments {
  background-color: #9ab3d000;
  box-shadow: inset 0px -50px 80px #11245e00;
}

.comment-text {
  background-color: #d8eaff;
  border: 4px groove #d8eaff4b;
  width: 50vw;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 4px;
  line-height: 3px;
}

.comments {
text-decoration: underline;
text-underline-position: under;
cursor: pointer;
}

.reply-text {
  color: darkblue;
}

.hit-voting:hover {
  color: blue;
}

.hit-voting {
  cursor: pointer;
  color: dodgerblue;
}

.hit-voting-down:hover {
  color: orange;
}

.hit-voting-down {
  cursor: pointer;
  color: orange;
}


</style>