import React, { Component }  from 'react';
import './clock.css'

export default  class ClockShield extends Component {
    state = {
        hours: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    }
    
    constructor(props) {
        super(props)

    }

    chooseNumberColor() {
        var red = 0;
        var green = 0;
        var blue = 0;
    }

    renderHours = (key) => {
        var hours = [];

        for(var i = 1; i < 13; ++i) {
            hours.push(<div className="hour" key={i}>{i}</div>)
        }

        return hours;
    }
    
    render() {
        return (
            <div className="clockShield">
                    {/*this.renderHours()*/}
                <div className="hour" style={{position: `absolute`, transform: `translate(-10px, -120px)`, textAlign: `center`}}>
                    12
                </div>
                <div className="hour" style={{position: `absolute`, transform: `translate(120px, 5px)`, textAlign: `center`}}>
                    3
                </div>
                <div className="hour" style={{position: `absolute`, transform: `translate(-5px, 120px)`, textAlign: `center`}}>
                    6
                </div>
                <div className="hour" style={{position: `absolute`, transform: `translate(-120px, 5px)`, textAlign: `center`}}>
                    9
                </div>
            </div>
        );
    }

}