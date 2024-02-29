<script setup>
defineProps({
  show: Boolean
})
</script>

<template>
  <!--
    inline style for Transition 
    <Transition
    enter-from-class="opacity-0 scale-125"
    enter-to-class="opacity-100 scale-100"
    enter-active-class="transition duration-300"
    leave-active-class="transition duration-200"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-125"
  > -->
  <Transition name="modal">
    <div v-if="show" class="modal-mask" @click="$emit('close')">
      <div class="modal-inner">
        <header><slot name="header">default header</slot></header>

        <div><slot>default body</slot></div>

        <footer class="modal-footer">
          <slot name="footer"><button @click="$emit('close')">Default Close</button></slot>
        </footer>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 1s;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-to,
.modal-leave-from {
  opacity: 100;
}

.modal-mask {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: grid;
  place-items: center;
  color: black;
}
.modal-inner {
  background: white;
  padding: 1rem;
  width: 80vw;
  max-width: 500px;
  border-radius: 8px;
}

.modal-footer {
  border-top: 1px solid #ddd;
  margin-top: 1rem;
  padding-top: 0.5rem;
  font-size: 0.8rem;
}

.modal-footer button {
  background: #ddd;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;

  &:hover {
    background: #c8c8c8;
  }
}
</style>
