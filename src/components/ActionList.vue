<script setup>
import { useActionsStore } from '../stores/actions';
const actions = useActionsStore();
defineEmits(['onSidebarChange']);
</script>
<template>
  <div>
    <div class="flex justify-between border-b border-gray-400 px-6 py-3">
      <h6 class="text-xl text-yellow-400 font-bold">Action</h6>
      <button>
        <font-awesome-icon icon="fa-solid fa-ellipsis" />
      </button>
    </div>

    <div class="p-6">
      <div class="font-bold text-xl">Assigned actions</div>
      <div class="font-thin">
        The selected actions will run in the background when the user journey
        gets to this element
      </div>
    </div>
    <div class="p-6">
      <div class="rounded-lg border border-gray-400">
        <button
          v-for="(action, index) in actions.selectedActions"
          class="w-full p-6 border-b border-gray-400 flex justify-between"
          :class="{ 'text-gray-400': action.isInactive }"
          @click="$emit('onSidebarChange', action.component, index)"
        >
          <span>{{ action.name }}</span>
          <span v-if="action.isInactive">inactive</span>
        </button>
        <button
          class="w-full p-6 text-blue-700 flex justify-between items-center font-bold"
          @click="$emit('onSidebarChange', 'AddAction')"
        >
          <span>Add actions</span>
          <font-awesome-icon icon="fa-solid fa-plus" />
        </button>
      </div>
    </div>
  </div>
</template>
