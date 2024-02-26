import Assignments from "./assignment-wrapper.js";
import Panel from "./panel.js";

export default {
  components: { Assignments, Panel },
  template: `
    <div class="grid gap-6">
      <Assignments></Assignments>
      <!-- OPTION 1
      <Panel heading="Panel heading"></Panel>
      OPTION 2 -->
      <Panel>
        <!-- use "v-slot" directive to bind the template to the relevant panel --> 
        <template v-slot:heading>
          This content going to heading slot
        </template>
        <template v-slot:default>
          This content going to default slot
        </template>
      </Panel>

      <Panel>
        <!-- when "v-slot" directive is not used, the content goes to the default slot -->
        Hey there
      </Panel>

      <Panel>
        <template v-slot:heading>
          Hey there
        </template>
        
        This is default content
        <template v-slot:footer>
          Click here to learn more
        </template>
      </Panel>
      
      <Panel theme="light">
        <template v-slot:heading>
          Hey there
        </template>
        
        This is default content
        <template v-slot:footer>
          Click here to learn more
        </template>
      </Panel>
    </div>
  `,
};
