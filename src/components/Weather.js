import { connect } from 'react-redux';
import { retrieveWeather } from '../actions/weatherActions'

import React from 'react';
import '../css/weather.css';
//import icon from '../icons/bolt-solid.svg';



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
            let {currently, hourly, daily} = JSON.parse(this.props.weather);
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