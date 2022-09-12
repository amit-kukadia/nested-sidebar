<script setup>
import { ref } from 'vue';
import { useActionsStore } from '../../stores/actions';
import FormHeader from './FormHeader.vue';
import CustomInput from '../form-components/CustomInput.vue';

const props = defineProps({
  selectedActionIndex: Number,
});
const emit = defineEmits(['onSidebarChange']);

const actions = useActionsStore();

if (!actions.selectedActions[props.selectedActionIndex].data) {
  actions.selectedActions[props.selectedActionIndex].data = [];
}
const newTagText = ref('');

const addTag = () => {
  actions.selectedActions[props.selectedActionIndex].data.push(
    newTagText.value
  );
  newTagText.value = '';
};
</script>

<template>
  <FormHeader
    :selectedActionIndex="selectedActionIndex"
    @onSidebarChange="(value) => $emit('onSidebarChange', value)"
  />
  <div class="flex p-3">
    <CustomInput
      v-model="newTagText"
      class="grow w-full"
      placeholder="Add tag..."
      @keypress.enter.self="addTag"
    />

    <button
      @click="addTag"
      class="border bg-blue-700 py-3 px-6 rounded-lg text-white"
    >
      Add
    </button>
  </div>
  <div
    v-for="(tag, index) in actions.selectedActions[props.selectedActionIndex]
      .data"
    class="border rounded-xl p-3 m-2 bg-gray-100 flex items-center"
  >
    <span class="w-4 h-4 rounded-full bg-green-600 inline-block mr-2"></span>
    <span class="grow">{{ tag }}</span>
    <button
      @click="
        actions.selectedActions[props.selectedActionIndex].data.splice(index, 1)
      "
    >
      <font-awesome-icon icon="fa-solid fa-trash" />
    </button>
  </div>
</template>
