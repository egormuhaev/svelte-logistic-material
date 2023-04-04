import { resultPageState, createProvidersState } from "../store";



const selectProvider = (id) => {
    let pos = [];


    const unsubscribe = createProvidersState.subscribe((value) => {
        const posIn = value.providers.filter(item => item.id === id)[0].position
        pos = [posIn.latitude, posIn.longitude ];
        console.log(pos)
    })


    resultPageState.update((value) => {
        console.log(2);
        return {
            ...value,
            map: {
                ...value,
                reload: !value.map.reload,
                endPoint: [...pos],
                activeProviderId: id
            }
        }
    })

    unsubscribe();
}


export {selectProvider}