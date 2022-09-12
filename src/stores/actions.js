import { defineStore } from 'pinia'

const nativeActions = [
    {
        name: 'Tag customer',
        icon: 'fa-solid fa-user-tag',
        isSelected: false,
        component:'TagCustomer'
    },
    {
        name: 'Tag order',
        icon: 'fa-solid fa-tag',
        isSelected: false,
        component: 'NotImplemented'
    },
    {
        name: 'Send email notification',
        icon: 'fa-solid fa-envelope',
        isSelected: false,
        component: 'NotImplemented'
    },
    {
        name: 'Send digital product',
        icon: 'fa-solid fa-envelope',
        isSelected: false,
        component: 'NotImplemented'
    },
    {
        name: 'Make HTTPS request',
        icon: 'fa-solid fa-shield',
        isSelected: false,
        component: 'HttpRequest'
    },
];

const integrationActions = [
    {
        name: 'Send data to google sheet',
        icon: 'fa-solid fa-file',
        isSelected: false,
        component: 'NotImplemented'
    },
    {
        name: 'Get data from google sheet',
        icon: 'fa-solid fa-file',
        isSelected: false,
        component: 'NotImplemented'
    },
];

export const useActionsStore = defineStore('actions', {
    state: () => {
        return {
            nativeActions,
            integrationActions,
            selectedActions: []
        }
    },

    actions: {
        resetActions() {
            this.nativeActions.forEach(action => action.isSelected = false)
            this.integrationActions.forEach(action => action.isSelected = false)
        },
        addToSelectedActions() {
            let selectedNativeActions = this.integrationActions.filter(
                (action) => action.isSelected
            ).map(action => {
                return {
                    name: action.name,
                    component: action.component,
                    icon: action.icon
                }
            })
            let selectedIntegrationActions = this.nativeActions.filter((action) => action.isSelected)
            .map(action => {
                return {
                    name: action.name,
                    component: action.component,
                    icon: action.icon
                }
            })
            this.selectedActions = [...this.selectedActions, ...selectedIntegrationActions, ...selectedNativeActions]
        },
        removeFromSelectedActions(index) {
            this.selectedActions.splice(index,1)
        },
        toggleActive(index) {
            this.selectedActions[index].isInactive =!this.selectedActions[index].isInactive
        }
    },
})