import AssignmentList from "./assignment-list.js";
import AssignmentAddForm from "./assignment-add-form.js";

export default {
  components: { AssignmentList, AssignmentAddForm },
  template: `
    <section class="space-y-6">
      <AssignmentList :assignments="filters.inProgress" title="In Progress"></AssignmentList>
      <AssignmentList :assignments="filters.completed" title="Completed"></AssignmentList>
      
      <AssignmentAddForm v-on:add-assignment="add"></AssignmentAddForm>
    </section>

  `,
  data() {
    return {
      assignments: [
        { name: "Finish Project", isComplete: false, id: 1, tag: "math" },
        { name: "Read chapter 4", isComplete: false, id: 2, tag: "science" },
        { name: "Turn in homework", isComplete: false, id: 3, tag: "math" },
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

  methods: {
    add(name) {
      this.assignments.push({
        name: name,
        isComplete: false,
        id: this.assignments.length + 1,
      });
    },
  },
};
