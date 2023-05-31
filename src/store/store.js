import { writable } from "svelte/store";
import {v4} from 'uuid';



export const resultPageState = writable({
    map: {
        reload: true,
        endPoint: [],
        activeProviderId: [],
    },
    route: {
        distance: '0 км',
        time: '0 мин',
        blocked: false,
        res: false,
    },
})


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

export const createTransportationParametersState = writable({
    foundation: {
        h: 0,
        w: 0,
        l: 0,
        v: 0,
    },
    date: '',
    weather: '',
    transport: {
        modelInput: '',
        count: 0,
        selectInData: '',
        activeList: [],
    },

    transportData: [
        {
            id: v4(),
            model: 'АВТОБЕТОНОСМЕСИТЕЛЬ 58146G',
            weatherModule: true,
            dischargeHeight: 2150,
            loadingHeight: 3600,
            rotationSpeed: 14,
            volume: 6,
            url: 'https://kamaz.ru/upload/resize_cache/iblock/78f/632_338_1/78f449d049ac092b95028f27691bb6e5.jpg'
        },
        {
            id: v4(),
            model: 'АВТОБЕТОНОСМЕСИТЕЛЬ 5814Y9-01',
            weatherModule: false,
            dischargeHeight: 2250,
            loadingHeight: 3700,
            rotationSpeed: 14,
            volume: 9,
            url: 'https://kamaz.ru/upload/resize_cache/iblock/b00/632_338_1/b00082023493ff87f15f93f3a4bc384b.JPG'
        },
        {
            id: v4(),
            model: 'АВТОБЕТОНОСМЕСИТЕЛЬ 5814W9',
            weatherModule: true,
            dischargeHeight: 2350,
            loadingHeight: 3800,
            rotationSpeed: 14,
            volume: 9,
            url: 'https://kamaz.ru/upload/resize_cache/iblock/d35/632_338_1/d354a8925176977659ebdc7c1911a806.jpg'
        },
        {
            id: v4(),
            model: 'Автобетоносмеситель 5814Y7-01',
            weatherModule: true,
            dischargeHeight: 2150,
            loadingHeight: 3570,
            rotationSpeed: 14,
            volume: 7,
            url: 'https://kamaz.ru/upload/resize_cache/iblock/710/632_338_1/7107735b4f21032dc051b8df75237770.JPG'
        },

        {
            id: v4(),
            model: 'АВТОБЕТОНОСМЕСИТЕЛЬ 5814Y9',
            weatherModule: true,
            dischargeHeight: 2020,
            loadingHeight: 3500,
            rotationSpeed: 14,
            volume: 9,
            url: 'https://kamaz.ru/upload/resize_cache/iblock/ea2/632_338_1/ea25455dd73b41296bbe54245f5265b0.JPG'
        },
        {
            id: v4(),
            model: 'АВТОБЕТОНОСМЕСИТЕЛЬ 5814v4',
            weatherModule: true,
            dischargeHeight: 2020,
            loadingHeight: 3500,
            rotationSpeed: 14,
            volume: 12,
            url: 'https://kamaz.ru/upload/resize_cache/iblock/787/632_338_1/787203912b20272fe1641be433e341cb.jpg'
        },
        {
            id: v4(),
            model: 'АВТОБЕТОНОСМЕСИТЕЛЬ 58146T-04',
            weatherModule: true,
            dischargeHeight: 2020,
            loadingHeight: 3800,
            rotationSpeed: 14,
            volume: 6,
            url: 'https://kamaz.ru/upload/resize_cache/iblock/15d/632_338_1/15db84d2fa32d88fc1821e155c3c72ca.jpg'
        },
        {
            id: v4(),
            model: 'АВТОБЕТОНОСМЕСИТЕЛЬ 58147G',
            weatherModule: false,
            dischargeHeight: 2020,
            loadingHeight: 3800,
            rotationSpeed: 14,
            volume: 7,
            url: 'https://kamaz.ru/upload/resize_cache/iblock/774/632_338_1/7749f8c09ebdf4c81974174ab9dcd83f.jpg'
        },
    ]
})

