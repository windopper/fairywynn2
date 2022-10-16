<template>
  <div class="loading-block"></div>
</template>

<script>
export default {
  name: "LoadingBlock"
};
</script>

<style scoped>
@keyframes loop {
  0% {
  }
  ,
  50% {
  }
  ,
  100% {
  }
}

.loading-block {
  width: 100%;
  height: 100%;
  background: gray;
  opacity: 0.5;
  border-radius: 5px;
  
}
</style>
