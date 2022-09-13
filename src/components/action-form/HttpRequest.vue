<script setup>
import { ref } from 'vue';
import CustomInput from '../form-components/CustomInput.vue';
import FormHeader from './FormHeader.vue';
import { useActionsStore } from '../../stores/actions';
import CustomSelect from '../form-components/CustomSelect.vue';

defineEmits(['onSidebarChange']);
const props = defineProps({
  selectedActionIndex: Number,
});

const actions = useActionsStore();

if (!actions.selectedActions[props.selectedActionIndex].data) {
  actions.selectedActions[props.selectedActionIndex].data = {
    endPoint: '',
    requestMethod: 'Post',
    options: [{ key: '', value: '' }],
    requestBody: '',
  };
}

const formData = actions.selectedActions[props.selectedActionIndex].data;

const options = ['Post', 'Put', 'Delete', 'Patch'];
</script>

<template>
  <FormHeader
    :selectedActionIndex="selectedActionIndex"
    @onSidebarChange="(value) => $emit('onSidebarChange', value)"
  />
  <div class="p-6">
    <CustomInput
      v-model="formData.endPoint"
      label="Request endpoint"
      id="endPoint"
      type="url"
      class="w-full"
    />

    <div>
      <CustomSelect
        :options="options"
        v-model="formData.requestMethod"
        label="Request Method"
      />
    </div>
    <div>
      <table
        class="mt-4 rounded-xl border-collapse border-none shadow-[0_0_0_1px_#e5e7eb]"
      >
        <thead>
          <tr class="text-left text-gray-400 text-lg">
            <th class="p-4 font-thin">Key</th>
            <th class="p-4 font-thin">Value</th>
            <th class="text-center">
              <button
                @click="formData.options.push({ key: '', value: '' })"
                class="text-blue-700 p-3 rounded-xl hover:bg-gray-100"
              >
                <font-awesome-icon icon="fa-solid fa-plus" class="h-6 w-6" />
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="border-t"
            v-for="(option, index) in formData.options"
            :key="index"
          >
            <td class="border-r">
              <CustomInput
                v-model="option.key"
                class="w-32 border-none rounded-none"
              />
            </td>
            <td class="border-r">
              <CustomInput
                v-model="option.value"
                class="w-32 border-none rounded-none"
              />
            </td>
            <td class="p-2">
              <button
                @click="formData.options.splice(index, 1)"
                class="p-3 rounded-xl hover:bg-gray-100"
              >
                <font-awesome-icon icon="fa-solid fa-trash" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <label class="font-semibold my-2 inline-block" for="requestBody"
      >Request body</label
    >
    <textarea
      v-model="formData.requestBody"
      id="requestBody"
      class="rounded-xl border p-3 w-full resize-y"
    />
  </div>
</template>
