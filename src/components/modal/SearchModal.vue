<template>
  <teleport to="body">
    <transition name="fade">
      <div v-if="isModalOpen" class="modal-wrapper">
        <div class="modal-background" @click="$_modalClose"></div>
        <div class="modal-container"></div>
      </div>
    </transition>
  </teleport>
</template>

<script>
export default {
  name: "SearchModal",
  props: {
    isModalOpen: Boolean,
    handleModal: Function
  },
  methods: {
    $_modalClose: function() {
      this.handleModal(false);
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
  width: 300px;
  height: 200px;
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
