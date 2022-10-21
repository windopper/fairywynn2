<template>
  <PostReadHeader />
  <PostReadBody :post="post"/>
</template>

<script>
import PostReadBody from '../components/postread/PostReadBody.vue'
import PostReadHeader from '../components/postread/PostReadHeader.vue'
export default {
  name: 'PostReadView',
  components: {
    PostReadBody,
    PostReadHeader,
  },
  data() {
    return {
      post: this.$store.getters.getPostById(this.$route.params.id)
    }
  },
  mounted() {
    console.log(this.post);
  }
}
</script>

<style>

</style>