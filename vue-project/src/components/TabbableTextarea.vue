<script setup>
// defineProps & defineEmits can be define only inside "script setup"
defineProps({
  modelValue: String
})

let emitFn = defineEmits(['update:modelValue'])

function onTabPress(e) {
  const textareaNode = e.target

  //get caret position/selection
  let val = textareaNode.value
  let startPosition = textareaNode.selectionStart
  let endPosition = textareaNode.selectionEnd

  // set textarea value to: text before caret + tab + text after caret
  textareaNode.value = val.substring(0, startPosition) + '\t' + val.substring(endPosition)

  // put caret at right position again
  textareaNode.selectionStart = textareaNode.selectionEnd = startPosition + 1
}

function update(e) {
  // this is not possible inside script setup
  // this.$emit('update:modelValue', e.target.value)

  // the equivalent to the line above
  // it can also be inline
  emitFn('update:modelValue', e.target.value)
}
</script>

<template>
  <textarea @keydown.tab.prevent="onTabPress" @keyup="update" v-text="modelValue" />
  <!--
    inline version
    <textarea @keydown.tab.prevent="onTabPress" @keyup="emitFn('update:modelValue', e.target.value)" v-text="modelValue" />
  -->
</template>
