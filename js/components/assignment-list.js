import Assignment from "./assignment.js";
import AssignmentTags from "./assignment-tags.js";
import Panel from "./panel.js";

export default {
  components: { Assignment, AssignmentTags, Panel },
  template: `
    <Panel v-show="assignments.length" class="w-60">
      <div class="flex justify-between items-start">
        <h2 class="font-bold mb-2">
          {{ title }}
          <span>({{assignments.length}})</span>
        </h2>
        <button v-show="canToggle" @click="$emit('toggle')">&times;</button>
      </div>

      <AssignmentTags
        v-model:currentTag="currentTag"
        :initial-tags="assignments.map(item => item.tag)"
      />

      <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
        <Assignment
          v-for="assignment in filteredAssignments"
          :key="assignment.id"
          :assignment="assignment"
        >
        </Assignment>
      </ul>
      
      <slot></slot>

      <!-- "v-slot" directive have a short version "#"
      <template v-slot:footer>
      -->
      <template #footer>
        My footer goes here...
      </template>
    </Panel>
  `,

  /* 2 ways to use v-model:
  // 1. v-model="dataToUse" -> in the props of the model a default prop name will be used: 'modelValue'
  // 2. v-model:propName="dataToUse" -> in the props of the model a custom prop name will be used:'propName'
  */
  props: {
    assignments: Array,
    title: String,
    canToggle: { type: Boolean, default: false },
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
