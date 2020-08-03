import React, { Component }  from 'react';
import './clock.css'

export default  class Alarm extends Component {

    state = {
        hour: '',
        minute: '',
        second: ''
    }

    constructor(props) {
        super(props)
        
        this.onHourChange = this.onHourChange.bind(this)
        this.onMinuteChange = this.onMinuteChange.bind(this)
        this.onSecondChange = this.onSecondChange.bind(this)
    }

    onHourChange(event) {
        if(event.target.value >= 24) {
            this.setState({hour: 23})
        }
        else if(event.target.value < 0) {
            this.setState({hour: 0})
        }
        else {
            this.setState({hour: event.target.value})
        }
    }

    onMinuteChange(event) {
        if(event.target.value >= 60) {
            this.setState({minute: 59})
        }
        else if(event.target.value < 0) {
            this.setState({minute: 0})
        }
        else {
            this.setState({minute: event.target.value})
        }
    }

    onSecondChange(event) {
        if(event.target.value >= 60) {
            this.setState({second: 59})
        }
        else if(event.target.value < 0) {
            this.setState({second: 0})
        }
        else {
            this.setState({second: event.target.value})
        }
    }

    soundTheAlarm() {
        let currentTime = new Date();
        if(this.state.second !== '' && this.state.minute !== '' && this.state.hour !== '') {
            if(currentTime.getSeconds() == this.state.second && 
                currentTime.getMinutes() == this.state.minute && 
                currentTime.getHours() == this.state.hour) {
                console.log('xxx')
            }
        }
    }

    componentDidMount() {
        setInterval(() => this.soundTheAlarm(), 1000)

        
    }
    
    render() {
        return (
            <div className="alarm">    
                    <label>
                        <input type="number" className="hr-mn-sc" value={this.state.hour} onChange={this.onHourChange}/>                    
                        <input type="number" className="hr-mn-sc" value={this.state.minute} onChange={this.onMinuteChange}/> 
                        <input type="number" className="hr-mn-sc" value={this.state.second} onChange={this.onSecondChange}/>
                    </label>
            </div>
        );
    }

}