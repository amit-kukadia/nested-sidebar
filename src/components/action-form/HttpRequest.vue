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
const endPoint = ref('');

const requestMethod = ref('Post');

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
      <table>
        <thead>
          <tr>
            <th class="p-4">Key</th>
            <th class="p-4">Value</th>
            <th>
              <button
                @click="formData.options.push({ key: '', value: '' })"
                class="text-blue-700"
              >
                <font-awesome-icon icon="fa-solid fa-plus" />
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="border"
            v-for="(option, index) in formData.options"
            :key="index"
          >
            <td><CustomInput v-model="option.key" class="w-32" /></td>
            <td><CustomInput v-model="option.value" class="w-32" /></td>
            <td class="p-4">
              <button @click="formData.options.splice(index, 1)">
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
