<template>
  <div class="footer-container">
    <div class="footer-options">
      <input class="tag-input" v-model="inputTag" />
      <button @click="$_AddTag">ADD TAG</button>
      <div class="tags">
        <span
          class="tag"
          v-for="(tag, i) in tags"
          :key="i"
          @click="() => $_RemoveTag(i)"
        >
          {{ tag }}
        </span>
      </div>
    </div>
    <div class="footer-buttons">
      <button @click="$_Save">save</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostWriteFooter",
  data() {
    return {
      inputTag: ""
    };
  },
  props: {
    tags: {
      type: [String],
      required: true,
    },
    savePost: {
      type: Function,
      required: true,
    }
  },
  methods: {
    $_Save: function() {
      this.savePost();
      this.$router.push('/'); // navigate to home
      window.scrollTo(0, 0);
    },
    $_AddTag: function() {
      const newTag = [
        ...this.tags,
        this.inputTag
      ]
      this.inputTag = "";
      this.$emit("update:tags", newTag);
    },
    $_RemoveTag: function(index) {
      const newTags = this.tags.filter((tag, i) => i !== index);
      this.$emit("update:tags", newTags);
    }
  }
};
</script>

<style scoped>
.footer-container {
  width: 100%;
  padding: 1rem 0.5rem;
}

.footer-options {
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  padding: 0.5rem 1rem;
}

.tags {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.tag {
  padding: 0.25rem 0.5rem;
  margin: 0.25rem 0.25rem;
  border-radius: 4px;
  background: #41b883;
  cursor: pointer;
}

.footer-buttons {
  width: 100%;
  padding: 1rem 0.5rem;
}
</style>
