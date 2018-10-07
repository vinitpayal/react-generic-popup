import React from 'react';
import './popup.css';

class PopPupPresentationalComponent extends React.Component {
  constructor(props) {
    super(props);
    // console.log("constructor called");
    this.state = {"user_ref": "popup_"+this.uuidv4()};
  }

  uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  componentDidMount() {
    // console.log("componentDidMount called");
    document.addEventListener('fb_init', e => FB.XFBML.parse());
    // console.log("user_ref:", this.props.userRef);
    // this.setState({'user_ref': this.props.userRef});
  }

  logCheckboxEvent() {
    window.tippnySendCheckboxSelectionEventAfterClick(this.state.user_ref, {
      "user_ref": this.state.user_ref,
      "origin": 'popup',
      "access_token": "YrET5zvlHX9dOSWlPQ2aKk6sVjryI9uO"
    });
    this.props.closePopup();
  }
  
  render() {
    console.log("redering with user_ref:", this.state.user_ref, this.state.user_ref);
    return (
      <div className="container">
        <div className="row">
          <div className="col-2 offset-5 tippny-brand-logo-container">
            <img className="img-rounded img-responsive tippny-brand-logo" src={this.props.brandLogo}></img>
          </div>
        </div>

        <div className="row">
          <div className="col-12 offers-div">
            <strong className='popup-heading-text'>Special Festival Offer!!!</strong>
          </div>
        </div>

        <div className="row">
          <div className="col-12 text-div">
            <span className='tippny-popup-body-text'>
              Get Exclusive Deals and Notifications on FB Messenger via our partner Tippny. 
            </span>
          </div>
        </div>
        
        <div className="row">
          <div className="fb-messenger-checkbox tippny-popup-messenger-div" 
            origin="https://shop.tippny.com" 
            page_id="2011137462500782" 
            messenger_app_id="293870131126505" 
            user_ref={this.state.user_ref}>
          </div>
        </div>

        <div className="row powered-by-div">
          <div className="col-8 offset-4">Powered by <a href="https://tippny.com/">Tippny</a></div>
        </div>

        <div className="row bottom-btn-row">
          <div className="col-6">
            <span onClick={this.props.closePopup} className="bottom-btn-text-span close-bottom-btn">I DON'T WANT OFFERS</span>
          </div>
          <div className="col-6">
            <span onClick={this.logCheckboxEvent.bind(this)} className="bottom-btn-text-span subscribe-btn">GET NOTIFIED</span>
          </div>
        </div>
     </div>
    );
  }
}

export default class PopupController extends React.Component {
    render() {
      return (
        <div className='tippny-popup'>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"></link>
          <div className='tippny-popup-inner'>
            <PopPupPresentationalComponent
              brandLogo={this.props.brandLogo} 
              brandName={this.props.brandName} 
              closePopup={this.props.closePopup} />
          </div>
        </div>
      );
    }
}

  