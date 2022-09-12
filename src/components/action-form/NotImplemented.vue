<script setup>
import FormHeader from './FormHeader.vue';

const props = defineProps({
  selectedActionIndex: Number,
});
const emit = defineEmits(['onSidebarChange']);
</script>
<template>
  <FormHeader
    :selectedActionIndex="selectedActionIndex"
    @onSidebarChange="(value) => $emit('onSidebarChange', value)"
  />
  <div class="p-8 text-xl">Not implemented</div>
</template>
