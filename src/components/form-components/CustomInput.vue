<script setup>
defineProps({
  prependIcon: String,
  appendIcon: String,
  modelValue: String | Number,
  label: String,
});
defineEmits(['update:modelValue']);
</script>

<template>
  <div class="relative inline-block">
    <font-awesome-icon
      class="absolute w-5 h-5 top-4 left-4 text-gray-600"
      v-if="prependIcon"
      :icon="prependIcon"
    />
    <label
      v-if="label"
      class="font-semibold my-2 inline-block"
      :for="$attrs.id"
      >{{ label }}</label
    >
    <br v-if="label" />
    <input
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="p-3 border rounded-xl"
      :class="{ 'pl-12': prependIcon, 'pr-12': appendIcon }"
    />
    <font-awesome-icon
      class="absolute w-5 h-5 top-4 right-4 text-gray-600"
      v-if="appendIcon"
      :icon="appendIcon"
    />
  </div>
</template>
