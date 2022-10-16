<template>

  <div
    :class="isScrollDown && !isMouseOnHeading ? 'heading shrink' : 'heading'"
    @mouseenter="() => setMouseOnHeading(true)"
    @mouseleave="() => setMouseOnHeading(false)"
  >
    <TheSearchInput :handleModal="handleModal" />
  </div>
</template>

<script>
import TheSearchInput from "./TheSearchInput.vue";
export default {
  name: "TheHeading",
  data() {
    return {
      isMouseOnHeading: false
    };
  },
  props: {
    isScrollDown: Boolean,
    handleModal: Function
  },
  methods: {
    setMouseOnHeading: function(val) {
      this.isMouseOnHeading = val;
    }
  },
  components: {
    TheSearchInput
  }
};
</script>

<style scoped>
.heading {
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 60px;
  background: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: -5px 0px 5px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  padding: 0 1rem;
  display: flex;
  align-items: center;
}

.shrink {
  height: 40px;
}
</style>
