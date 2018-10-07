import React from 'react';
import ReactDOM from 'react-dom';
import PopupController from './PopupController';

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        showPopup: true
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
                brandLogo="https://pbs.twimg.com/profile_images/1042355141490483200/lbJSS4sY_400x400.jpg" 
                brandName="flipkart"
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