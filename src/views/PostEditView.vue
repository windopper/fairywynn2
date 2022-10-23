<template>
  <PostEditHeader
    :setShowingContentType="setShowingContentType"
    :showingContentType="showingContentType"
  />
  <PostEditBody
    v-model:title="post.title"
    v-model:content="post.content"
    :markDownedContent="post.markDownedContent"
    :showingContentType="showingContentType"
  />
  <PostEditFooter v-model:tags="post.tags" :savePost="savePost"/>
</template>

<script>
import PostEditBody from "../components/postedit/PostEditBody.vue";
import PostEditHeader from "../components/postedit/PostEditHeader.vue";
import PostEditFooter from "../components/postedit/PostEditFooter.vue";
import { marked } from "marked";
export default {
  name: "PostEditView",
  data() {
    return {
      showingContentType: "RAW" // RAW, MARKDOWNED
    };
  },
  computed: {
    post() {
        const id = this.$route.params.id;
        return this.$store.getters.getPostById(id);
    }
  },
  components: {
    PostEditBody,
    PostEditHeader,
    PostEditFooter
  },
  methods: {
    setShowingContentType(type) {
      this.showingContentType = type;
      this.post.markDownedContent = this.parseToMarkDown(this.post.content);
    },
    parseToMarkDown: function(value) {
      return marked.parse(value);
    },
    savePost() {
      this.post.markDownedContent = this.parseToMarkDown(this.post.content);
      this.$store.commit('editPost', {...this.post})
    }
  }
};
</script>

<style scoped></style>
