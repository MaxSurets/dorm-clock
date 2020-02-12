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
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getWeather();
        this.timerID = setInterval(
            () => this.updateWeather(),
            1800000
        );
    }


    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    updateWeather = () => {
        this.props.getWeather()
    }

    fiveHourForecast = (hourly, currently) => {
        let forecast = [];
        let currHour = Date(currently.time * 1000).getHours();
        for (let x = currHour + 1; x <= currHour + 5; x++) {
            let hour = hourly.data[x];
            let d = new Date(hour.time * 1000)
            let dHour = d.getHours();
            if (dHour > 12) {
                dHour -= 12;
            }
            else if (dHour === 0) {
                dHour = 12;
            }
            forecast.push(
                <div className="hour-box">
                    <h4>{Math.round(hour.apparentTemperature)}°</h4>
                    {this.weatherIcon(hour.icon)}
                    <h4>{dHour}:00</h4>
                </div>);
        }
        return <div className="hour-box-container">{forecast}</div>

    }

    theWeather = () => {
        console.log('called theWeather')
        if (this.props.weather) {
            let { currently, hourly, daily } = JSON.parse(this.props.weather);
            console.log('interesting', currently, hourly, daily);

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
                        {this.fiveHourForecast(hourly, currently)}
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

    weatherIcon = (iconName) => {
        return (
            <img src={weatherDic[iconName]} />
        )
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