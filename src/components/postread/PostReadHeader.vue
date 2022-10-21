<template>
  <div class='header-container'>
<span class="material-symbols-outlined back" @click="navigateBack">
    
    arrow_back_ios
</span>
    </div>

</template>

<script>
export default {
    name: 'PostReadHeader',
    methods: {
        navigateBack() {
            this.$router.go(-1);
        }
    }
}
</script>

<style>
.header-container {
  width: 100%;
  font-size: 3rem;
  padding: 1rem 1rem;
  display: flex;
  align-items: center;
}

.back {
    cursor: pointer;
}
</style>