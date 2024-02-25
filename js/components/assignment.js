export default {
  template: `
    <li>
      <label>
        {{ assignment.name }}
        <input type="checkbox" v-model="assignment.isComplete">
      </label>
    </li>
  `,

  props: {
    assignment: Object,
  },
};
