<script setup>
defineProps({
  actionData: Object,
});
</script>

<template>
  <div
    class="border-b p-6 font-semibold text-lg"
    :class="{ 'text-gray-400': actionData.isInactive }"
  >
    {{ actionData.name }}
  </div>
  <div v-if="!actionData.isInactive">
    <div
      v-for="tag in actionData.data"
      class="border rounded-xl p-3 m-2 bg-gray-100 flex items-center"
    >
      <span class="w-4 h-4 rounded-full bg-green-600 inline-block mr-2"></span>
      {{ tag }}
    </div>
  </div>
</template>
