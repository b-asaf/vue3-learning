import Assignment from "./assignment.js";

export default {
  components: { Assignment },
  template: `
    <section v-show="assignments.length">
      <h2 class="font-bold mb-2">
        {{ title }}
        <span>({{assignments.length}})</span>
      </h2>

      <div class="flex gap-2">
        <button
          @click="currentTag = tag"
          v-for="tag in tags"
          class="border rounded px-2 py-px text-xs"
          :class="{
            'text-blue-500 border-blue-500': tag === currentTag
          }"
        >
          {{ tag }}
        </button>
      </div>

      <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
        <Assignment
          v-for="assignment in filteredAssignments"
          :key="assignment.id"
          :assignment="assignment"
        >
        </Assignment>
      </ul>
    </section>
  `,

  props: {
    assignments: Array,
    title: String,
  },

  data() {
    return {
      currentTag: "all",
    };
  },

  computed: {
    filteredAssignments() {
      if (this.currentTag === "all") {
        return this.assignments;
      }
      return this.assignments.filter((item) => item.tag === this.currentTag);
    },

    tags() {
      return ["all", ...new Set(this.assignments.map((item) => item.tag))];
    },
  },
};
