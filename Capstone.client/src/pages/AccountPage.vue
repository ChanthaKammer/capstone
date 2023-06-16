<template>
  <section class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="row">
          <div class="col-md-4">
            <img src="http://localhost:8080/src/assets/img/gamePursuitLogo.png" alt="" class="img-fluid">
          </div>
          <div class="col-md-6">
            <h1>Name</h1>
            <h1>Gamertag</h1>
            <h1>Platform</h1>
          </div>
          <div class="col-md-2">
            <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#eventModal">Edit Account</button>
              <div class="row justify-content-center">
                <!-- Modal -->
                <div class="modal fade" id="eventModal" tabindex="-1" aria-labelledby="eventModal" aria-hidden="true">
                    <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                          <h1 class="modal-title fs-5" id="createEventLabel">Edit Account</h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body justify-content-center">
                          <form @submit.prevent="editAccount" class="col-12">
                            <input class="form-control mb-3" type="text" placeholder="Name" aria-label="name">
                            <input class="form-control mb-3" type="text" id="avatarImg" placeholder="Avatar Image">
                            <input class="form-control mb-3" type="text" id="coverImg" placeholder="Cover Image">
                            <div class="row mb-3">
                                <div class="col-6"><input class="form-control" type="number" id="name" placeholder="Age"></div>
                                <div class="col-6"><input class="form-control" type="text" id="gamertag" placeholder="Gamertag"></div>
                            </div>
                            <textarea class="form-control mb-3" id="bio" rows="3" placeholder="Bio"></textarea>
                          <button class="btn btn-success text-end" type="submit" role="button">Save Edits</button>
                          </form>
                      </div>
                    </div>
                    </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <TournamentCard/>
    </div>
  </section>
</template>

<script>
import { computed } from 'vue';
import { AppState } from '../AppState';
import TournamentCard from '../components/TournamentCard.vue';
export default {
    setup() {
        return {
            account: computed(() => AppState.account)
        };
    },
    components: { TournamentCard }
}
</script>

<style scoped>
* {
  border: 1px solid green
}
img {
  max-width: 100px;
}
</style>
