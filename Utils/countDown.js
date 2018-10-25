var secondsRemaining = 0, intervalHandle;

class TodoApp extends React.Component {
    constructor() {
        super()
        this.state = {
            hour: 0,
            min: 0,
            sec: 0
        }
    }

    tick = () => {
        if(this.secondsRemaining > 0) this.secondsRemaining--
        var hour = Math.floor(this.secondsRemaining / 3600);
        var min = Math.floor((this.secondsRemaining - hour * 3600)/60);
        var sec = this.secondsRemaining - min * 60 - hour * 3600;
        this.setState({
            hour: hour,
            min: min,
            sec: sec
        })

        if (hour === 0 & min === 0 & sec === 0) {
            clearInterval(this.intervalHandle);
            this.intervalHandle = false;
        }
    }
  
    startCountdown = () => {
        if (this.intervalHandle) return;
        console.log("countdown started!");
        this.secondsRemaining = this.state.hour * 3600 + this.state.min * 60 +  this.state.sec;
        this.tick();
        this.intervalHandle = setInterval(this.tick, 1000);
    }
  
    stopCountdown = () => {
        if (!this.intervalHandle) return;
        console.log("stop countdown!")
        clearInterval(this.intervalHandle);
        this.intervalHandle = false;
    }
  
    reset = () => {
        clearInterval(this.intervalHandle);
        this.intervalHandle = false;
        this.secondsRemaining = 0;
        this.setState({ hour: 0 });
        this.setState({ min: 0 });
        this.setState({ sec: 0 });
        console.log("reseted!")
    }
  
    setValue = (e, type) => {
        if (e.target.value <= 59) this.setState({ [type]: e.target.value });
    }
  
    render() {
        return (
        <div id="counter-wrapper">
            <div id="counter-container">
            <input className="counter-input" value={this.state.hour} onChange={(e) => this.setValue(e,'hour')}/>
            <div className="counter-text">
                h          
            </div>
            <input className="counter-input" value={this.state.min} onChange={(e) => this.setValue(e, 'min')}/>
            <div className="counter-text">
                m          
            </div>
            <input className="counter-input" value={this.state.sec} onChange={(e) => this.setValue(e, 'sec')}/>
            <div className="counter-text">
                s       
            </div>
            </div>
            <div id="counter-control">
            <button className="counter-btn" onClick={this.startCountdown}>start</button>
            <button className="counter-btn" onClick={this.stopCountdown}>stop</button>
            <button className="counter-btn" onClick={this.reset}>reset</button>
            </div>
        </div>
        )
    }
}

ReactDOM.render(<TodoApp />, document.querySelector("#app"))

// body {
//     background: #20262E;
//     padding: 20px;
//     font-family: Helvetica;
//   }
  
//   #app {
//     background: #fff;
//     border-radius: 4px;
//     padding: 20px;
//     transition: all 0.2s;
//   }
  
//   li {
//     margin: 8px 0;
//   }
  
//   h2 {
//     font-weight: bold;
//     margin-bottom: 15px;
//   }
  
//   .done {
//     color: rgba(0, 0, 0, 0.3);
//     text-decoration: line-through;
//   }
  
//   input {
//     margin-right: 5px;
//   }
  
//   .counter-container {
//     display: flex;
//     align-items: flex-end;
//   }
  
//   .counter-input {
//     text-align: center;
//     font-size: 1.5rem;
//     width: 50px;
//     height: 50px;
//   }
  
//   .counter-text {
//     font-size: 1.5rem;
//     display: inline-block;
//     margin-right: 15px;
//   }
  
//   .counter-btn {
//     margin-right: 10px;
//   }
  
//   #counter-control {
//     margin-top: 10px;
//   }