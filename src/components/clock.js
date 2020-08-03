import React, { Component }  from 'react';
import './clock.css'

export default  class Clock extends Component {
    constructor(props) {
        super(props);

        let startTime = new Date()
        let startSecondsDeg = startTime.getSeconds() * 6;
        let startMinutesDeg = startTime.getMinutes() * 6 + startTime.getSeconds() * 0.1;
        let startHoursDeg = startTime.getHours() * 30 + startTime.getMinutes() * 0.5 + startTime.getSeconds() * (0.5 / 60);

        this.state={
            secondDeg: startSecondsDeg,
            minuteDeg: startMinutesDeg,
            hourDeg: startHoursDeg
        }
    }

    currentTime() {
        let currentTime = new Date()

        this.setState({
            secondDeg: currentTime.getSeconds() * 6,
            minuteDeg: currentTime.getMinutes() * 6 + currentTime.getSeconds() * 0.1,
            hourDeg: currentTime.getHours() * 30 + currentTime.getMinutes() * 0.5 + currentTime.getSeconds() * (0.5 / 60)
        })
    }
    componentDidMount() {
        setInterval(() => this.currentTime(), 1000)
    }
    
    render() {
        return (
            <div className="clock">
                <hr id="seconds" style={{transform: `rotate(${180 + (this.state.secondDeg)}deg)`}}/>
                <hr id="minutes" style={{transform: `rotate(${180 + (this.state.minuteDeg)}deg)`}}/>
                <hr id="hours" style={{transform: `rotate(${180 + (this.state.hourDeg)}deg)`}}/>
            </div>
        );
    }
}