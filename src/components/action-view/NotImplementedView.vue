<script setup>
defineProps({
  actionData: Object,
});
</script>

<template>
  <h3
    class="border-b p-6 font-semibold text-lg"
    :class="{ 'text-gray-400': actionData.isInactive }"
  >
    <font-awesome-icon :icon="actionData.icon" class="mr-4" />
    <span>{{ actionData.name }}</span>
  </h3>
</template>
