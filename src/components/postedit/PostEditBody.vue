<template>
  <div class="body-container">
    <div class="body-title-container">
      <input :value="title" @input="$emit('update:title', $event.target.value)"/>
    </div>
    <div class="body-content-container">
      <textarea
        v-if="showingContentType === 'RAW'"
        class="content-area"
        :value="content"
        @input="$emit('update:content', $event.target.value)"
        debounce="300"
      ></textarea>
      <div
        class="content-area"
        v-if="showingContentType === 'MARKDOWNED'"
        v-html="markDownedContent"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostWriteBody",
  props: {
    title: String,
    content: String,
    markDownedContent: String,
    showingContentType: String
  }
};
</script>

<style scoped>
.body-container {
  width: calc(100% - 2rem);
  height: 90%;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.body-title-container {
  width: 100%;
}
.body-title-container input {
  height: 50px;
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0 1rem;
}
.body-title-container > input:focus {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
}
.body-content-container {
  width: 100%;
  flex-grow: 1;
}
.body-content-container > .content-area {
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  margin-top: 1rem;
  padding: 0.5rem;
  resize: none;
}
</style>
