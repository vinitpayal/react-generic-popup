import React from 'react';
import './popup.css';

class PopPupPresentationalComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {"user_ref": "popup_"+this.uuidv4()};
  }

  componentDidMount() {
    document.addEventListener('fb_init', e => FB.XFBML.parse());
  }

  uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  logCheckboxEvent() {
    window.tippnySendCheckboxSelectionEventAfterClick(this.state.user_ref, {});
    return true;
  }
  
  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-2 offset-2 tippny-brand-logo-container">
              <img className="img-responsive tippny-brand-logo" src={this.props.brandLogo}></img>
            </div>
            <div className="col-6">
                <span>{this.props.brandName}</span>
            </div>
            <div className="col-2">
              <button onClick={this.props.closePopup} className="close tippny-close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
        </div>

        <div className="row">
          <div className="col-12 offers-div">
            <strong>Festive Offers ONLY ON Facebook Messenger!</strong>
          </div>
        </div>

        <div className="row">
          <div className="col-12 text-div">
            <strong>
              Get Exclusive Deals and Notifications on FB Messenger via our partner Tippny. 
            </strong>
          </div>
        </div>

        <div className="row">
          <div className="col-12 text-div">
            <strong>
              Tick the box below and tap subscribe! 
            </strong>
          </div>
        </div>        
        
        <div className="row">
          <div className="fb-messenger-checkbox" origin="https://shop.tippny.com" page_id="2011137462500782" 
            messenger_app_id="293870131126505" user_ref={this.state.user_ref}>
          </div>
        </div>

        <div className="subscribe-btn-div d-flex justify-content-center align-items-center">
          <button type="button" onClick={this.logCheckboxEvent.bind(this) && this.props.closePopup} className="btn btn-primary subscribe-btn">Subscribe</button>
        </div>  
        
        <div className="row powered-by-div">
          <div className="col-1 tippny-logo">
            <img className="img-responsive tippny-logo" src="https://cdn1.imggmi.com/uploads/2018/9/27/d7308d1adea7ef6b069f9403e0d15df1-full.jpg"></img>
          </div>
          <div className="col-11">Powered by <a href="https://tippny.com/">Tippny</a></div>
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
            <PopPupPresentationalComponent brandLogo={this.props.brandLogo} brandName={this.props.brandName} closePopup={this.props.closePopup} />
          </div>
        </div>
      );
    }
  }

  