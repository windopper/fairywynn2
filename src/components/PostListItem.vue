<template>
  <div class="post-list-item-container" @click="navigateToPost">
    <div class="post-list-item img"></div>
    <div class="post-list-item-info-container">
      <div class="post-list-item-info title">{{post.title}}</div>
      <div class="post-list-item-info content">{{post.content}}</div>
      <div class="post-list-item-info date">{{localeDate}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostListItem",
  props: {
    post: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      required: false,
      default: 'title'
    },
    content: {
      type: String,
      required: false,
      default: 'content',
    },
    date: {
      type: String,
      required: false,
      default: 'date',
    }
  },
  methods: {
    navigateToPost() {
      this.$router.push(`/post/${this.post.id}`)
    }
  },
  computed: {
    localeDate() {
      return new Date(this.post.date).toLocaleString();
    }
  }
};
</script>

<style scoped>
.post-list-item-container {
  position: relative;
  display: grid;
  /* justify-content: space-evenly; */
  /* align-items: center; */
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 200px;
  width: 100%;
  height: 200px;
  cursor: pointer;
}

.post-list-item-info-container {
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 4fr 1fr;
  grid-template-columns: 1fr;
  padding: 1rem;
}

.post-list-item-info {
  width: 50%;
}

.img {
  height: 80%;
  width: 80%;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  justify-self: center;
  align-self: center;
}

.title {
  font-size: 2rem;
}

.content {
  font-weight: 500;
  overflow: hidden;
}

.date {
  color: gray;
  font-weight: 300;
}
</style>
