import { connect } from 'react-redux';
import { retrieveWeather } from '../actions/weatherActions'

import React from 'react';
import '../css/weather.css';
import bolt from '../icons/bolt.svg';
import cloud from '../icons/cloud.svg';
import cloud_moon from '../icons/cloud-mood.svg';
import cloud_sun from '../icons/could-sun.svg';
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
    "hail": hail
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

    theWeather = () => {
        console.log('called theWeather')
        if (this.props.weather) {
            let { currently, hourly, daily } = JSON.parse(this.props.weather);
            console.log('interesting', currently, hourly, daily);
            return (
                <div>
                    <h4>Currently</h4>
                    <h5>Temp: {currently.temperature}°F, weather: {currently.precipType}</h5>
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
             * hail
             * thunderstorm DONE
             * tornado
             */
            <div>
                <div style={{ height: "300px", color: "white" }}>
                    {this.theWeather()}
                </div>
            </div>
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