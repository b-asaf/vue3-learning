<script setup>
import { inject } from 'vue'

// let { name, updateName } = inject('name')

// defineProps({ quiz: Object })
let quiz = inject('quiz')
</script>

<template>
  <div>
    <!--
      instead of prop drilling
    <h5>{{ quiz.name }}</h5>
      Accessing the value that was injected
    <h5>{{ name }}</h5>
    <button @click="updateName">{{ name }}</button>
    -->
    <h5>{{ quiz.name }}</h5>
    <ul>
      <li><a href="#">Get a Job</a></li>
      <li><a href="#">Contact Us</a></li>
    </ul>
  </div>
</template>
