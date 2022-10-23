<template>
  <div class="post-list-container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "PostList",
};
</script>

<style scoped>
.post-list-container {
  position: relative;
  top: 60px;
  width: calc(100% - 2rem);
  min-height: 100px;
  height: fit-content;
  margin: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
