<script setup>
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue';

defineProps({
  modelValue: Boolean,
  label: String,
});
defineEmits(['update:modelValue']);
</script>

<template>
  <SwitchGroup>
    <div class="flex items-center w-full hover:bg-gray-100">
      <SwitchLabel v-if="label" class="grow">{{ label }}</SwitchLabel>
      <Switch
        :value="String(modelValue)"
        @update:model-value="(newValue) => $emit('update:modelValue', newValue)"
        :class="modelValue ? 'bg-blue-700' : 'bg-gray-200'"
        class="h-6 w-6 flex items-center justify-center rounded-lg relative transition-colors focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
      >
        <font-awesome-icon
          v-if="modelValue"
          icon="fa-solid fa-check"
          class="absolute h-4 w-4 text-white inline-block"
        />
      </Switch>
    </div>
  </SwitchGroup>
</template>
