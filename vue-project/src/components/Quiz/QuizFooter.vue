<script setup>
import QuizFooterLink from './QuizFooterLink.vue'

defineProps({ quiz: Object })
</script>

<template>
  <footer>
    <h4>Quiz Footer</h4>
    <QuizFooterLink :quiz="quiz" />
  </footer>
</template>
