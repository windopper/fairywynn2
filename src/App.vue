<template>
  <TheHeading :isScrollDown="isScrollDown" :handleModal="handleModal" />
  <SearchModal :isModalOpen="isModalOpen" :handleModal="handleModal" />
  <PostList>
    <div class="test">hihi</div>
    <PostListItem />
  </PostList>
</template>

<script>
import TheHeading from "./components/common/TheHeading.vue";
import SearchModal from "./components/modal/SearchModal.vue";
import PostList from "./components/PostList.vue";
import PostListItem from "./components/PostListItem.vue";
export default {
  name: "App",
  components: {
    TheHeading,
    SearchModal,
    PostList,
    PostListItem
  },
  data() {
    return {
      scrollTopValue: 0,
      isScrollDown: false,
      isModalOpen: false,
      posts: []
    };
  },
  methods: {
    handleScroll: function() {
      this.scrollTopValue = document.documentElement.scrollTop;
    },
    handleModal: function(val) {
      this.isModalOpen = val;
    }
  },
  watch: {
    scrollTopValue(newValue, oldValue) {
      if (oldValue < newValue) {
        this.isScrollDown = true;
      } else {
        this.isScrollDown = false;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap");
:root {
  --vt-font-family-base: "Ubuntu", sans-serif;
}

* {
  font-family: var(--vt-font-family-base);
}

html,
body,
#app {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

.wrapper {
  height: 100%;
  width: 100%;
}

.test {
  height: 2000px;
}
</style>
