<template>
  <PostWriteHeader
    :setShowingContentType="setShowingContentType"
    :showingContentType="showingContentType"
  />
  <PostWriteBody
    v-model:content="content"
    :markDownedContent="markDownedContent"
    :showingContentType="showingContentType"
  />
</template>

<script>
import PostWriteBody from "../components/postwrite/PostWriteBody.vue";
import PostWriteHeader from "../components/postwrite/PostWriteHeader.vue";
import { marked } from "marked";
export default {
  name: "PostWriteView",
  data() {
    return {
      title: "",
      content: "",
      markDownedContent: "",
      showingContentType: "RAW" // RAW, MARKDOWNED
    };
  },
  components: {
    PostWriteBody,
    PostWriteHeader
  },
  methods: {
    setShowingContentType: function(type) {
      this.showingContentType = type;
      this.markDownedContent = this.parseToMarkDown(this.content);
    },
    parseToMarkDown: function(value) {
      return marked.parse(value);
    }
  }
};
</script>

<style scoped></style>
