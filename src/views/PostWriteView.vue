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
  <PostWriteFooter v-model:tags="tags" />
</template>

<script>
import PostWriteBody from "../components/postwrite/PostWriteBody.vue";
import PostWriteHeader from "../components/postwrite/PostWriteHeader.vue";
import PostWriteFooter from "../components/postwrite/PostWriteFooter.vue";
import { marked } from "marked";
export default {
  name: "PostWriteView",
  data() {
    return {
      title: "",
      content: "",
      tags: ["test", "1", "23232332"],
      markDownedContent: "",
      showingContentType: "RAW" // RAW, MARKDOWNED
    };
  },
  components: {
    PostWriteBody,
    PostWriteHeader,
    PostWriteFooter
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
