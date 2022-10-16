<template>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
  />
  <div class="search-input-container" @click="$_openModal">
    <span class="material-symbols-outlined">
      search
    </span>
    <span>Search</span>
  </div>
</template>

<script>
export default {
  name: "TheSearchInput",
  props: {
    handleModal: Function
  },
  components: {},
  methods: {
    $_openModal: function() {
      this.handleModal(true);
    }
  }
};
</script>

<style scoped>
.search-input-container {
  height: 100%;
  display: flex;
  align-items: center;
}

.search-input-container:hover {
  color: gray;
  cursor: pointer;
}
</style>
