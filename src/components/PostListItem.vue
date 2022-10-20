<template>
  <div class="post-list-item-container">
    <div class="post-list-item img"></div>
    <div class="post-list-item-info-container">
      <div class="post-list-item-info title">{{title}}</div>
      <div class="post-list-item-info content">{{content}}</div>
      <div class="post-list-item-info date">{{date}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostListItem",
  props: {
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
  }
};
</script>

<style scoped>
.post-list-item-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 200px;
}

.post-list-item-info-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
}

.img {
  height: 80%;
  width: 50%;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
}

.title {
  font-size: 2rem;
}

.content {
  font-weight: 500;
}

.date {
  color: gray;
  font-weight: 300;
}
</style>
