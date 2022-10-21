<template>
  <PostWriteHeader
    :setShowingContentType="setShowingContentType"
    :showingContentType="showingContentType"
  />
  <PostWriteBody
    v-model:title="title"
    v-model:content="content"
    :markDownedContent="markDownedContent"
    :showingContentType="showingContentType"
  />
  <PostWriteFooter v-model:tags="tags" :savePost="savePost"/>
</template>

<script>
import PostWriteBody from "../components/postwrite/PostWriteBody.vue";
import PostWriteHeader from "../components/postwrite/PostWriteHeader.vue";
import PostWriteFooter from "../components/postwrite/PostWriteFooter.vue";
import { marked } from "marked";
import {uuid} from 'uuidv4';
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
    },
    savePost() {
      this.markDownedContent = this.parseToMarkDown(this.content);
      const { title, content, tags, markDownedContent } = this.$data
      const id = uuid();
      this.$store.commit('registerPost', {
        title,
        id,
        content,
        tags,
        markDownedContent
      })
    }
  }
};
</script>

<style scoped></style>
