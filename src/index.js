import React from 'react';
import ReactDOM from 'react-dom';
import PopupController from './PopupController';

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        showPopup: false
      };
    }
    togglePopup() {
      this.setState({
        showPopup: !this.state.showPopup
      });
    }
    render() {
      return (
        <div className='app'>
          <button onClick={this.togglePopup.bind(this)}>show popup</button>
  
          {this.state.showPopup ? 
            <PopupController
              text='Close Me'
              closePopup={this.togglePopup.bind(this)}
            />
            : null
          }
        </div>
      );
    }
};

ReactDOM.render(
  <App/>,
  document.getElementById('tippny-subscribe-div')
);