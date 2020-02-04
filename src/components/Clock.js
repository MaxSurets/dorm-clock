import React from 'react';
import '../css/clock.css'

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        let date = new Date()
        this.state = {
            day: this.makeDay(date.getDay()),
            h: this.makeTwoDigit(date.getHours(), true),
            m: this.makeTwoDigit(date.getMinutes(), false),
            s: this.makeTwoDigit(date.getSeconds(), false),
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tickClock(),
            1000
        );
    }
    makeDay = (i) => {
        let tday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        if (i >= 0 && i <= 6)
            return tday[i];
        else
            return 'Unknown';
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tickClock = () => {
        let date = new Date();
        this.setState({
            day: this.makeDay(date.getDay()),
            h: this.makeTwoDigit(date.getHours(), true),
            m: this.makeTwoDigit(date.getMinutes(), false),
            s: this.makeTwoDigit(date.getSeconds(), false),
        })
    }
    

    makeTwoDigit = (i, hours) => {
        if (hours && i == 0)
            i = 12;
        if (i < 10)
            i = '0' + i;
        if (hours && i > 12)
            i = i - 12;
        return i;
    }

    render() {
        //get location
        let long;
        let lat;
        navigator.geolocation.getCurrentPosition(success, fail);
        function success(position) {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            console.log("Longitude: " + long);
            console.log("Latitude: " + lat);
        }
        function fail() {
            console.log("oopsie woopsie. can't get longitude and latitude.")
        }
        //http request
        var xhr = new XMLHttpRequest();
        //make get request async??
        xhr.open('GET', "https://api.darksky.net/forecast/ce47d0cfdec16677f87ec01676cf27fb/" + long + "," + lat, true);
        xhr.responseType = 'josn';
        xhr.onreadystatechange = () => {
            if (xhr.readyState === xhr.LOADING) {
                
                console.log("LOADING");
            }
            else if (xhr.readyState === xhr.DONE) {
                if (xhr.status === 200) {
                    console.log("DONE");
                    console.log(JSON.parse(xhr.responseText));
                }
            }
            else {
                console.log(`XHR Failed with status ${xhr.status}: ${xhr.statusText}`);
              }
        };
        xhr.send();
        //console.log(JSON.parse(xhr.responseText));
        
        return (
            <div>
                <p>{this.state.h}:{this.state.m}:{this.state.s}</p>
                <p className="day">{this.state.day}</p>
            </div>
        )
    }
}
