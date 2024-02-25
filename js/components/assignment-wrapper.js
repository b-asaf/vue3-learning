import AssignmentList from "./assignment-list.js";

export default {
  components: { AssignmentList },
  template: `
    <section class="space-y-6">
      <AssignmentList :assignments="filters.inProgress" title="In Progress"></AssignmentList>
      <AssignmentList :assignments="filters.completed" title="Completed"></AssignmentList>
    </section>
  `,
  data() {
    return {
      assignments: [
        { name: "Finish Project", isComplete: false, id: 1 },
        { name: "Read chapter 4", isComplete: false, id: 2 },
        { name: "Turn in homework", isComplete: false, id: 3 },
      ],
    };
  },

  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter((item) => !item.isComplete),
        completed: this.assignments.filter((item) => item.isComplete),
      };
    },
  },
};
