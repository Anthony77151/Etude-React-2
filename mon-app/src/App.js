import './App.css';
import React from 'react';


class App extends React.Component {
  constructor() {
      super()
      this.state = { date: new Date()}
      this.timer = null    
  }
  componentDidMount() {
      this.timer = window.setInterval(this.tick.bind(this), 1000);
  }
  componentWillUnmount() {
      window.clearInterval(this.timer)
  }
  tick() {
      this.setState({ date: new Date() })
  }
  
  render() {
      return <div className="container">
          <h1>Heure:<div className="time">{ this.state.date.toLocaleTimeString() }</div></h1>
          <br></br>
          <h2>Date:<div className="time">{ this.state.date.toLocaleDateString() }</div> </h2>
          </div>
  }    
}     



export default App;
