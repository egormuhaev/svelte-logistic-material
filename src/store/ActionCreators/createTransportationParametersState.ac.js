import {createTransportationParametersState, createBuildingSiteState} from '../store';
import {config} from '../../config/config';
import axios from 'axios';

// Helpers
function getSeason(dateString) {
    const date = new Date(dateString);
    const month = date.getMonth();

    switch (month) {
      case 11:
        return '-3° / -17°'
      case 0:
        return '-5° / -25°'
      case 1:
        return '-3° / -15°'
      case 2:
        return '2° / -5°'
      case 3:
        return '11° / 2°'
      case 4:
        return '19° / 8°'
      case 5:
        return '22° / 12°'
      case 6: 
        return '24° / 14°'
      case 7:
        return '22° / 12°'
      case 8:
        return '16° / 7°'
      case 9:
        return '8° / 2°'
      case 10:
        return '1° / -3°'
      default:
        return '';
    }
  }


// Setters
const setL = (length) => {
    createTransportationParametersState.update((value) => {
        return {
            ...value,
            foundation: {
                ...value.foundation,
                l: length,
                v: length * value.foundation.h * value.foundation.w
            }
        }
    })
}

const setW = (width) => {
    createTransportationParametersState.update((value) => {
        return {
            ...value,
            foundation: {
                ...value.foundation,
                w: width,
                v: width * value.foundation.l * value.foundation.h
            }
        }
    })
}

const setH = (height) => {
    createTransportationParametersState.update((value) => {
        return {
            ...value,
            foundation: {
                ...value.foundation,
                h: height,
                v: height * value.foundation.l * value.foundation.w
            }
        }
    })
}

const setDate = async (date) => {
    createTransportationParametersState.update((value) => {
        return {
            ...value,
            date: date,
            weather: setWeather(date),
        }
    })
}

const setWeather = (date) => {
    return getSeason(date);
}

const setTransportModel = (model) => {
  createTransportationParametersState.update((value) => {
    return {
        ...value,
        transport: {
          ...value.transport,
          modelInput: model
        }
        
    }
})
}

const setTransportSelectInData = (id) => {
  createTransportationParametersState.update((value) => {
    return {
        ...value,
        transport: {
          ...value.transport,
          id: id
        }
        
    }
})
}

const setTransportCount = (count) => {
  createTransportationParametersState.update((value) => {
    return {
        ...value,
        transport: {
          ...value.transport,
          count: count
        }
        
    }
})
}

const addTransportList = () => {
  let id;
  let model;
  let count;
  let tData;
  let weather = false;
  let volume = 1;

  const unsubscribe = createTransportationParametersState.subscribe((valeu) => {
    id = valeu.transport.selectInData;
    model = valeu.transport.modelInput;
    count = valeu.transport.count;
    tData = valeu.transportData
  })

  if (id !== '' && model !== '' && count !== 0){
    const result = tData.filter(item => item.id === id);
    createTransportationParametersState.update((value) => {
      return {
        ...value,
        transport: {
          ...value.transport,
          count: count,
          activeList: [...value, {
            id: result[0].id,
            model: model,
            count: count,
            weatherModule: result[0].volume,
            volume: result[0].volume,
          }]
        }
      }
    })
  }

  console.log(model)
  console.log(count)
  
  if (count !== 0 && model !== ''){
    createTransportationParametersState.update((value) => {
      return {
        ...value,
        transport: {
          ...value.transport,
          count: count,
          activeList: [...value.transport.activeList, {
            id: null,
            model: model,
            count: count,
            weatherModule: weather,
            volume: volume,
          }]
        }
      
      }
      
    })
    

  }
  else {
    console.log(1)
  }
  


  unsubscribe();
}






export {
    setL,
    setW,
    setH,
    setDate,
    setTransportModel,
    setTransportSelectInData,
    setTransportCount,
    addTransportList
}