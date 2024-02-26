<script setup>
// version 1
// import { onMounted, ref } from 'vue'

// version 2 + 4
import { ref } from 'vue'

// let textarea = ref(null)

// // version 1
// onMounted(() => {
//   const textareaNode = textarea.value

//   textareaNode.addEventListener('keydown', (e) => {
//     // tab key presses
//     if (e.keyCode === 9) {
//       //get caret position/selection
//       let val = textareaNode.value
//       let startPosition = textareaNode.selectionStart
//       let endPosition = textareaNode.selectionEnd

//       // set textarea value to: text before caret + tab + text after caret
//       textareaNode.value = val.substring(0, startPosition) + '\t' + val.substring(endPosition)

//       // put caret at right position again
//       textareaNode.selectionStart = textareaNode.selectionEnd = startPosition + 1

//       e.preventDefault()
//     }
//   })
// })

// // version 2
// function onKeyDown(e) {
//   const textareaNode = textarea.value

//   // tab key presses
//   if (e.keyCode === 9) {
//     //get caret position/selection
//     let val = textareaNode.value
//     let startPosition = textareaNode.selectionStart
//     let endPosition = textareaNode.selectionEnd

//     // set textarea value to: text before caret + tab + text after caret
//     textareaNode.value = val.substring(0, startPosition) + '\t' + val.substring(endPosition)

//     // put caret at right position again
//     textareaNode.selectionStart = textareaNode.selectionEnd = startPosition + 1

//     e.preventDefault()
//   }
// }

// // version 3
// function onTabPress(e) {
//   const textareaNode = e.target

//   //get caret position/selection
//   let val = textareaNode.value
//   let startPosition = textareaNode.selectionStart
//   let endPosition = textareaNode.selectionEnd

//   // set textarea value to: text before caret + tab + text after caret
//   textareaNode.value = val.substring(0, startPosition) + '\t' + val.substring(endPosition)

//   // put caret at right position again
//   textareaNode.selectionStart = textareaNode.selectionEnd = startPosition + 1
// }

// version 4
import TabbableTextarea from '@/components//TabbableTextarea.vue'

let comment = ref('Enter your comment here...')
</script>

<template>
  <main>
    <form>
      <!-- version 1
      <textarea ref="textarea" style="width: 100%; height: 300px">Hi there</textarea>
      -->
      <!-- version 2 use keydown event
      <textarea ref="textarea" @keydown="onKeyDown" style="width: 100%; height: 300px">
Hi there</textarea
      > -->
      <!-- version 3
        1. add modifiers to the keydown event: .tab & .prevent
        2. remove ref
      
      <textarea @keydown.tab.prevent="onTabPress" style="width: 100%; height: 300px">
Hi there</textarea
      > -->
      <!-- version 4 - extract the text area to another component -->
      <TabbableTextarea v-model="comment" style="width: 100%; height: 300px" />
    </form>
  </main>
</template>
