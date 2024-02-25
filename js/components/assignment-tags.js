export default {
  template: `
    <div class="flex gap-2">
      <button
        @click="$emit('change-tag', tag)"
        v-for="tag in tags"
        class="border rounded px-2 py-px text-xs"
        :class="{
          'text-blue-500 border-blue-500': tag === currentTag
        }"
      >
        {{ tag }}
      </button>
    </div>
  `,

  props: {
    initialTags: Array,
    currentTag: String,
  },

  computed: {
    tags() {
      return ["all", ...new Set(this.initialTags)];
    },
  },
};
