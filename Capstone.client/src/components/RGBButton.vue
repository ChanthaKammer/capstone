<template>
  <button class="glow-on-hover m-1" type="button">Join the tournament!</button>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>


.glow-on-hover {
  width: 220px;
  height: 50px;
  border: none;
  outline: none;
  color: #fff;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  transition: box-shadow 0.3s, transform 0.3s;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  transform: perspective(500px) rotateX(0deg) translateZ(0);
}

.glow-on-hover:before {
  content: "";
  background: linear-gradient(
    45deg,
    rgba(255, 0, 0, 0.8),
    rgba(255, 115, 0, 0.8),
    rgba(255, 251, 0, 0.8),
    rgba(72, 255, 0, 0.8),
    rgba(0, 255, 213, 0.8),
    rgba(0, 43, 255, 0.8),
    rgba(122, 0, 255, 0.8),
    rgba(255, 0, 200, 0.8),
    rgba(255, 0, 0, 0.8)
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing 20s linear infinite;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

.glow-on-hover:active {
  color: #000;
}

.glow-on-hover:active:after {
  background: transparent;
}

.glow-on-hover:hover:before {
  opacity: 1;
}

.glow-on-hover:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #111;
  left: 0;
  top: 0;
  border-radius: 10px;
}

@keyframes glowing {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}

.glow-on-hover:not(:hover) {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
  transform: perspective(500rem) rotateX(20deg) translateZ(-10px);
}
</style>
