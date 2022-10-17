<template>
  <PostWriteHeader />
  <PostWriteBody />
</template>

<script>
import PostWriteBody from "../components/postwrite/PostWriteBody.vue";
import PostWriteHeader from "../components/postwrite/PostWriteHeader.vue";
export default {
  name: "PostWriteView",
  components: {
    PostWriteBody,
    PostWriteHeader
  }
};
</script>

<style scoped></style>
