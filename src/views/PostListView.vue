<template>
  <TheHeading :isScrollDown="isScrollDown" :handleModal="handleModal" />
  <SearchModal :isModalOpen="isModalOpen" :handleModal="handleModal" />
  <PostList>
    <PostOptions :viewBookMarkedPost="viewBookMarkedPost" :toggleViewBookMarkedPost="toggleViewBookMarkedPost"/>
    <PostListItem v-for="(post, i) in posts" :content="post.content" :title="post.title" :post="post" :key="i"/>
  </PostList>
</template>

<script>
import TheHeading from "../components/common/TheHeading.vue";
import SearchModal from "../components/modal/SearchModal.vue";
import PostOptions from '../components/PostOptions.vue'
import PostList from "../components/PostList.vue";
import PostListItem from "../components/PostListItem.vue";
export default {
  name: "PostListView",
  components: {
    TheHeading,
    SearchModal,
    PostOptions,
    PostList,
    PostListItem
  },
  data() {
    return {
      scrollTopValue: 0,
      isScrollDown: false,
      isModalOpen: false,
      viewBookMarkedPost: false,
    };
  },
  computed: {
    posts() {
      if(this.viewBookMarkedPost) {
        return this.$store.getters.getPostsByBookMarked;
      }
      else {
        return this.$store.getters.posts;
      }
    }
  },
  methods: {
    handleScroll: function() {
      this.scrollTopValue = document.documentElement.scrollTop;
    },
    handleModal: function(val) {
      this.isModalOpen = val;
    },
    toggleViewBookMarkedPost() {
      this.viewBookMarkedPost = !this.viewBookMarkedPost;
    }
  },
  watch: {
    scrollTopValue(newValue, oldValue) {
      if (oldValue < newValue) {
        this.isScrollDown = true;
      } else {
        this.isScrollDown = false;
      }
    },
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
.wrapper {
  height: 100%;
  width: 100%;
}

.test {
  height: 2000px;
}
</style>
