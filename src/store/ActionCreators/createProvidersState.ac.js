import { createProvidersState } from "../store";
import { config } from '../../config/config';
import axios from "axios";
import {v4} from "uuid";

// Helpers
const toString = (val) => {
    return typeof val != 'string' ? String(val) : val;
}

const getStatusForm = () => {
    let status;

    const unsubscribe = createProvidersState.subscribe((value) => {
        const {city, street, build} = value.adress;
        const {orgName} = value.orgInfo;
        const {tel, email} = value.contact;
        status = Boolean(city && street && build && orgName);
    });

    unsubscribe()
    return status;
}


// Fetchs
const fetchCordProvider = (city, street, build) => {
    return new Promise((resolve, reject) => {
        try {
            axios.get(
              `https://geocode-maps.yandex.ru/1.x/?format=json&apikey=${
                config.YANDEX_API_KEY
              }&geocode=${city.replace(" ", "+")}+${street.replace(
                " ",
                "+"
              )}+${build.replace(" ", "+")}`
            )
            .then((res) =>  res.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(
                " "
              ))
            .then((pos) => {
                resolve({ latitude: Number(pos[1]), longitude: Number(pos[0]) })
            })
        }
        catch(error) {
            console.log(error.message)
            reject(error.message);
        }
    })
    
}


// Reducers
const setAdreesCity = (city) => {
    city = toString(city);
    
    createProvidersState.update((value) => {
        return {
            ...value,
            adress: {
                ...value.adress,
                city: city
            }
        }
    })
}

const setAdreesStreet = (street) => {
    street = toString(street);

    createProvidersState.update((value) => {
        return {
            ...value,
            adress: {
                ...value.adress,
                street: street
            }
        }
    })
}

const setAdreesBuild = (build) => {
    build = toString(build);

    createProvidersState.update((value) => {
        return {
            ...value,
            adress: {
                ...value.adress,
                build: build
            }
        }
    })
}

const setOrgInfoName = (orgName) => {
    orgName = toString(orgName);

    createProvidersState.update((value) => {
        return {
            ...value,
            orgInfo: {
                orgName: orgName
            }
        }
    })
}

const setContectTel = (tel) => {
    tel = toString(tel);

    createProvidersState.update((value) => {
        return {
            ...value,
            contact: {
                ...value.contact,
                tel: tel
            }
        }
    })
}

const setContectEmail = (email) => {
    email = toString(email);

    createProvidersState.update((value) => {
        return {
            ...value,
            contact: {
                ...value.contact,
                email: email
            }
        }
    })
}

const addNewProvider = async () => {
    if (!getStatusForm()) {
        console.log(1);
    }
    else {

    let adress = {
        city: null,
        street: null,
        build: null
    }
    let orgInfo = {
        orgName: null
    }
    let contact = {
        tel: null,
        email: null
    }
    let position = {
        latitude: null,
        longitude: null,
    }

    const unsubscribe =  createProvidersState.subscribe((value) => {
        adress = {...value.adress};
        orgInfo = {...value.orgInfo};
        contact = {...value.contact};
    });

    if (adress.city != null && adress.city != '') {
        position = {... await fetchCordProvider(adress.city, adress.street, adress.build)};
    }
    
    createProvidersState.update((value) => {
        const providerItem = {
            id: v4(),
            position,
            adress,
            orgInfo,
            contact
        }
        return {
            ...value,
            providers: [...value.providers, providerItem]
        }
    })
        unsubscribe();
    }
}

const dellProvider = (id) => {
    createProvidersState.update((value) => {
        const newProviderList = value.providers.filter(prov => prov.id != id)
        return {
            ...value,
            providers: [...newProviderList],
        }
    })
}



export {
    setAdreesCity, 
    setAdreesStreet, 
    setAdreesBuild, 
    setOrgInfoName, 
    setContectTel, 
    setContectEmail, 
    addNewProvider,
    dellProvider
} 