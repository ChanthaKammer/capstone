<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="home-card p-5 bg-white rounded elevation-3">
      <img src="https://bcw.blob.core.windows.net/public/img/8600856373152463" alt="CodeWorks Logo"
        class="rounded-circle">
      <h1 class="my-5 bg-dark text-white p-3 rounded text-center">
        Vue 3 Starter
      </h1>
      <button @click="getGraphicCardHTML()"> Get newegg graphic HTML</button>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState';
import { Cheerio } from "cheerio";
import { CheerioAPI } from "cheerio";
import { CheerioOptions } from "cheerio";
import * as cheerio from 'cheerio';
import * as fs from 'fs';
export default {
  setup() {
function getGraphicCardHTML(){
const url = 'https://www.newegg.com/p/pl?N=100007709&d=graphics+card&PageSize=96'
}
getGraphicCardHTML.
    return {}
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
