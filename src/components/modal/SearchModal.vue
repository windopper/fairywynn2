<template>
  <teleport to="body">
    <transition name="fade">
      <div v-if="isModalOpen" class="modal-wrapper">
        <div class="modal-background" @click="$_modalClose"></div>
        <div class="modal-container">
          <input class="modal-search-input" v-model="inputValue" />
          <div class="modal-content">
            <div
              class="modal-searched-nothing"
              v-if="searchedPosts.length === 0"
            >
              nothing searched
            </div>
            <div
              class="modal-searched-post"
              v-for="(post, i) in searchedPosts"
              @click="() => navigateToPost(post.id)"
              :key="i"
            >
              <div class="title">
                {{ post?.title }}
              </div>
              <div class="content">
                {{ post?.content }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
export default {
  name: "SearchModal",
  data() {
    return {
      inputValue: "",
      searchedPosts: []
    };
  },
  props: {
    isModalOpen: Boolean,
    handleModal: Function
  },
  methods: {
    $_modalClose: function() {
      this.handleModal(false);
    },
    navigateToPost: function(id) {
      this.$router.push(`/post/${id}`);
    }
  },
  watch: {
    inputValue(newValue) {
      if (newValue === "") {
        this.searchedPosts = [];
        return;
      }
      this.searchedPosts = this.$store.getters.getPostsByTitle(newValue);
    }
  }
};
</script>

<style scoped>
.modal-wrapper {
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-background {
  position: fixed;
  z-index: 3;
  background: rgba(0, 0, 0, 0.2);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.modal-container {
  position: fixed;
  z-index: 4;
  background: white;
  border-radius: 5px;
  min-width: 90%;
  min-height: 200px;
  max-height: 80%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media screen and (min-width: 800px) {
  .modal-container {
    min-width: 768px;
  }
}

.modal-search-input {
  width: 100%;
  height: 50px;
  padding: 1rem;
  border: 4px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  outline: none;
}

.modal-content {
  width: 100%;
  padding: 1rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  overflow-x: hidden;
}

.modal-content::-webkit-scrollbar {
  display: none;
}

.modal-searched-nothing {
  padding: 2rem;
  font-weight: 600;
  font-size: 1rem;
}

.modal-searched-post {
  width: 100%;
  height: 100px;
  padding: 1rem;
  display: flex;
  align-items: center;
  border-radius: 4px;
  transition: background 0.2s;
}

.modal-searched-post:hover {
  cursor: pointer;
  background: rgba(0, 0, 0, 0.1);
}

.modal-searched-post > .title {
  font-weight: 600;
  font-size: 1.5rem;
  height: 100%;
  width: 30%;
  padding: 5px;
}

.modal-searched-post > .content {
  color: rgba(0, 0, 0, 0.5);
  height: 100%;
  padding: 5px;
  overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
