import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

const Btn = ({caption, handler}) => (
    <button className="btn btn-primary" onClick={handler}>
        {caption}
    </button>
);

class App extends Component {

    state = { num: 0 };

    incrementOrDecrement = (incVal) => {
        this.setState({ num: this.state.num + incVal });
    }

    render() {
        return (<div className="container">
            <h1 className="alert alert-info">ReactJS Counter Application</h1>

            <h3>Value of num is {this.state.num}</h3>
            
            <Btn caption="Increment" handler={()=>this.incrementOrDecrement(1)} />
            <Btn caption="Decrement" handler={()=>this.incrementOrDecrement(-1)} />
            
            
        </div>);
    }
}

ReactDOM.render(<App />, document.getElementById('root'));