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
  <main>
    <p>
      <button @click="flash('Test', 'it worked')">Click me</button>
    </p>
  </main>
</template>
