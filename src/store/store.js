import { writable } from "svelte/store";

export const createBuildingSiteState  = writable({
    map: [{
            latitude: 55.753544,
            longitude: 37.621202,
            name: 'Default'
        }],
    mapReloadStatus: false,
    inputForm: {
        city: '',
        street: '',
        build: ''
    }
});

export const createProvidersState = writable({
    adress: {
        city: '',
        street: '',
        build: '',
    },
    orgInfo: {
        orgName: '',
    },
    contact: {
        tel: '',
        email: ''
    },
    providers: []
})

