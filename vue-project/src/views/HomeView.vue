<script setup>
// import { ref, watch } from 'vue'
import { useStorage } from '../composables/useStorage'

// // Option A: all the logic inside the component
// let food = ref(localStorage.getItem('food'))
// let age = ref(localStorage.getItem('age'))

// watch(food, (val) => {
//   write('food', val)
// })

// watch(age, (val) => {
//   write('age', val)
// })

// function write(key, value) {
//   localStorage.setItem(key, value)
// }

// setTimeout(() => {
//   food.value = 'changed'
// }, 2000)

// Option B
let food = useStorage('food', 'salad')
let age = useStorage('age')

let obj = useStorage('obj', { one: 'one' })

setTimeout(() => {
  obj.value.one = 'changed'
}, 3000)
</script>

<template>
  <main>
    <p>
      <!--
      To modify the value in the local storage it is possible to listen to an event using: "@"
      What is your favorite food? <input type="text" v-model="food" @input="write('food', food)" />
      OR watch the value change
      -->
      What is your favorite food? <input type="text" v-model="food" />
    </p>
    <!-- <p>How old are you? <input type="text" v-model="age" @input="write('age', age)" /></p> -->
    <p>How old are you? <input type="text" v-model="age" /></p>
  </main>
</template>
