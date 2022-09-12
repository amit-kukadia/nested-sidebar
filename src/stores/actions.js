import { defineStore } from 'pinia'

const nativeActions = [
    {
        name: 'Tag customer',
        icon: '',
        isSelected: false,
        component:'TagCustomer'
    },
    {
        name: 'Tag order',
        icon: '',
        isSelected: false,
        component: 'NotImplemented'
    },
    {
        name: 'Send email notification',
        icon: '',
        isSelected: false,
        component: 'NotImplemented'
    },
    {
        name: 'Send digital product',
        icon: '',
        isSelected: false,
        component: 'NotImplemented'
    },
    {
        name: 'Make HTTPS request',
        icon: '',
        isSelected: false,
        component: 'HttpRequest'
    },
];

const integrationActions = [
    {
        name: 'Send data to google sheet',
        icon: '',
        isSelected: false,
        component: 'NotImplemented'
    },
    {
        name: 'Get data from google sheet',
        icon: '',
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
        addToSelectedActions(actions) {
            let selectedNativeActions = this.integrationActions.filter(
                (action) => action.isSelected
            ).map(action => {
                return {
                    name: action.name,
                    component: action.component
                }
            })
            let selectedIntegrationActions = this.nativeActions.filter((action) => action.isSelected)
            .map(action => {
                return {
                    name: action.name,
                    component: action.component
                }
            })
            this.selectedActions = [...this.selectedActions, ...selectedIntegrationActions, ...selectedNativeActions]
        },
        removeFromSelectedActions(index) {
            this.selectedActions.splice(index,1)
        },
        toggleAcive(index) {
            this.selectedActions[index].isInactive =!this.selectedActions[index].isInactive
        }
    },
})