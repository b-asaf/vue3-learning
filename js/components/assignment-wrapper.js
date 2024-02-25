import AssignmentList from "./assignment-list.js";

export default {
  components: { AssignmentList },
  template: `
    <section class="space-y-6">
      <AssignmentList :assignments="filters.inProgress" title="In Progress"></AssignmentList>
      <AssignmentList :assignments="filters.completed" title="Completed"></AssignmentList>
      
      <!-- on event listener '.prevent' can be added to prevent full page refresh same as e.preventDefault() in JS-->
      <form @:submit.prevent="add">
        <div class="border border-gray-600 text-black">
          <input v-model="newAssignment" placeholder="New assignment..." class="p-2">
          <button type="submit" class="bg-white p-2 border-l">Add</button>
        </div>
      </form>
    </section>

  `,
  data() {
    return {
      assignments: [
        { name: "Finish Project", isComplete: false, id: 1 },
        { name: "Read chapter 4", isComplete: false, id: 2 },
        { name: "Turn in homework", isComplete: false, id: 3 },
      ],

      newAssignment: "",
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
    add() {
      this.assignments.push({
        name: this.newAssignment,
        isComplete: false,
        id: this.assignments.length + 1,
      });

      this.newAssignment = "";
    },
  },
};
