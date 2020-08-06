import React, { Component }  from 'react';
import TransRotateCom from 'react-drag-rotate'
import $ from 'jquery'
import ClickNHold from 'react-click-n-hold'; 
import './clock.css'

export default  class Clock extends Component {
    constructor(props) {
        super(props);

        let startTime = new Date()
        let startSecondsDeg = startTime.getSeconds() * 6;
        let startMinutesDeg = startTime.getMinutes() * 6 + startTime.getSeconds() * 0.1;
        let startHoursDeg = startTime.getHours() * 30 + startTime.getMinutes() * 0.5 + startTime.getSeconds() * (0.5 / 60);

        this.mousePositionX = 0;
        this.mousePositionY = 0;
        this.alarmHandAngle = 0;
        this.alarmRing = false;

        this.state={
            secondDeg: startSecondsDeg,
            minuteDeg: startMinutesDeg,
            hourDeg: startHoursDeg,
            alarmDeg: 0
        }
    }

    currentTime = () => {
        let currentTime = new Date()

        this.setState({
            secondDeg: currentTime.getSeconds() * 6,
            minuteDeg: currentTime.getMinutes() * 6 + currentTime.getSeconds() * 0.1,
            hourDeg: currentTime.getHours() * 30 + currentTime.getMinutes() * 0.5 + currentTime.getSeconds() * (0.5 / 60)
        })

        console.log(this.state.hourDeg - 360)
        if(this.state.hourDeg < 360) {        
            if(Math.trunc(this.alarmHandAngle) == Math.trunc(this.state.hourDeg) && this.alarmRing) {
                const audio = document.getElementsByClassName('alarm-sound')[0]
                audio.play();

                this.alarmRing = false;
            }   
        }
        else {
            if(Math.trunc(this.alarmHandAngle) == Math.trunc(this.state.hourDeg - 360) && this.alarmRing) {
                const audio = document.getElementsByClassName('alarm-sound')[0]
                audio.play();

                this.alarmRing = false;
            }
        }
    }
    componentDidMount() {
        setInterval(() => this.currentTime(), 1000)


    }

    handleClick = (e) => {
        $(document).on("mousemove", eventMove => {
            this.mousePositionX = eventMove.pageX
            this.mousePositionY = eventMove.pageY

            var thisElement = $('#alarmHand')
            var thisElementCenter = [thisElement.offset().left + thisElement.width() / 2, thisElement.offset().top + thisElement.height() / 2]
            var angle = Math.atan2(this.mousePositionX - thisElementCenter[0],  - (this.mousePositionY - thisElementCenter[1])) * (180/Math.PI)
            this.alarmHandAngle = (180 + angle)

            thisElement.css({ "transform": 'rotate(' + (angle) + 'deg)'});
        })
    }
    handleRelease = (e, enough) => {
        
        $(document).off("mousemove")
        console.log(this.alarmHandAngle)

        this.alarmRing = true;
    }
    
    render() {
        return (
            <div className="clock">
                <hr id="seconds" style={{transform: `rotate(${180 + (this.state.secondDeg)}deg)`}}/>
                <hr id="minutes" style={{transform: `rotate(${180 + (this.state.minuteDeg)}deg)`}}/>
                <hr id="hours" style={{transform: `rotate(${180 + (this.state.hourDeg)}deg)`}}/>

                <audio className="alarm-sound">
                    <source src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"></source>
                </audio>

                <ClickNHold onStart={this.handleClick} onEnd={this.handleRelease} time={Infinity}>
                    <hr id="alarmHand"/>
                </ClickNHold>
            </div>
        );
    }
}