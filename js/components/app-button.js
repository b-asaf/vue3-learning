export default {
  template: `
  <button
    :class="{
      'border rounded-md px-5 py-2 disabled:cursor-not-allowed': true,
      'bg-blue-200 hover:bg-blue-400': type === 'primary',
      'bg-purple-400 hover:bg-purple-200': type ==='secondary',
      'bg-gray-200 hover:bg-gray-400': type === 'muted',
      'is-loading': processing,
    }"
    :disabled="processing"
  >
      <slot />
  </button>
  `,

  props: {
    type: {
      type: String,
      default: "primary",
    },

    processing: {
      type: Boolean,
      default: false,
    },
  },
  // data() {
  //   return {
  //     processing: false,
  //   };
  // },
};
