<script setup>
// // Approach A: use mixins for common functionality
// import flash from '@/mixins/flash'

// export default {
//   mixins: [flash]
// }

// // Approach B: use composable (similar to hooks in React) for common functionality
// import { useFlash } from '@/composables/useFlash'

// export default {
//   setup() {
//     let { flash } = useFlash()

//     return { flash }
//   }
// }

// Approach C: move setup object to be an attribute in the script tag
import { useFlash } from '@/composables/useFlash'

let { flash } = useFlash()
</script>

<template>
  <p>
    <button @click="flash('Yay', 'it worked on the about page', 'info')">Click me</button>
  </p>
</template>
