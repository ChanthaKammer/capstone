<template>
  <div class="row bg-commentcard rounded-4 elevation-3 m-3 p-3" style=" position: relative;">
    <div class="col-md-8 m-3 p-0" style="">
      <router-link :to="{ name: 'Profile', params: { profileId: comment.creatorId } }">
        <img :src="comment.creator.picture" :alt="comment.creator.name" class="img-fluid object-fit-cover comment-pfp"
          style="max-height: 50px; margin-left:-1rem; position: absolute; top: -25px; box-shadow: 0 0 1px 1px white">
      </router-link>
      <span class="text-white fw-normal mobile-posted-name" style="text-shadow: 1px 1px 1px black">{{ comment.creator.name
      }}</span>
      <span style="text-shadow: 1px 1px 1px black;color: white;" class="mb-1 fw-light mobile-posted-on">
        posted on
        {{ comment?.createdDate }}
        @ {{ comment?.createdTime }}
      </span>
    </div>
    <div class="col-md-12 bg-light rounded-3" style="">
      <div>

        <p class="text-dark pt-2 mt-0 mb-1"> {{ comment.body }} </p>
      </div>
      <i v-if="comment.creatorId == account.id" @click="deleteComment()"
        class="mdi mdi-delete pe-1 icon fs-5 float-end"><small>remove comment</small></i>
    </div>
  </div>
</template>


<script>
import { computed } from "vue";
import { AppState } from "../AppState.js";
import { Comment } from "../models/Comment.js";
import { commentsService } from "../services/CommentsService.js";
import Pop from "../utils/Pop.js";
import { Tournament } from "../models/Tournament.js"

export default {
  props: {
    comment: { type: Comment, required: true },
    // tournament: { type: Tournament, required: true }
  },
  setup(props) {
    return {
      // formatDateAndTime,
      // currentDate: computed(() =>{
      //   return formatDateAndTime(new Date).formattedDate
      // }),
      // currentTime: computed(() =>{
      //   return formatDateAndTime(new Date).formattedTime
      // }),
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
// function formatDateAndTime(dateString) {
//   const date = new Date(dateString);
//   // Format date as MM/DD/YYYY
//   const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
//   // Format time as regular 12-hour format
//   let hours = date.getHours();
//   const minutes = date.getMinutes();
//   const amPm = hours >= 12 ? 'PM' : 'AM';
//   hours = hours % 12 || 12;
//   const formattedTime = `${hours}:${minutes.toString().padStart(2, '0')} ${amPm}`;
//   return {formattedDate, formattedTime}
// }
</script>



<style lang="scss" scoped>
.bg-commentcard {
  background-color: #374466;
  // height: 10rem;
}

.comment-bottom {
  background-color: #374466
}

.comment-pfp {
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

img {
  height: 4em;
}

.icon {
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

// .reply-text {
//   color: darkblue;
// }


.mobile-posted-name {
  position: absolute;
  top: 15px;
  left: 80px;

}

.mobile-posted-on {
  position: absolute;
  top: 15px;
  right: 10px;
}

@media (max-width: 768px) {
  .mobile-posted-name {
    display: absolute;
    top: -10px;
    left: 80px;
  }
  .mobile-posted-on {
    display: absolute;
    position: absolute;
    margin-left: 1rem;
    top: 10px;
    right: 8px;
    margin-right: 0;
  }

}
</style>