<script setup>
import { ref } from 'vue';
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue';

defineProps({
  modelValue: String | Number,
  options: Array,
  label: String,
});
defineEmits(['update:modelValue']);
</script>

<template>
  <Listbox
    :value="modelValue"
    @update:model-value="(value) => $emit('update:modelValue', value)"
  >
    <div class="relative mt-1">
      <ListboxLabel v-if="label" class="font-semibold my-2 inline-block">{{
        label
      }}</ListboxLabel>
      <ListboxButton
        class="relative border w-full cursor-default rounded-xl bg-white text-left focus:outline-none focus-visible:border-blue-700 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
      >
        <span class="block truncate p-3">{{ modelValue }}</span>
      </ListboxButton>

      <transition
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md z-10 bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          <ListboxOption
            v-slot="{ active, selected }"
            v-for="option in options"
            :key="option"
            :value="option"
            as="template"
          >
            <li
              :class="[
                active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                'relative cursor-default select-none py-2 p-4',
              ]"
            >
              <span
                :class="[
                  selected ? 'font-medium' : 'font-normal',
                  'block truncate',
                ]"
                >{{ option }}</span
              >
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>
