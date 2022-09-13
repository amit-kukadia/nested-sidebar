<script setup>
import { useActionsStore } from '../stores/actions';

const actions = useActionsStore();
defineEmits(['onSidebarChange']);
</script>

<template>
  <div>
    <div class="flex border-b px-6 py-3 items-center">
      <font-awesome-icon
        icon="fa-solid fa-bolt"
        class="mr-4 text-yellow-400 h-5 w-5"
      />
      <h6 class="text-xl text-yellow-400 font-bold grow">Action</h6>
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
      <!-- <div class="rounded-lg border border-gray-400"> -->
      <button
        v-for="(action, index) in actions.selectedActions"
        class="w-full p-6 border-b border-gray-400 flex justify-between hover:bg-gray-100"
        :class="{
          'text-gray-400': action.isInactive,
          'border-x': index < actions.selectedActions.length,
          'border-t rounded-t-xl': index === 0,
        }"
        @click="$emit('onSidebarChange', action.component, index)"
      >
        <span>
          <font-awesome-icon :icon="action.icon" class="mr-4" />
          {{ action.name }}
        </span>
        <span v-if="action.isInactive">inactive</span>
      </button>
      <button
        class="w-full p-6 text-blue-700 flex justify-between items-center font-bold rounded-xl border border-gray-400 hover:bg-gray-100"
        :class="{ 'border-t-0 rounded-t-none': actions.selectedActions.length }"
        @click="$emit('onSidebarChange', 'AddAction')"
      >
        <span>Add actions</span>
        <font-awesome-icon icon="fa-solid fa-plus" />
      </button>
    </div>
  </div>
</template>
