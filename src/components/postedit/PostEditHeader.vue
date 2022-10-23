<template>
  <div class="header-container">
    <button @click="$_setToMarkDowned">parse to markdown</button>
    <button @click="$_setToRaw">parse to raw</button>
    <button></button>
  </div>
</template>

<script>
export default {
  name: "PostWriteHeader",
  props: {
    setShowingContentType: Function,
    showingContentType: String
  },
  methods: {
    $_setToRaw: function() {
      this.setShowingContentType("RAW");
    },
    $_setToMarkDowned: function() {
      this.setShowingContentType("MARKDOWNED");
    }
  }
};
</script>

<style scoped>
.header-container {
  width: 100%;
  font-size: 3rem;
  padding: 1rem 0.5rem;
}
</style>
