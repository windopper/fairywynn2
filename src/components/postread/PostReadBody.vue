<template>
    <div class="body-container">
    <div class="body-title-container">
      <h3>{{post.title}}</h3>
    </div>
    <div class="body-content-container">
      <div
        class="content-area"
        v-html="post.markDownedContent"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'PostReadBody',
    props: {
        post: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style>
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
.body-title-container > h3 {
  height: 50px;
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0 1rem;
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