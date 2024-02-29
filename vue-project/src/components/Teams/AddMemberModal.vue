<script setup>
import { ref } from 'vue'

import Modal from '@/components/Modal.vue'
import { useTeamStore } from '@/stores/TeamStore'

let team = useTeamStore()
let showModal = ref(false)
</script>

<template>
  <button
    class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
    :disabled="!team.spotsRemaining"
    @click="showModal = true"
  >
    Add Member ({{ team.spotsRemaining }} Spots Left)
  </button>
  <!--
    Teleport is a way in Vue to move html elements into a specific and EXISTING location in the HTML tree
    As best practice - Modal should be at the bottom of the page
    This is good to keep code close together but in the HTML each element will be placed in different location in the the HTML tree
  -->
  <Teleport to="body">
    <Modal :show="showModal" @close="showModal = false">
      <template #header>override the header</template>
      <template #default>
        <p>Need to add a new member to your team?</p>
        <form class="mt-6">
          <div class="flex gap-2">
            <input type="email" class="flex-1" placeholder="Email address..." />
            <button>Add</button>
          </div>
        </form>
      </template>
    </Modal>
  </Teleport>
</template>
