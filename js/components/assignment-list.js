import Assignment from "./assignment.js";
import AssignmentTags from "./assignment-tags.js";

export default {
  components: { Assignment, AssignmentTags },
  template: `
    <section v-show="assignments.length">
      <h2 class="font-bold mb-2">
        {{ title }}
        <span>({{assignments.length}})</span>
      </h2>

      <AssignmentTags
        :initial-tags="assignments.map(item => item.tag)"
        :currentTag="currentTag"
        @change-tag="currentTag = $event"
      />

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
  },
};
