<template>
  <div class="post-list-container">
    <PostOptions />
    <slot />
  </div>
</template>

<script>
import PostOptions from "./PostOptions.vue";
export default {
  name: "PostList",
  components: {
    PostOptions
  }
};
</script>

<style scoped>
.post-list-container {
  position: relative;
  top: 60px;
  width: 100%;
  min-height: 100px;
  height: fit-content;
  margin: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
