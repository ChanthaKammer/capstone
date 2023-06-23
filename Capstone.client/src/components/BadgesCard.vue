<template>


  <!-- SECTION "RUTHLESS" BADGE -->
  <div class="badge red">
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="100px" height="105px" viewBox="0 0 216 232">
      <path fill="#362d2d" d="M207,0C171.827,0.001,43.875,0.004,9.003,0c-5.619-0.001-9,3.514-9,9c0,28.23-0.006,151.375,0,169c0.005,13.875,94.499,54,107.999,54S216,191.57,216,178V9C216,3.298,212.732,0,207,0z"/>
    </svg>
      <p class="title">RUTHLESS</p>
      <p class="subtitle">TOP 100 BEST GAMERS</p>
  </div>
  
  <!-- SECTION "TEAM LEADER" BADGE ----->
  <div class="badge green">
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="100px" height="105px" viewBox="0 0 216 232">
      <path fill="#2b3037" d="M207,0C171.827,0.001,43.875,0.004,9.003,0c-5.619-0.001-9,3.514-9,9c0,28.23-0.006,151.375,0,169c0.005,13.875,94.499,54,107.999,54S216,191.57,216,178V9C216,3.298,212.732,0,207,0z"/>
    </svg>
      <p class="title">TEAM<br>LEADER</p>
      <p class="subtitle">TOP 100 TEAM PLAYERS</p>
  </div>
  
  <!-- SECTION "COLD-BLOODED" BADGE --------->
  <div class="badge slateblue">
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="100px" height="105px" viewBox="0 0 216 232">
      <path fill="#2b3037" d="M207,0C171.827,0.001,43.875,0.004,9.003,0c-5.619-0.001-9,3.514-9,9c0,28.23-0.006,151.375,0,169c0.005,13.875,94.499,54,107.999,54S216,191.57,216,178V9C216,3.298,212.732,0,207,0z"/>
    </svg>
      <p class="title">COLD<br>BLOODED</p>
      <p class="subtitle">TOP 500 BEST GAMERS</p>
  </div>
  <!-- SECTION "MONEY-BAGS" BADGE -->
  <div class="badge gold">
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="100px" height="105px" viewBox="0 0 216 232">
      <path fill="#2b3037" d="M207,0C171.827,0.001,43.875,0.004,9.003,0c-5.619-0.001-9,3.514-9,9c0,28.23-0.006,151.375,0,169c0.005,13.875,94.499,54,107.999,54S216,191.57,216,178V9C216,3.298,212.732,0,207,0z"/>
    </svg>
      <p class="title">MONEY-BAGS</p>
      <p class="subtitle">TOP 100 GP EARNERS</p>
  </div>
  
  <!-- SECTION "TOP SPONSORS" BADGE -->
  <div class="badge bronze">
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="100px" height="105px" viewBox="0 0 216 232">
      <path fill="#2b3037" d="M207,0C171.827,0.001,43.875,0.004,9.003,0c-5.619-0.001-9,3.514-9,9c0,28.23-0.006,151.375,0,169c0.005,13.875,94.499,54,107.999,54S216,191.57,216,178V9C216,3.298,212.732,0,207,0z"/>
    </svg>
      <p class="title">ANGEL INVESTOR</p>
      <p class="subtitle">TOP 100 SPONSORS</p>
  </div>

</template>


<style scoped lang="scss">

@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);
@import url(https://fonts.googleapis.com/css?family=Fjalla+One);

//NOTE - BADGE STYLING ATTRIBUTES ARE ALL WRAPPED WITHIN THE INITIAL ".badge" CLASS *EXCEPT FOR* THE '@MIXIN AND @INCLUDES' BRING *ALL* CLASS ATTRIBUTES AND '@MIXIN' ATTRIBUTE WITH YOU FOR A 'SINGLE BADGE' WHEN YOU PLACE IT *EXCEPT FOR* ALL '@INCLUDES' COLORS. BRING A SINGLE '@INCLUDES' COLOR CASE AND CHANGE THAT COLOR AS YOU SEE FIT.  THEY ARE INDIVIDUALLY MARKED WITH A *SECTION* COMMENT.
.badge {
  position: relative;
  width: 100px;
  display: inline-block;
  margin: 40px;

.title {
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: .7em;
  text-shadow: .5px .5px 1px #362d2d;
  position: absolute;
  top: -28px;
  border-radius: 8px 8px 0 0;
  text-align: center;
  width: 100%;
  background: red;
  padding: 12px 0;
}
.subtitle {
  position: absolute;
  font-family: "Fjalla One", sans-serif;
  font-size: .8em;
  width: 100%;
  text-align: center;
  color: white;
  position: absolute;
  top: 50px;
  word-spacing: 2px;
  &:after {
      content: "★ ★ ★";
      display: block;
      font-size: .4em;
      position: relative;
      margin: 12px 0 0;
      transition: all .3s;
    }
}
  &:hover .subtitle:after {
      word-spacing: 15px; 
  }
}

@mixin setColor($color){
  .title{
      background-color: $color;
  }
  .subtitle:after {
      color: $color;
  }
}
// SECTION SINGLE COLOR CASE FOR SINGLE BADGE
.red{
  @include setColor(#832220);
}
// SECTION SINGLE COLOR CASE FOR SINGLE BADGE
.green{
  @include setColor(darkolivegreen);
}
// SECTION SINGLE COLOR CASE FOR SINGLE BADGE
.slateblue{
  @include setColor(slateblue);
}
// SECTION SINGLE COLOR CASE FOR SINGLE BADGE
.gold{
  @include setColor(gold);
}
// SECTION SINGLE COLOR CASE FOR SINGLE BADGE
.bronze{
  @include setColor(#CD7F32);
}

</style>