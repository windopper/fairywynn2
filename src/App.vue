<template>
  <router-view />
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap");
:root {
  --vt-font-family-base: "Ubuntu", sans-serif;
}

* {
  font-family: var(--vt-font-family-base);
  box-sizing: border-box;
}

html,
body,
#app {
  position: absolute;
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>
