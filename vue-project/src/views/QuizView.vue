<script setup>
import Quiz from '@/components/Quiz/QuizWrapper.vue'
import { state } from '@/stores/quizStore'
</script>

<template>
  <main>
    <Quiz :quiz="state" />
  </main>
</template>
