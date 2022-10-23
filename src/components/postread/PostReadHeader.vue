<template>
  <div class="header-container">
    <span class='header-items'>    
      <span class="material-symbols-outlined pointer" @click="navigateBack">
      arrow_back_ios
      </span>
    </span>
    <span class='header-items'>
      <span v-if="isBookMarked" class="material-icons pointer" @click="removeBookMark">
        bookmark
      </span>
      <span v-else class="material-icons pointer" @click="addBookMark">
        bookmark_border
      </span>
    </span>
  </div>
</template>

<script>
export default {
  name: "PostReadHeader",
  props: {
    post: Object,
  },
  methods: {
    navigateBack() {
      this.$router.push("/");
    },
    addBookMark() {
      this.$store.commit('addBookMark', this.post?.id);
    },
    removeBookMark() {
      this.$store.commit('removeBookMark', this.post?.id)
    }
  },
  computed: {
    isBookMarked() {
      return this.$store.getters.isBookMarked(this.post?.id)
    }
  }
};
</script>

<style>
.header-container {
  width: 100%;
  font-size: 3rem;
  padding: 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-items {
  max-height: fit-content;
  min-width: fit-content;
}

.pointer {
  cursor: pointer;
}
</style>
