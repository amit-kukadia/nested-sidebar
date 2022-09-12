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
  <div v-if="!actionData.isInactive && actionData.data">
    <div class="border-b p-6">
      <div class="font-thin text-gray-400">Request endpoint</div>
      <div>{{ actionData.data.endPoint }}</div>
    </div>
    <div class="border-b p-6">
      <div class="font-thin text-gray-400">Request method</div>
      <div>{{ actionData.data.requestMethod }}</div>
    </div>
    <div class="border-b p-6">
      <table class="w-full">
        <thead>
          <tr class="border-b text-left text-gray-400">
            <th class="p-4 font-thin">Key</th>
            <th class="p-4 font-thin">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="border-b"
            v-for="(option, index) in actionData.data.options"
            :key="index"
          >
            <td class="p-4">{{ option.key }}</td>
            <td class="p-4">{{ option.value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="border-b p-6">
      <div class="font-thin text-gray-400">Request body</div>
      <div>{{ actionData.data.requestBody }}</div>
    </div>
  </div>
</template>
