<script setup>
import { shallowRef, ref } from 'vue';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
import ActionList from './components/ActionList.vue';
import Sidebar from './components/Sidebar.vue';
import AddAction from './components/AddAction.vue';
import TagCustomer from './components/action-form/TagCustomer.vue';
import NotImplemented from './components/action-form/NotImplemented.vue';
import HttpRequest from './components/action-form/HttpRequest.vue';
import { useActionsStore } from './stores/actions';
import TagCustomerView from './components/action-view/TagCustomerView.vue';
import HttpRequestView from './components/action-view/HttpRequestView.vue';
import NotImplementedView from './components/action-view/NotImplementedView.vue';

const actions = useActionsStore();
const selectedSidebar = shallowRef(ActionList);

const sidebarOptions = shallowRef({
  AddAction,
  ActionList,
  TagCustomer,
  HttpRequest,
  NotImplemented,
});

const viewComponents = {
  TagCustomer: TagCustomerView,
  HttpRequest: HttpRequestView,
  NotImplemented: NotImplementedView,
};

const selectedActionIndex = ref(0);

const onSidebarChange = (newSelectedSidebar, newSelectedActionIndex) => {
  selectedActionIndex.value = newSelectedActionIndex;
  selectedSidebar.value = sidebarOptions.value[newSelectedSidebar];
};
</script>

<template>
  <div class="bg-gray-400 p-[7px] min-h-screen flex">
    <Sidebar>
      <Component
        :is="selectedSidebar"
        @onSidebarChange="onSidebarChange"
        :selectedActionIndex="selectedActionIndex"
      />
    </Sidebar>
    <main
      class="ml-[374px] p-[14px] bg-white rounded-[14px] flex flex-col gap-4 w-full"
    >
      <div
        v-for="action in actions.selectedActions"
        class="border-2 rounded-xl"
        :class="{ 'border-blue-500': !action.isInactive }"
      >
        <Component
          :is="viewComponents[action.component]"
          :actionData="action"
        />
      </div>
    </main>
  </div>
</template>
