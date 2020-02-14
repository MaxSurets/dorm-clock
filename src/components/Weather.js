import { connect } from 'react-redux';
import { retrieveWeather } from '../actions/weatherActions'

import React from 'react';
import '../css/weather.css';
import bolt from '../icons/bolt.svg';
import cloud from '../icons/cloud.svg';
import cloud_moon from '../icons/cloud-moon.svg';
import cloud_sun from '../icons/cloud-sun.svg';
import fog from '../icons/fog.svg';
import moon from '../icons/moon.svg';
import sleet from '../icons/sleet.svg';
import snow from '../icons/snow.svg';
import snowflake from '../icons/snowflake.svg';
import sun from '../icons/sun.svg';
import temperature_high from '../icons/temperature-high.svg';
import temperature_low from '../icons/temperature-low.svg';
import thunderstorm from '../icons/thunderstorm.svg';
import wind from '../icons/wind.svg';
import hail from '../icons/hail.svg';
import rain from '../icons/rain.svg';
const weatherDic = {
    "bolt": bolt,
    "cloudy": cloud,
    "partly-cloudy-night": cloud_moon,
    "partly-cloudy-day": cloud_sun,
    "fog": fog,
    "clear-night": moon,
    "sleet": sleet,
    "snow": snow,
    "snowflake": snowflake,
    "clear-day": sun,
    "temperature-high": temperature_high,
    "temperature-low": temperature_low,
    "thunderstorm": thunderstorm,
    "wind": wind,
    "hail": hail,
    "rain": rain
};


class Weather extends React.PureComponent {

    componentDidMount() {
        this.props.getWeather();
        this.syncUpdateWithHour();
    }


    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    weatherIcon = (iconName) => {
        return (
            <div className="img-container">
                <img src={weatherDic[iconName]} />
            </div>
        )
    }

    updateWeather = () => {
        console.log("Created half hour timer between api calls at", new Date())
        this.timerID = setInterval(
            () => this.props.getWeather(),
            1800000
        );
    }

    syncUpdateWithHour = () => {
        const current = new Date();
        const nearestHour = current.getHours() + 1;
        const roundedDate = new Date().setHours(nearestHour, 0, 0, 0);

        // Syncs the updateWeather call with the turn of the hour
        setTimeout(() => { this.updateWeather() }, roundedDate - current)
    }


    fiveHourForecast = (hourly) => {
        let forecast = [];
        for (let x = 1; x <= 5; x++) {
            let hour = hourly.data[x];
            let y = new Date(hour.time * 1000).getHours();
            if (y > 12 && y <= 24) {
                y -= 12;
            }
            else if (y > 24) {
                y -= 24;
            }
            else if (y === 0) {
                y = 12;
            }
            forecast.push(
                <div className="hour-box">
                    <h4>{Math.round(hour.apparentTemperature)}°</h4>
                    {this.weatherIcon(hour.icon)}
                    <h4>{y}:00</h4>
                </div>);
        }
        return <div className="hour-box-container">{forecast}</div>

    }

    theWeather = () => {
        console.log('refresh at', new Date())
        if (this.props.weather) {
            let { currently, hourly, daily } = JSON.parse(this.props.weather);

            return (
                <div className="flex-container">
                    <div className="small-weather">
                        <div>
                            <h4>Currently</h4>
                            <h4>{Math.round(currently.apparentTemperature)}°F</h4>
                            {this.weatherIcon(currently.icon)}
                            <h4>{currently.summary}</h4>
                        </div>
                    </div>
                    <div className="big-weather">
                        {this.fiveHourForecast(hourly)}
                        <h3>{hourly.summary}</h3>
                    </div>
                    <div className="small-weather">
                        <div>
                            <h4>Tomorrow</h4>
                            <h4>↑ {Math.round(daily.data[1].apparentTemperatureHigh)}°F ↓ {Math.round(daily.data[1].apparentTemperatureLow)}°F</h4>
                            {this.weatherIcon(daily.data[1].icon)}
                            <h4>{daily.data[1].summary}</h4>

                        </div>
                    </div>
                </div>
            )
        }
        else {
            return ''
        }
    }

    render() {
        if (this.props.weather) {
            console.log('oh wow', JSON.parse(this.props.weather))
        }
        return (
            /**
             * List of Dark Sky icons:
             * clear-day DONE
             * clear-night DONE
             * rain DONE
             * snow DONE
             * sleet DONE
             * wind DONE
             * fog DONE
             * cloudy DONE
             * partly-cloudy-day DONE
             * partly-cloudy-night DONE
             * hail;
             * thunderstorm DONE
             * tornado
             */
            <>
                {this.theWeather()}
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    weather: state.weather.weatherInfo
})

const mapDispatchToProps = {
    getWeather: retrieveWeather
}

export const WeatherContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Weather);