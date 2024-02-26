<script setup>
// import QuizHeader from './quizHeader.vue'
// import QuizQuestion from './quizQuestion.vue'
import QuizFooter from '../../components/Quiz/QuizFooter.vue'
import { provide /*, ref */ } from 'vue'

let props = defineProps({
  quiz: Object
})

// let name = ref('John Doe')
// // Only the children components of Quiz can access the value of `key` (similar to context in React)

// // This way the name can be updated only from the here
// provide('name', {
//   name,
//   // passing the function to children components of Quiz
//   updateName: () => (name.value = 'Changed name')
// })

provide('quiz', props.quiz)
</script>

<template>
  <h1>{{ name }}</h1>
  <!-- <QuizHeader />

  <QuizQuestion /> -->

  <QuizFooter :quiz="quiz" />
</template>
