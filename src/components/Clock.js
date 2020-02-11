import React from 'react';
import '../css/clock.css';
import { WeatherContainer } from './Weather';
//import icon from '../icons/bolt-solid.svg';

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
        if (hours && i === 0)
            i = 12;
        if (i < 10)
            i = '0' + i;
        if (hours && i > 12)
            i = i - 12;
        return i;
    }

    render() {


        return (
            <div>
                <p>{this.state.h}:{this.state.m}:{this.state.s}</p>
                <p className="day">{this.state.day}</p>
                <WeatherContainer />

            </div>
        )
    }
}
