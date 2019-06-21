import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
class App extends React.Component {
    state = { lat: null, errormessage: '' };
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }
    
    componentDidUpdate() {
        console.log("My component rerendered due to updating");
    }
    
    render() {
        if(this.state.errorMessage && !this.state.lat) {
            return <div> Error: { this.state.errorMessage }</div>;
        }
        if(!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={ this.state.lat }/>
        }
        return <div><Spinner /></div>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));

