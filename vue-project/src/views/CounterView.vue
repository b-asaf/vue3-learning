<script setup>
import { counter } from '@/stores/counterStore'
</script>

<template>
  <div>
    <h1>{{ counter.count }}</h1>
    <!-- not a good practice to directly mutate the state in the store
      <button @click="counter.count++">Increment</button>
      Use action instead as shown bellow:
    -->
    <button @click="counter.increment()">Increment</button>
  </div>
</template>
