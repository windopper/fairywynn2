<template>
  <div class="post-options-container">
    <div class="post-options-item" @click="() => to('write')">
      <span class="material-symbols-outlined">
        edit
      </span>
    </div>
    <div class="post-options-item">
      <span class="material-symbols-outlined">
        bookmark
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostOptions",
  methods: {
    to: function(path) {
      console.log("hi");
      this.$router.push(path);
      //TODO
    }
  }
};
</script>

<style scoped>
.post-options-container {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 45px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.post-options-item {
  height: 70%;
  display: flex;
  align-items: center;
  padding: 3px 5px;
  margin-left: 10px;
  background-color: rgba(0, 0, 0, 0.05);
  color: gray;
  border-radius: 4px;
}

.post-options-item:hover {
  background-color: rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
</style>
