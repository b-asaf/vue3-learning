export default {
  // OPTION 1 - use components PROPS
  // template: `
  //   <div class="bg-gray-700 p-4 border border-gray-600 rounded-lg">
  //     <!--
  //       <h2 class="font-bold">{{ heading }}</h2>
  //       components props can be access via "{{ propName }}" or using "v-text" directive
  //     -->
  //     <h2 class="font-bold" v-text="heading"></h2>
  //   </div>
  // `,

  // OPTION 2 - use "slot" component, and make it more flexible
  template: `
    <div :class="{
      'p-4 border rounded-lg': true,
      'bg-gray-700 border-gray-600 text-white': theme === 'dark',
      'bg-white border-gray-300 text-black': theme === 'light',
    }">
      <!-- render heading slot only if heading exists in $slots array -->
      <h2 v-if="$slots.heading" class="font-bold mb-2">
        <slot name="heading" />
      </h2>

      <!-- default slot does not require the "name" attribute
      <slot name="default" />
      -->
      <slot />

      <footer v-if="$slots.footer" class="border-gray-600 border-t mt-4 pt-2 text-sm">
        <slot name="footer" />
      </footer>
    </div>
  `,

  props: {
    // OPTION 1
    // heading: String,
    theme: { type: String, default: "dark" },
  },
};
