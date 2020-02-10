import { actions } from '../actions/Actions';
import { combineReducers } from 'redux';

const initialState = {
    weatherInfo: null
}

const weather = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_WEATHER_REQUEST:
            console.log('GET_WEATHER_REQUEST fired');
            return {
                ...state,
                time: action.time
            }
        case actions.GET_WEATHER_SUCCESS:
            console.log('GET_WEATHER_SUCCESS fired');
            return {
                ...state,
                time: action.time,
                weatherInfo: action.weather
            }
        case actions.GET_WEATHER_FAILURE:
            console.log('GET_WEATHER_FAILURE fired');
            return {
                ...state,
                time: action.time
            }
        default:
            return state
    }
}

export const weatherClock = combineReducers({
    weather
})