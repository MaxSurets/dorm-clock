import { actions } from './Actions';

const ENDPOINT_BASE = 'http://localhost:8081/'

export const retrieveWeather = () => {

    return async dispatch => {
        let time = new Date().getTime()
        dispatch({
            type: actions.GET_WEATHER_REQUEST,
            time: time
        })

        var last_index = 0;
        const endpoint = ENDPOINT_BASE + 'weather';
        console.log("calling endpoint " + endpoint);

        // Dispatches dummy data

        let dummyData = JSON.stringify({ "latitude": 40.743, "longitude": -74.0331, "timezone": "America/New_York", "currently": { "time": 1581355652, "summary": "Drizzle", "icon": "rain", "nearestStormDistance": 0, "precipIntensity": 0.013, "precipIntensityError": 0.001, "precipProbability": 1, "precipType": "rain", "temperature": 47.46, "apparentTemperature": 42.08, "dewPoint": 39.8, "humidity": 0.75, "pressure": 1020.1, "windSpeed": 11.71, "windGust": 28.08, "windBearing": 234, "cloudCover": 0.97, "uvIndex": 2, "visibility": 10, "ozone": 337.4 }, "minutely": { "summary": "Light rain for the hour.", "icon": "rain", "data": [{ "time": 1581355620, "precipIntensity": 0.013, "precipIntensityError": 0.001, "precipProbability": 1, "precipType": "rain" }, { "time": 1581355680, "precipIntensity": 0.014, "precipIntensityError": 0.002, "precipProbability": 1, "precipType": "rain" }, { "time": 1581355740, "precipIntensity": 0.015, "precipIntensityError": 0.003, "precipProbability": 1, "precipType": "rain" }, { "time": 1581355800, "precipIntensity": 0.017, "precipIntensityError": 0.004, "precipProbability": 1, "precipType": "rain" }, { "time": 1581355860, "precipIntensity": 0.019, "precipIntensityError": 0.005, "precipProbability": 1, "precipType": "rain" }, { "time": 1581355920, "precipIntensity": 0.022, "precipIntensityError": 0.007, "precipProbability": 1, "precipType": "rain" }, { "time": 1581355980, "precipIntensity": 0.026, "precipIntensityError": 0.009, "precipProbability": 1, "precipType": "rain" }, { "time": 1581356040, "precipIntensity": 0.029, "precipIntensityError": 0.011, "precipProbability": 1, "precipType": "rain" }, { "time": 1581356100, "precipIntensity": 0.032, "precipIntensityError": 0.011, "precipProbability": 1, "precipType": "rain" }, { "time": 1581356160, "precipIntensity": 0.035, "precipIntensityError": 0.011, "precipProbability": 1, "precipType": "rain" }, { "time": 1581356220, "precipIntensity": 0.035, "precipIntensityError": 0.011, "precipProbability": 1, "precipType": "rain" }, { "time": 1581356280, "precipIntensity": 0.035, "precipIntensityError": 0.012, "precipProbability": 1, "precipType": "rain" }, { "time": 1581356340, "precipIntensity": 0.033, "precipIntensityError": 0.012, "precipProbability": 1, "precipType": "rain" }, { "time": 1581356400, "precipIntensity": 0.031, "precipIntensityError": 0.012, "precipProbability": 1, "precipType": "rain" }, { "time": 1581356460, "precipIntensity": 0.029, "precipIntensityError": 0.012, "precipProbability": 1, "precipType": "rain" }, { "time": 1581356520, "precipIntensity": 0.028, "precipIntensityError": 0.012, "precipProbability": 1, "precipType": "rain" }, { "time": 1581356580, "precipIntensity": 0.027, "precipIntensityError": 0.011, "precipProbability": 1, "precipType": "rain" }, { "time": 1581356640, "precipIntensity": 0.028, "precipIntensityError": 0.012, "precipProbability": 1, "precipType": "rain" }, { "time": 1581356700, "precipIntensity": 0.028, "precipIntensityError": 0.013, "precipProbability": 1, "precipType": "rain" }, { "time": 1581356760, "precipIntensity": 0.03, "precipIntensityError": 0.014, "precipProbability": 1, "precipType": "rain" }, { "time": 1581356820, "precipIntensity": 0.031, "precipIntensityError": 0.016, "precipProbability": 1, "precipType": "rain" }, { "time": 1581356880, "precipIntensity": 0.033, "precipIntensityError": 0.016, "precipProbability": 1, "precipType": "rain" }, { "time": 1581356940, "precipIntensity": 0.035, "precipIntensityError": 0.017, "precipProbability": 1, "precipType": "rain" }, { "time": 1581357000, "precipIntensity": 0.035, "precipIntensityError": 0.017, "precipProbability": 1, "precipType": "rain" }, { "time": 1581357060, "precipIntensity": 0.036, "precipIntensityError": 0.017, "precipProbability": 1, "precipType": "rain" }, { "time": 1581357120, "precipIntensity": 0.037, "precipIntensityError": 0.016, "precipProbability": 1, "precipType": "rain" }, { "time": 1581357180, "precipIntensity": 0.037, "precipIntensityError": 0.016, "precipProbability": 1, "precipType": "rain" }, { "time": 1581357240, "precipIntensity": 0.037, "precipIntensityError": 0.016, "precipProbability": 1, "precipType": "rain" }, { "time": 1581357300, "precipIntensity": 0.037, "precipIntensityError": 0.015, "precipProbability": 1, "precipType": "rain" }, { "time": 1581357360, "precipIntensity": 0.037, "precipIntensityError": 0.015, "precipProbability": 1, "precipType": "rain" }, { "time": 1581357420, "precipIntensity": 0.037, "precipIntensityError": 0.014, "precipProbability": 1, "precipType": "rain" }, { "time": 1581357480, "precipIntensity": 0.037, "precipIntensityError": 0.014, "precipProbability": 1, "precipType": "rain" }, { "time": 1581357540, "precipIntensity": 0.037, "precipIntensityError": 0.014, "precipProbability": 1, "precipType": "rain" }, { "time": 1581357600, "precipIntensity": 0.037, "precipIntensityError": 0.014, "precipProbability": 1, "precipType": "rain" }, { "time": 1581357660, "precipIntensity": 0.037, "precipIntensityError": 0.013, "precipProbability": 1, "precipType": "rain" }, { "time": 1581357720, "precipIntensity": 0.037, "precipIntensityError": 0.013, "precipProbability": 1, "precipType": "rain" }, { "time": 1581357780, "precipIntensity": 0.037, "precipIntensityError": 0.013, "precipProbability": 1, "precipType": "rain" }, { "time": 1581357840, "precipIntensity": 0.038, "precipIntensityError": 0.013, "precipProbability": 1, "precipType": "rain" }, { "time": 1581357900, "precipIntensity": 0.038, "precipIntensityError": 0.013, "precipProbability": 1, "precipType": "rain" }, { "time": 1581357960, "precipIntensity": 0.038, "precipIntensityError": 0.013, "precipProbability": 1, "precipType": "rain" }, { "time": 1581358020, "precipIntensity": 0.038, "precipIntensityError": 0.013, "precipProbability": 1, "precipType": "rain" }, { "time": 1581358080, "precipIntensity": 0.038, "precipIntensityError": 0.013, "precipProbability": 1, "precipType": "rain" }, { "time": 1581358140, "precipIntensity": 0.037, "precipIntensityError": 0.013, "precipProbability": 1, "precipType": "rain" }, { "time": 1581358200, "precipIntensity": 0.037, "precipIntensityError": 0.013, "precipProbability": 1, "precipType": "rain" }, { "time": 1581358260, "precipIntensity": 0.037, "precipIntensityError": 0.013, "precipProbability": 1, "precipType": "rain" }, { "time": 1581358320, "precipIntensity": 0.037, "precipIntensityError": 0.013, "precipProbability": 1, "precipType": "rain" }, { "time": 1581358380, "precipIntensity": 0.036, "precipIntensityError": 0.013, "precipProbability": 1, "precipType": "rain" }, { "time": 1581358440, "precipIntensity": 0.036, "precipIntensityError": 0.013, "precipProbability": 1, "precipType": "rain" }, { "time": 1581358500, "precipIntensity": 0.036, "precipIntensityError": 0.013, "precipProbability": 1, "precipType": "rain" }, { "time": 1581358560, "precipIntensity": 0.035, "precipIntensityError": 0.013, "precipProbability": 1, "precipType": "rain" }, { "time": 1581358620, "precipIntensity": 0.035, "precipIntensityError": 0.013, "precipProbability": 1, "precipType": "rain" }, { "time": 1581358680, "precipIntensity": 0.034, "precipIntensityError": 0.013, "precipProbability": 1, "precipType": "rain" }, { "time": 1581358740, "precipIntensity": 0.033, "precipIntensityError": 0.013, "precipProbability": 1, "precipType": "rain" }, { "time": 1581358800, "precipIntensity": 0.033, "precipIntensityError": 0.013, "precipProbability": 1, "precipType": "rain" }, { "time": 1581358860, "precipIntensity": 0.032, "precipIntensityError": 0.013, "precipProbability": 1, "precipType": "rain" }, { "time": 1581358920, "precipIntensity": 0.032, "precipIntensityError": 0.013, "precipProbability": 1, "precipType": "rain" }, { "time": 1581358980, "precipIntensity": 0.031, "precipIntensityError": 0.013, "precipProbability": 1, "precipType": "rain" }, { "time": 1581359040, "precipIntensity": 0.03, "precipIntensityError": 0.014, "precipProbability": 1, "precipType": "rain" }, { "time": 1581359100, "precipIntensity": 0.03, "precipIntensityError": 0.014, "precipProbability": 0.99, "precipType": "rain" }, { "time": 1581359160, "precipIntensity": 0.03, "precipIntensityError": 0.014, "precipProbability": 0.99, "precipType": "rain" }, { "time": 1581359220, "precipIntensity": 0.029, "precipIntensityError": 0.014, "precipProbability": 0.99, "precipType": "rain" }] }, "hourly": { "summary": "Light rain until tomorrow afternoon.", "icon": "rain", "data": [{ "time": 1581354000, "summary": "Drizzle", "icon": "rain", "precipIntensity": 0.0093, "precipProbability": 1, "precipType": "rain", "temperature": 46.76, "apparentTemperature": 41.33, "dewPoint": 39.44, "humidity": 0.76, "pressure": 1020.4, "windSpeed": 12.04, "windGust": 28.66, "windBearing": 231, "cloudCover": 0.92, "uvIndex": 2, "visibility": 10, "ozone": 337.7 }, { "time": 1581357600, "summary": "Light Rain", "icon": "rain", "precipIntensity": 0.0324, "precipProbability": 1, "precipType": "rain", "temperature": 48.37, "apparentTemperature": 43.59, "dewPoint": 40.28, "humidity": 0.73, "pressure": 1019.7, "windSpeed": 11.26, "windGust": 27.31, "windBearing": 237, "cloudCover": 1, "uvIndex": 2, "visibility": 9.851, "ozone": 337.1 }, { "time": 1581361200, "summary": "Possible Light Rain", "icon": "rain", "precipIntensity": 0.0164, "precipProbability": 0.4, "precipType": "rain", "temperature": 50.32, "apparentTemperature": 50.32, "dewPoint": 41.55, "humidity": 0.72, "pressure": 1019.6, "windSpeed": 10.96, "windGust": 26.73, "windBearing": 234, "cloudCover": 1, "uvIndex": 2, "visibility": 9.505, "ozone": 336.1 }, { "time": 1581364800, "summary": "Possible Light Rain", "icon": "rain", "precipIntensity": 0.0256, "precipProbability": 0.58, "precipType": "rain", "temperature": 50.22, "apparentTemperature": 50.22, "dewPoint": 41.62, "humidity": 0.72, "pressure": 1019.2, "windSpeed": 9.73, "windGust": 24.2, "windBearing": 235, "cloudCover": 1, "uvIndex": 1, "visibility": 8.497, "ozone": 334.9 }, { "time": 1581368400, "summary": "Light Rain", "icon": "rain", "precipIntensity": 0.0318, "precipProbability": 0.65, "precipType": "rain", "temperature": 48.29, "apparentTemperature": 44.22, "dewPoint": 41.14, "humidity": 0.76, "pressure": 1019, "windSpeed": 9.15, "windGust": 22.78, "windBearing": 231, "cloudCover": 1, "uvIndex": 0, "visibility": 7.848, "ozone": 334.1 }, { "time": 1581372000, "summary": "Light Rain", "icon": "rain", "precipIntensity": 0.0317, "precipProbability": 0.66, "precipType": "rain", "temperature": 47.15, "apparentTemperature": 43.01, "dewPoint": 41.16, "humidity": 0.8, "pressure": 1019.2, "windSpeed": 8.69, "windGust": 22.23, "windBearing": 231, "cloudCover": 1, "uvIndex": 0, "visibility": 8.754, "ozone": 334.2 }, { "time": 1581375600, "summary": "Possible Light Rain", "icon": "rain", "precipIntensity": 0.0261, "precipProbability": 0.64, "precipType": "rain", "temperature": 46.48, "apparentTemperature": 42.45, "dewPoint": 41.18, "humidity": 0.82, "pressure": 1020.2, "windSpeed": 8.07, "windGust": 21.32, "windBearing": 226, "cloudCover": 1, "uvIndex": 0, "visibility": 10, "ozone": 334.7 }, { "time": 1581379200, "summary": "Possible Light Rain", "icon": "rain", "precipIntensity": 0.0228, "precipProbability": 0.56, "precipType": "rain", "temperature": 46.96, "apparentTemperature": 42.84, "dewPoint": 41.64, "humidity": 0.82, "pressure": 1020.7, "windSpeed": 8.52, "windGust": 22.87, "windBearing": 224, "cloudCover": 1, "uvIndex": 0, "visibility": 10, "ozone": 334.7 }, { "time": 1581382800, "summary": "Possible Light Rain", "icon": "rain", "precipIntensity": 0.0163, "precipProbability": 0.55, "precipType": "rain", "temperature": 46.93, "apparentTemperature": 43.25, "dewPoint": 42.07, "humidity": 0.83, "pressure": 1020.6, "windSpeed": 7.5, "windGust": 21.36, "windBearing": 224, "cloudCover": 1, "uvIndex": 0, "visibility": 10, "ozone": 333.7 }, { "time": 1581386400, "summary": "Possible Light Rain", "icon": "rain", "precipIntensity": 0.0265, "precipProbability": 0.54, "precipType": "rain", "temperature": 46.95, "apparentTemperature": 44.06, "dewPoint": 42.4, "humidity": 0.84, "pressure": 1020, "windSpeed": 5.95, "windGust": 18.1, "windBearing": 220, "cloudCover": 1, "uvIndex": 0, "visibility": 10, "ozone": 332.2 }, { "time": 1581390000, "summary": "Possible Light Rain", "icon": "rain", "precipIntensity": 0.034, "precipProbability": 0.55, "precipType": "rain", "temperature": 47.12, "apparentTemperature": 45.33, "dewPoint": 42.39, "humidity": 0.84, "pressure": 1019.9, "windSpeed": 4.28, "windGust": 13.77, "windBearing": 216, "cloudCover": 1, "uvIndex": 0, "visibility": 8.563, "ozone": 331 }, { "time": 1581393600, "summary": "Possible Light Rain", "icon": "rain", "precipIntensity": 0.026, "precipProbability": 0.54, "precipType": "rain", "temperature": 47.39, "apparentTemperature": 45.96, "dewPoint": 42.37, "humidity": 0.83, "pressure": 1019.3, "windSpeed": 3.86, "windGust": 11.52, "windBearing": 200, "cloudCover": 1, "uvIndex": 0, "visibility": 8.864, "ozone": 330.5 }, { "time": 1581397200, "summary": "Possible Light Rain", "icon": "rain", "precipIntensity": 0.0259, "precipProbability": 0.56, "precipType": "rain", "temperature": 47.72, "apparentTemperature": 47.72, "dewPoint": 42.46, "humidity": 0.82, "pressure": 1018.7, "windSpeed": 2.98, "windGust": 7.49, "windBearing": 198, "cloudCover": 1, "uvIndex": 0, "visibility": 8.097, "ozone": 330.4 }, { "time": 1581400800, "summary": "Possible Light Rain", "icon": "rain", "precipIntensity": 0.0204, "precipProbability": 0.57, "precipType": "rain", "temperature": 47.81, "apparentTemperature": 47.81, "dewPoint": 42.81, "humidity": 0.83, "pressure": 1017.9, "windSpeed": 2.67, "windGust": 4.95, "windBearing": 162, "cloudCover": 1, "uvIndex": 0, "visibility": 4.966, "ozone": 329.7 }, { "time": 1581404400, "summary": "Possible Light Rain", "icon": "rain", "precipIntensity": 0.0206, "precipProbability": 0.55, "precipType": "rain", "temperature": 47.02, "apparentTemperature": 47.02, "dewPoint": 42.14, "humidity": 0.83, "pressure": 1017.9, "windSpeed": 2.45, "windGust": 2.46, "windBearing": 135, "cloudCover": 1, "uvIndex": 0, "visibility": 9.534, "ozone": 327.8 }, { "time": 1581408000, "summary": "Possible Light Rain", "icon": "rain", "precipIntensity": 0.0178, "precipProbability": 0.55, "precipType": "rain", "temperature": 47.11, "apparentTemperature": 47.11, "dewPoint": 42.6, "humidity": 0.84, "pressure": 1017.5, "windSpeed": 2.61, "windGust": 3.05, "windBearing": 83, "cloudCover": 1, "uvIndex": 0, "visibility": 9.713, "ozone": 325.3 }, { "time": 1581411600, "summary": "Possible Light Rain", "icon": "rain", "precipIntensity": 0.0215, "precipProbability": 0.6, "precipType": "rain", "temperature": 47.06, "apparentTemperature": 47.06, "dewPoint": 42.82, "humidity": 0.85, "pressure": 1017, "windSpeed": 2.83, "windGust": 3.8, "windBearing": 46, "cloudCover": 1, "uvIndex": 0, "visibility": 9.013, "ozone": 323.7 }, { "time": 1581415200, "summary": "Possible Light Rain", "icon": "rain", "precipIntensity": 0.0287, "precipProbability": 0.65, "precipType": "rain", "temperature": 46.84, "apparentTemperature": 46.84, "dewPoint": 42.82, "humidity": 0.86, "pressure": 1016.5, "windSpeed": 3, "windGust": 4.19, "windBearing": 41, "cloudCover": 1, "uvIndex": 0, "visibility": 6.329, "ozone": 323.9 }, { "time": 1581418800, "summary": "Light Rain", "icon": "rain", "precipIntensity": 0.042, "precipProbability": 0.7, "precipType": "rain", "temperature": 46.45, "apparentTemperature": 45.46, "dewPoint": 42.78, "humidity": 0.87, "pressure": 1016, "windSpeed": 3.21, "windGust": 4.73, "windBearing": 54, "cloudCover": 1, "uvIndex": 0, "visibility": 2.73, "ozone": 324.7 }, { "time": 1581422400, "summary": "Light Rain", "icon": "rain", "precipIntensity": 0.055, "precipProbability": 0.73, "precipType": "rain", "temperature": 46.15, "apparentTemperature": 44.94, "dewPoint": 42.7, "humidity": 0.88, "pressure": 1015.5, "windSpeed": 3.39, "windGust": 5.47, "windBearing": 61, "cloudCover": 1, "uvIndex": 0, "visibility": 0.759, "ozone": 324.8 }, { "time": 1581426000, "summary": "Light Rain", "icon": "rain", "precipIntensity": 0.06, "precipProbability": 0.75, "precipType": "rain", "temperature": 46, "apparentTemperature": 44.59, "dewPoint": 42.77, "humidity": 0.88, "pressure": 1014.9, "windSpeed": 3.6, "windGust": 6.75, "windBearing": 52, "cloudCover": 1, "uvIndex": 0, "visibility": 1.846, "ozone": 323.2 }, { "time": 1581429600, "summary": "Light Rain", "icon": "rain", "precipIntensity": 0.0606, "precipProbability": 0.76, "precipType": "rain", "temperature": 45.99, "apparentTemperature": 44.36, "dewPoint": 42.56, "humidity": 0.88, "pressure": 1014.3, "windSpeed": 3.84, "windGust": 8.25, "windBearing": 38, "cloudCover": 1, "uvIndex": 1, "visibility": 4.621, "ozone": 320.6 }, { "time": 1581433200, "summary": "Light Rain", "icon": "rain", "precipIntensity": 0.058, "precipProbability": 0.74, "precipType": "rain", "temperature": 44.83, "apparentTemperature": 42.85, "dewPoint": 41.89, "humidity": 0.89, "pressure": 1013.7, "windSpeed": 4.06, "windGust": 9.21, "windBearing": 26, "cloudCover": 1, "uvIndex": 1, "visibility": 6.882, "ozone": 318.5 }, { "time": 1581436800, "summary": "Light Rain", "icon": "rain", "precipIntensity": 0.0489, "precipProbability": 0.76, "precipType": "rain", "temperature": 45.94, "apparentTemperature": 44.05, "dewPoint": 41.67, "humidity": 0.85, "pressure": 1012.9, "windSpeed": 4.16, "windGust": 9.16, "windBearing": 12, "cloudCover": 1, "uvIndex": 2, "visibility": 9.166, "ozone": 317.5 }, { "time": 1581440400, "summary": "Light Rain", "icon": "rain", "precipIntensity": 0.0371, "precipProbability": 0.76, "precipType": "rain", "temperature": 46.39, "apparentTemperature": 44.61, "dewPoint": 41.79, "humidity": 0.84, "pressure": 1012.1, "windSpeed": 4.11, "windGust": 8.46, "windBearing": 1, "cloudCover": 1, "uvIndex": 2, "visibility": 10, "ozone": 317 }, { "time": 1581444000, "summary": "Light Rain", "icon": "rain", "precipIntensity": 0.027, "precipProbability": 0.7, "precipType": "rain", "temperature": 46.9, "apparentTemperature": 45.3, "dewPoint": 41.49, "humidity": 0.81, "pressure": 1011.4, "windSpeed": 3.99, "windGust": 7.59, "windBearing": 359, "cloudCover": 1, "uvIndex": 2, "visibility": 10, "ozone": 316.9 }, { "time": 1581447600, "summary": "Possible Light Rain", "icon": "rain", "precipIntensity": 0.0167, "precipProbability": 0.59, "precipType": "rain", "temperature": 47.9, "apparentTemperature": 46.57, "dewPoint": 41.74, "humidity": 0.79, "pressure": 1010.7, "windSpeed": 3.85, "windGust": 6.47, "windBearing": 1, "cloudCover": 1, "uvIndex": 2, "visibility": 10, "ozone": 317.6 }, { "time": 1581451200, "summary": "Possible Drizzle", "icon": "rain", "precipIntensity": 0.0079, "precipProbability": 0.37, "precipType": "rain", "temperature": 48.8, "apparentTemperature": 47.7, "dewPoint": 42.24, "humidity": 0.78, "pressure": 1010, "windSpeed": 3.73, "windGust": 5.3, "windBearing": 298, "cloudCover": 1, "uvIndex": 1, "visibility": 10, "ozone": 318.6 }, { "time": 1581454800, "summary": "Overcast", "icon": "cloudy", "precipIntensity": 0.0033, "precipProbability": 0.14, "precipType": "rain", "temperature": 49.24, "apparentTemperature": 48.1, "dewPoint": 42.27, "humidity": 0.77, "pressure": 1009.8, "windSpeed": 3.86, "windGust": 5.27, "windBearing": 295, "cloudCover": 1, "uvIndex": 0, "visibility": 10, "ozone": 319.3 }, { "time": 1581458400, "summary": "Overcast", "icon": "cloudy", "precipIntensity": 0.0013, "precipProbability": 0.08, "precipType": "rain", "temperature": 48.8, "apparentTemperature": 47.2, "dewPoint": 42.17, "humidity": 0.78, "pressure": 1010.4, "windSpeed": 4.4, "windGust": 7.03, "windBearing": 305, "cloudCover": 0.91, "uvIndex": 0, "visibility": 10, "ozone": 319.2 }, { "time": 1581462000, "summary": "Mostly Cloudy", "icon": "partly-cloudy-night", "precipIntensity": 0.0006, "precipProbability": 0.05, "precipType": "rain", "temperature": 48.02, "apparentTemperature": 45.77, "dewPoint": 42, "humidity": 0.8, "pressure": 1011.4, "windSpeed": 5.21, "windGust": 9.86, "windBearing": 331, "cloudCover": 0.79, "uvIndex": 0, "visibility": 10, "ozone": 318.7 }, { "time": 1581465600, "summary": "Mostly Cloudy", "icon": "partly-cloudy-night", "precipIntensity": 0.0003, "precipProbability": 0.03, "precipType": "rain", "temperature": 46.93, "apparentTemperature": 43.99, "dewPoint": 41.17, "humidity": 0.8, "pressure": 1012.5, "windSpeed": 6.03, "windGust": 13.03, "windBearing": 295, "cloudCover": 0.72, "uvIndex": 0, "visibility": 10, "ozone": 318.2 }, { "time": 1581469200, "summary": "Mostly Cloudy", "icon": "partly-cloudy-night", "precipIntensity": 0, "precipProbability": 0, "temperature": 45.72, "apparentTemperature": 42.11, "dewPoint": 39.61, "humidity": 0.79, "pressure": 1013.1, "windSpeed": 6.84, "windGust": 16.78, "windBearing": 292, "cloudCover": 0.76, "uvIndex": 0, "visibility": 10, "ozone": 317.6 }, { "time": 1581472800, "summary": "Mostly Cloudy", "icon": "partly-cloudy-night", "precipIntensity": 0, "precipProbability": 0, "temperature": 44.23, "apparentTemperature": 39.94, "dewPoint": 36.73, "humidity": 0.75, "pressure": 1013.6, "windSpeed": 7.59, "windGust": 20.67, "windBearing": 299, "cloudCover": 0.85, "uvIndex": 0, "visibility": 10, "ozone": 316.9 }, { "time": 1581476400, "summary": "Overcast", "icon": "cloudy", "precipIntensity": 0.0003, "precipProbability": 0.02, "precipType": "rain", "temperature": 42.1, "apparentTemperature": 37.1, "dewPoint": 34.03, "humidity": 0.73, "pressure": 1014.2, "windSpeed": 8.1, "windGust": 23.5, "windBearing": 311, "cloudCover": 0.92, "uvIndex": 0, "visibility": 10, "ozone": 316.5 }, { "time": 1581480000, "summary": "Overcast", "icon": "cloudy", "precipIntensity": 0.0002, "precipProbability": 0.02, "precipType": "rain", "temperature": 42.25, "apparentTemperature": 37.14, "dewPoint": 32.49, "humidity": 0.68, "pressure": 1014.7, "windSpeed": 8.4, "windGust": 25.05, "windBearing": 328, "cloudCover": 0.95, "uvIndex": 0, "visibility": 10, "ozone": 316.5 }, { "time": 1581483600, "summary": "Overcast", "icon": "cloudy", "precipIntensity": 0, "precipProbability": 0, "temperature": 41.6, "apparentTemperature": 36.27, "dewPoint": 31.43, "humidity": 0.67, "pressure": 1015.4, "windSpeed": 8.56, "windGust": 25.84, "windBearing": 288, "cloudCover": 0.96, "uvIndex": 0, "visibility": 10, "ozone": 316.8 }, { "time": 1581487200, "summary": "Overcast", "icon": "cloudy", "precipIntensity": 0, "precipProbability": 0, "temperature": 41, "apparentTemperature": 35.4, "dewPoint": 30.71, "humidity": 0.67, "pressure": 1016.1, "windSpeed": 8.84, "windGust": 26.14, "windBearing": 297, "cloudCover": 0.94, "uvIndex": 0, "visibility": 10, "ozone": 318 }, { "time": 1581490800, "summary": "Mostly Cloudy", "icon": "partly-cloudy-night", "precipIntensity": 0, "precipProbability": 0, "temperature": 40.27, "apparentTemperature": 34.28, "dewPoint": 30.18, "humidity": 0.67, "pressure": 1016.8, "windSpeed": 9.31, "windGust": 26.35, "windBearing": 287, "cloudCover": 0.81, "uvIndex": 0, "visibility": 10, "ozone": 320.7 }, { "time": 1581494400, "summary": "Mostly Cloudy", "icon": "partly-cloudy-night", "precipIntensity": 0, "precipProbability": 0, "temperature": 39.35, "apparentTemperature": 32.92, "dewPoint": 29.7, "humidity": 0.68, "pressure": 1017.6, "windSpeed": 9.81, "windGust": 26.13, "windBearing": 324, "cloudCover": 0.62, "uvIndex": 0, "visibility": 10, "ozone": 324.2 }, { "time": 1581498000, "summary": "Partly Cloudy", "icon": "partly-cloudy-night", "precipIntensity": 0.0003, "precipProbability": 0.01, "precipType": "rain", "temperature": 38.39, "apparentTemperature": 31.69, "dewPoint": 29.21, "humidity": 0.69, "pressure": 1018.5, "windSpeed": 9.9, "windGust": 25.13, "windBearing": 308, "cloudCover": 0.5, "uvIndex": 0, "visibility": 10, "ozone": 326.2 }, { "time": 1581501600, "summary": "Partly Cloudy", "icon": "partly-cloudy-night", "precipIntensity": 0.0002, "precipProbability": 0.01, "precipType": "rain", "temperature": 37.09, "apparentTemperature": 30.31, "dewPoint": 28.87, "humidity": 0.72, "pressure": 1019.5, "windSpeed": 9.42, "windGust": 22.87, "windBearing": 304, "cloudCover": 0.48, "uvIndex": 0, "visibility": 10, "ozone": 325.2 }, { "time": 1581505200, "summary": "Partly Cloudy", "icon": "partly-cloudy-night", "precipIntensity": 0.0002, "precipProbability": 0.01, "precipType": "snow", "precipAccumulation": 0.0009, "temperature": 35.89, "apparentTemperature": 29.26, "dewPoint": 28.31, "humidity": 0.74, "pressure": 1020.5, "windSpeed": 8.59, "windGust": 19.76, "windBearing": 309, "cloudCover": 0.51, "uvIndex": 0, "visibility": 10, "ozone": 322.7 }, { "time": 1581508800, "summary": "Partly Cloudy", "icon": "partly-cloudy-day", "precipIntensity": 0, "precipProbability": 0, "temperature": 35.26, "apparentTemperature": 28.96, "dewPoint": 27.6, "humidity": 0.73, "pressure": 1021.4, "windSpeed": 7.76, "windGust": 16.81, "windBearing": 314, "cloudCover": 0.55, "uvIndex": 0, "visibility": 10, "ozone": 320.7 }, { "time": 1581512400, "summary": "Partly Cloudy", "icon": "partly-cloudy-day", "precipIntensity": 0, "precipProbability": 0, "temperature": 35.63, "apparentTemperature": 29.95, "dewPoint": 27.27, "humidity": 0.71, "pressure": 1022.3, "windSpeed": 6.89, "windGust": 14.35, "windBearing": 305, "cloudCover": 0.58, "uvIndex": 0, "visibility": 10, "ozone": 320.5 }, { "time": 1581516000, "summary": "Mostly Cloudy", "icon": "partly-cloudy-day", "precipIntensity": 0, "precipProbability": 0, "temperature": 36.6, "apparentTemperature": 31.74, "dewPoint": 27.02, "humidity": 0.68, "pressure": 1023, "windSpeed": 5.97, "windGust": 12.04, "windBearing": 295, "cloudCover": 0.61, "uvIndex": 1, "visibility": 10, "ozone": 320.8 }, { "time": 1581519600, "summary": "Mostly Cloudy", "icon": "partly-cloudy-day", "precipIntensity": 0, "precipProbability": 0, "temperature": 37.97, "apparentTemperature": 33.88, "dewPoint": 26.19, "humidity": 0.62, "pressure": 1023.4, "windSpeed": 5.27, "windGust": 9.98, "windBearing": 315, "cloudCover": 0.63, "uvIndex": 2, "visibility": 10, "ozone": 320.7 }, { "time": 1581523200, "summary": "Mostly Cloudy", "icon": "partly-cloudy-day", "precipIntensity": 0, "precipProbability": 0, "temperature": 39.8, "apparentTemperature": 36.45, "dewPoint": 25.72, "humidity": 0.57, "pressure": 1023.4, "windSpeed": 4.72, "windGust": 7.96, "windBearing": 38, "cloudCover": 0.61, "uvIndex": 2, "visibility": 10, "ozone": 319.3 }, { "time": 1581526800, "summary": "Partly Cloudy", "icon": "partly-cloudy-day", "precipIntensity": 0, "precipProbability": 0, "temperature": 41.91, "apparentTemperature": 39.29, "dewPoint": 25.57, "humidity": 0.52, "pressure": 1023.2, "windSpeed": 4.27, "windGust": 6.19, "windBearing": 156, "cloudCover": 0.59, "uvIndex": 3, "visibility": 10, "ozone": 317.3 }] }, "daily": { "summary": "Light rain today through Thursday.", "icon": "rain", "data": [{ "time": 1581310800, "summary": "Light rain throughout the day.", "icon": "rain", "sunriseTime": 1581335880, "sunsetTime": 1581373500, "moonPhase": 0.57, "precipIntensity": 0.0134, "precipIntensityMax": 0.034, "precipIntensityMaxTime": 1581389940, "precipProbability": 0.99, "precipType": "rain", "temperatureHigh": 51.02, "temperatureHighTime": 1581362760, "temperatureLow": 45.51, "temperatureLowTime": 1581426000, "apparentTemperatureHigh": 51.07, "apparentTemperatureHighTime": 1581362880, "apparentTemperatureLow": 42.84, "apparentTemperatureLowTime": 1581379200, "dewPoint": 38.72, "humidity": 0.79, "pressure": 1021.7, "windSpeed": 8.62, "windGust": 30.57, "windGustTime": 1581332460, "windBearing": 215, "cloudCover": 0.96, "uvIndex": 2, "uvIndexTime": 1581354240, "visibility": 9.64, "ozone": 336.9, "temperatureMin": 38.91, "temperatureMinTime": 1581310800, "temperatureMax": 51.02, "temperatureMaxTime": 1581362760, "apparentTemperatureMin": 34.66, "apparentTemperatureMinTime": 1581310800, "apparentTemperatureMax": 51.07, "apparentTemperatureMaxTime": 1581362880 }, { "time": 1581397200, "summary": "Light rain in the morning and afternoon.", "icon": "rain", "sunriseTime": 1581422220, "sunsetTime": 1581460020, "moonPhase": 0.61, "precipIntensity": 0.0226, "precipIntensityMax": 0.0608, "precipIntensityMaxTime": 1581428280, "precipProbability": 0.99, "precipType": "rain", "temperatureHigh": 49.74, "temperatureHighTime": 1581454800, "temperatureLow": 34.77, "temperatureLowTime": 1581509160, "apparentTemperatureHigh": 48.12, "apparentTemperatureHighTime": 1581454320, "apparentTemperatureLow": 28.93, "apparentTemperatureLowTime": 1581508020, "dewPoint": 40.93, "humidity": 0.81, "pressure": 1014, "windSpeed": 4.48, "windGust": 25.84, "windGustTime": 1581483600, "windBearing": 339, "cloudCover": 0.95, "uvIndex": 2, "uvIndexTime": 1581441000, "visibility": 8.111, "ozone": 320.7, "temperatureMin": 41.11, "temperatureMinTime": 1581483600, "temperatureMax": 49.74, "temperatureMaxTime": 1581454800, "apparentTemperatureMin": 36.27, "apparentTemperatureMinTime": 1581483600, "apparentTemperatureMax": 48.12, "apparentTemperatureMaxTime": 1581454320 }, { "time": 1581483600, "summary": "Light rain in the evening and overnight.", "icon": "rain", "sunriseTime": 1581508560, "sunsetTime": 1581546480, "moonPhase": 0.64, "precipIntensity": 0.0054, "precipIntensityMax": 0.0522, "precipIntensityMaxTime": 1581570000, "precipProbability": 0.7, "precipType": "rain", "temperatureHigh": 46.1, "temperatureHighTime": 1581537600, "temperatureLow": 39.01, "temperatureLowTime": 1581581220, "apparentTemperatureHigh": 42.71, "apparentTemperatureHighTime": 1581535440, "apparentTemperatureLow": 34.88, "apparentTemperatureLowTime": 1581556020, "dewPoint": 28.89, "humidity": 0.64, "pressure": 1020.1, "windSpeed": 7.3, "windGust": 26.35, "windGustTime": 1581490740, "windBearing": 252, "cloudCover": 0.76, "uvIndex": 3, "uvIndexTime": 1581527520, "visibility": 9.871, "ozone": 316.1, "temperatureMin": 34.77, "temperatureMinTime": 1581509160, "temperatureMax": 46.1, "temperatureMaxTime": 1581537600, "apparentTemperatureMin": 28.93, "apparentTemperatureMinTime": 1581508020, "apparentTemperatureMax": 42.71, "apparentTemperatureMaxTime": 1581535440 }, { "time": 1581570000, "summary": "Light rain in the morning and afternoon.", "icon": "rain", "sunriseTime": 1581594840, "sunsetTime": 1581632940, "moonPhase": 0.68, "precipIntensity": 0.0249, "precipIntensityMax": 0.077, "precipIntensityMaxTime": 1581582000, "precipProbability": 0.96, "precipType": "rain", "temperatureHigh": 53.54, "temperatureHighTime": 1581619320, "temperatureLow": 26.47, "temperatureLowTime": 1581685200, "apparentTemperatureHigh": 53.04, "apparentTemperatureHighTime": 1581619320, "apparentTemperatureLow": 15.09, "apparentTemperatureLowTime": 1581685200, "dewPoint": 38.78, "humidity": 0.8, "pressure": 1003.8, "windSpeed": 10.28, "windGust": 35.69, "windGustTime": 1581625980, "windBearing": 265, "cloudCover": 0.97, "uvIndex": 2, "uvIndexTime": 1581613800, "visibility": 7.605, "ozone": 317.8, "temperatureMin": 39.01, "temperatureMinTime": 1581581220, "temperatureMax": 53.54, "temperatureMaxTime": 1581619320, "apparentTemperatureMin": 33.75, "apparentTemperatureMinTime": 1581656400, "apparentTemperatureMax": 53.04, "apparentTemperatureMaxTime": 1581619320 }, { "time": 1581656400, "summary": "Clear throughout the day.", "icon": "clear-day", "sunriseTime": 1581681180, "sunsetTime": 1581719400, "moonPhase": 0.72, "precipIntensity": 0.0002, "precipIntensityMax": 0.0008, "precipIntensityMaxTime": 1581656400, "precipProbability": 0.06, "precipType": "rain", "temperatureHigh": 28.48, "temperatureHighTime": 1581681600, "temperatureLow": 10.78, "temperatureLowTime": 1581765720, "apparentTemperatureHigh": 16.67, "apparentTemperatureHighTime": 1581681600, "apparentTemperatureLow": -0.39, "apparentTemperatureLowTime": 1581754320, "dewPoint": 8.91, "humidity": 0.5, "pressure": 1021.7, "windSpeed": 15.16, "windGust": 28.34, "windGustTime": 1581685200, "windBearing": 314, "cloudCover": 0.08, "uvIndex": 2, "uvIndexTime": 1581700140, "visibility": 10, "ozone": 387.6, "temperatureMin": 14.2, "temperatureMinTime": 1581742800, "temperatureMax": 41.06, "temperatureMaxTime": 1581656400, "apparentTemperatureMin": 0.34, "apparentTemperatureMinTime": 1581739260, "apparentTemperatureMax": 33.75, "apparentTemperatureMaxTime": 1581656400 }, { "time": 1581742800, "summary": "Clear throughout the day.", "icon": "clear-day", "sunriseTime": 1581767520, "sunsetTime": 1581805920, "moonPhase": 0.75, "precipIntensity": 0.0001, "precipIntensityMax": 0.0005, "precipIntensityMaxTime": 1581751800, "precipProbability": 0.01, "precipType": "snow", "precipAccumulation": 0.06, "temperatureHigh": 29.09, "temperatureHighTime": 1581811200, "temperatureLow": 28.1, "temperatureLowTime": 1581811200, "apparentTemperatureHigh": 19.56, "apparentTemperatureHighTime": 1581811200, "apparentTemperatureLow": 19.56, "apparentTemperatureLowTime": 1581811200, "dewPoint": 4.77, "humidity": 0.5, "pressure": 1036.1, "windSpeed": 8.06, "windGust": 22.2, "windGustTime": 1581829200, "windBearing": 244, "cloudCover": 0.22, "uvIndex": 3, "uvIndexTime": 1581786480, "visibility": 10, "ozone": 320.4, "temperatureMin": 10.78, "temperatureMinTime": 1581765720, "temperatureMax": 29.91, "temperatureMaxTime": 1581825900, "apparentTemperatureMin": -0.39, "apparentTemperatureMinTime": 1581754320, "apparentTemperatureMax": 20.66, "apparentTemperatureMaxTime": 1581829200 }, { "time": 1581829200, "summary": "Overcast throughout the day.", "icon": "cloudy", "sunriseTime": 1581853860, "sunsetTime": 1581892380, "moonPhase": 0.79, "precipIntensity": 0.0001, "precipIntensityMax": 0.0003, "precipIntensityMaxTime": 1581876000, "precipProbability": 0.05, "precipType": "snow", "precipAccumulation": 0, "temperatureHigh": 44.58, "temperatureHighTime": 1581886020, "temperatureLow": 33.65, "temperatureLowTime": 1581937380, "apparentTemperatureHigh": 40.69, "apparentTemperatureHighTime": 1581886260, "apparentTemperatureLow": 31.15, "apparentTemperatureLowTime": 1581936300, "dewPoint": 24.55, "humidity": 0.65, "pressure": 1024, "windSpeed": 6.74, "windGust": 24.56, "windGustTime": 1581854280, "windBearing": 228, "cloudCover": 0.83, "uvIndex": 2, "uvIndexTime": 1581873000, "visibility": 10, "ozone": 332.6, "temperatureMin": 28.91, "temperatureMinTime": 1581852300, "temperatureMax": 44.58, "temperatureMaxTime": 1581886020, "apparentTemperatureMin": 20.66, "apparentTemperatureMinTime": 1581829200, "apparentTemperatureMax": 40.69, "apparentTemperatureMaxTime": 1581886260 }, { "time": 1581915600, "summary": "Possible light rain overnight.", "icon": "partly-cloudy-day", "sunriseTime": 1581940140, "sunsetTime": 1581978840, "moonPhase": 0.82, "precipIntensity": 0.0016, "precipIntensityMax": 0.0076, "precipIntensityMaxTime": 1582002000, "precipProbability": 0.3, "precipType": "rain", "temperatureHigh": 51.68, "temperatureHighTime": 1581965580, "temperatureLow": 36.4, "temperatureLowTime": 1582027500, "apparentTemperatureHigh": 51.25, "apparentTemperatureHighTime": 1581964680, "apparentTemperatureLow": 29.7, "apparentTemperatureLowTime": 1582028760, "dewPoint": 34.22, "humidity": 0.77, "pressure": 1019.9, "windSpeed": 5.5, "windGust": 14.06, "windGustTime": 1581989220, "windBearing": 235, "cloudCover": 0.48, "uvIndex": 3, "uvIndexTime": 1581959640, "visibility": 9.875, "ozone": 321.9, "temperatureMin": 33.65, "temperatureMinTime": 1581937380, "temperatureMax": 51.68, "temperatureMaxTime": 1581965580, "apparentTemperatureMin": 31.15, "apparentTemperatureMinTime": 1581936300, "apparentTemperatureMax": 51.25, "apparentTemperatureMaxTime": 1581964680 }] }, "flags": { "sources": ["nwspa", "cmc", "gfs", "hrrr", "icon", "isd", "madis", "nam", "sref", "darksky", "nearest-precip"], "nearest-station": 0.262, "units": "us" }, "offset": -5 })

        dispatch({
            type: actions.GET_WEATHER_SUCCESS,
            weatherInfo: dummyData
        })



        // Make HTTP request to the server

        // const xhr = new XMLHttpRequest();
        // xhr.open('GET', endpoint, true);
        // xhr.setRequestHeader("cache-control", "no-cache");
        // xhr.responseType = '';
        // xhr.onreadystatechange = () => {
        //     if (xhr.readyState === xhr.LOADING) {
        //         var curr_index = xhr.responseText.length;
        //         if (last_index === curr_index) return;
        //         console.log("PROGRESS index:", last_index, curr_index);
        //         last_index = curr_index;

        //     } else if (xhr.readyState === xhr.DONE) {
        //         if (xhr.status === 200) {
        //             let result = JSON.parse(xhr.responseText);
        //             console.log("fetched weather from the backend: ", result);
        //             dispatch({
        //                 type: actions.GET_WEATHER_SUCCESS,
        //                 weatherInfo: result
        //             })

        //         } else {
        //             console.log(`XHR Failed with status ${xhr.status}: ${xhr.statusText}`);
        //         }
        //     }
        // };

        // xhr.send();

    }
}