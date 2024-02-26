import AssignmentList from "./assignment-list.js";
import AssignmentAddForm from "./assignment-add-form.js";

export default {
  components: { AssignmentList, AssignmentAddForm },
  template: `
    <section class="flex gap-8">
      <AssignmentList :assignments="filters.inProgress" title="In Progress">
        <AssignmentAddForm @add-assignment="add"></AssignmentAddForm>
      </AssignmentList>
      
      <div v-if="showCompleted">
        <AssignmentList
          :assignments="filters.completed"
          title="Completed"
          canToggle
          @toggle="showCompleted = !showCompleted"
        ></AssignmentList>
      </div>
    </section>
  `,

  data() {
    return {
      assignments: [],
      showCompleted: true,
    };
  },

  created() {
    fetch("http://localhost:3001/assignments")
      .then((response) => response.json())
      .then((data) => {
        this.assignments = data;
      });
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
