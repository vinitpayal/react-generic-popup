import React from 'react';
import ReactDOM from 'react-dom';
import PopupController from './PopupController';

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        showPopup: true,
        userRef: this.uuidv4()
      };
    }

    uuidv4() {
      console.log('uuidv4 function called');
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }

    togglePopup() {
      this.setState({
        userRef: this.uuidv4(),
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
                userRef={this.state.userRef}
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