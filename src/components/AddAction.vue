<script setup>
import { computed, ref } from 'vue';
import { useActionsStore } from '../stores/actions';
import CustomCheckBox from './form-components/CustomCheckBox.vue';
import CustomInput from './form-components/CustomInput.vue';

const emit = defineEmits(['onSidebarChange']);

const actions = useActionsStore();

actions.resetActions();

const searchText = ref('');

const checkIfSubstringPresent = (stringToSearch, substring) =>
  stringToSearch.toLowerCase().indexOf(substring.toLowerCase()) !== -1;

const filteredNativeActions = computed(() => {
  if (!searchText.value) return actions.nativeActions;
  else {
    return actions.nativeActions.filter((action) =>
      checkIfSubstringPresent(action.name, searchText.value)
    );
  }
});

const filteredIntegrationActions = computed(() => {
  if (!searchText.value) return actions.integrationActions;
  else {
    return actions.integrationActions.filter((action) =>
      checkIfSubstringPresent(action.name, searchText.value)
    );
  }
});

const isAnyActionSelected = computed(() => {
  const isNativeActionSelected = actions.nativeActions.find(
    (action) => action.isSelected
  );
  if (isNativeActionSelected) return true;
  return actions.integrationActions.find((action) => action.isSelected);
});

const addToSelectedActions = () => {
  actions.addToSelectedActions();
  emit('onSidebarChange', 'ActionList');
};
</script>

<template>
  <div class="flex flex-col justify-between h-screen">
    <div>
      <div class="flex border-b border-gray-400 px-6 py-3">
        <button @click="$emit('onSidebarChange', 'ActionList')">
          <font-awesome-icon icon="fa-solid fa-chevron-left" />
        </button>
        <h6 class="text-xl ml-4">Add actions</h6>
      </div>
      <div class="p-4">
        <CustomInput
          class="w-full"
          v-model="searchText"
          placeholder="Search action"
          prependIcon="fa-solid fa-magnifying-glass"
        />
        <div class="my-3 text-gray-400">Native popup actions</div>
        <div
          v-for="action in filteredNativeActions"
          class="p-4 hover:bg-gray-100 flex items-center"
        >
          <font-awesome-icon :icon="action.icon" class="mr-4" />
          <CustomCheckBox v-model="action.isSelected" :label="action.name" />
        </div>

        <div class="my-3 text-gray-400">Integration with other apps</div>
        <div
          v-for="action in filteredIntegrationActions"
          class="p-4 hover:bg-gray-100 flex items-center"
        >
          <font-awesome-icon :icon="action.icon" class="mr-4" />
          <CustomCheckBox v-model="action.isSelected" :label="action.name" />
        </div>
      </div>
      <div
        class="border-t flex justify-center gap-6 py-6"
        v-if="isAnyActionSelected"
      >
        <button
          @click="$emit('onSidebarChange', 'ActionList')"
          class="border rounded-xl px-10 py-3"
        >
          Cancel
        </button>
        <button
          @click="addToSelectedActions"
          class="border rounded-xl px-10 py-3 bg-blue-700 text-white"
        >
          Confirm
        </button>
      </div>
    </div>
  </div>
</template>
