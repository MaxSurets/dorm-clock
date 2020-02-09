import { connect } from 'react-redux';
import { retrieveWeather } from '../actions/weatherActions'

import React from 'react';
import '../css/weather.css';
import icon from '../icons/bolt-solid.svg';



class Weather extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            weather: '',
        }
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
    }

    render() {


        return (
            <div>
                <p className="weather-title">Weather Widget</p>
                {/* <img  src={icon} alt="icon"/> */}
            </div>
        )
    }
}



// //get location
// var long;
// var lat;
// var weatherRes;
// navigator.geolocation.getCurrentPosition(success, fail);
// function success(position) {
//     long = position.coords.longitude;
//     lat = position.coords.latitude;
//     console.log("Longitude: " + long);
//     console.log("Latitude: " + lat);
//     //http request
//     var xhr = new XMLHttpRequest();
//     //make get request async??
//     console.log("https://api.darksky.net/forecast/ce47d0cfdec16677f87ec01676cf27fb/" + lat + "," + long);
//     xhr.open('GET', "https://api.darksky.net/forecast/ce47d0cfdec16677f87ec01676cf27fb/" + lat + "," + long, true);
//     xhr.onreadystatechange = () => {
//         if (xhr.readyState === xhr.LOADING) {

//             console.log("LOADING");
//         }
//         else if (xhr.readyState === xhr.DONE) {
//             if (xhr.status === 200) {
//                 console.log("DONE");
//                 console.log(JSON.parse(xhr.responseText));
//                 weatherRes = JSON.parse(xhr.responseText);
//                 console.log("repsonse: " + JSON.stringify(weatherRes));
//             }
//         }
//         else {
//             console.log(`XHR Failed with status ${xhr.status}: ${xhr.statusText}`);
//         }
//     };
//     xhr.send();
// }
// function fail() {
//     console.log("oopsie woopsie. can't get longitude and latitude.")
// }

// //console.log(JSON.parse(xhr.responseText));


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