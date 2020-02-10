import { actions } from './Actions';

const ENDPOINT_BASE = 'https://localhost:8081/'

export const retrieveWeather = () => {

    return async dispatch => {
        let time = new Date().getTime()
        dispatch({
            type: actions.GET_WEATHER_REQUEST,
            time: time
        })
        
        console.log('calling endpoint')


        let result = 'whatever'
        dispatch({
            type: actions.GET_WEATHER_SUCCESS,
            weather: result
        })

    }
}