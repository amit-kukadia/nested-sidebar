<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
import { useActionsStore } from '../../stores/actions';
const props = defineProps({
  selectedActionIndex: Number,
});
const emit = defineEmits(['onSidebarChange']);
const actions = useActionsStore();
const deleteAction = () => {
  actions.removeFromSelectedActions(props.selectedActionIndex);
  emit('onSidebarChange', 'ActionList');
};
</script>
<template>
  <div class="flex border-b border-gray-400 px-6 py-3 gap-4 items-center">
    <button @click="$emit('onSidebarChange', 'ActionList')">
      <font-awesome-icon icon="fa-solid fa-chevron-left" />
    </button>
    <h6 class="text-xl grow">
      {{ actions.selectedActions[props.selectedActionIndex].name }}
    </h6>
    <div>
      <Menu as="div" class="relative inline-block text-left">
        <div>
          <MenuButton
            class="rounded-md px-4 py-2 hover:bg-opacity-30 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            <font-awesome-icon icon="fa-solid fa-ellipsis" />
          </MenuButton>
        </div>

        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <MenuItems
            class="absolute right-0 mt-2 w-56 origin-top-right divide-y z-10 divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div class="px-1 py-1">
              <MenuItem v-slot="{ active }">
                <button
                  :class="[
                    active ? 'bg-violet-500 text-white' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                  @click="actions.toggleAcive(props.selectedActionIndex)"
                >
                  Make
                  {{
                    actions.selectedActions[props.selectedActionIndex]
                      .isInactive
                      ? 'active'
                      : 'inactive'
                  }}
                </button>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <button
                  :class="[
                    active ? 'bg-violet-500 text-white' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                  @click="deleteAction"
                >
                  Delete
                </button>
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
      </Menu>
    </div>
  </div>
</template>
