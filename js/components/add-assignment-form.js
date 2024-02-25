export default {
  template: `
    <!-- on event listener '.prevent' can be added to prevent full page refresh same as e.preventDefault() in JS-->
    <form @:submit.prevent="add">
      <div class="border border-gray-600 text-black">
        <input v-model="newAssignment" placeholder="New assignment..." class="p-2">
        <button type="submit" class="bg-white p-2 border-l">Add</button>
      </div>
    </form>
  `,

  data() {
    return {
      newAssignment: "",
    };
  },

  methods: {
    add() {
      // broadcast the data (this.newAssignment) to the parent or any other component that listen to the event (add-assignment)
      this.$emit("add-assignment", this.newAssignment);
      this.newAssignment = "";
    },
  },
};
