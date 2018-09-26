import React from 'react';
import './popup.css';

class PopPupPresentationalComponent extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-2 offset-md-10">
            <button onClick={this.props.closePopup} className="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          </div>
        </div>
        <div className="row">
            <div className="col-xs-2 tippny-brand-logo-container">
              <img className="img-responsive tippny-brand-logo" src={this.props.brandLogo}></img>
            </div>
            <div className="col-xs-6 offset-xs-2">
                <span>{this.props.brandName}</span>
              </div>
        </div>

        <div className="row">
          <span>
            Festive Offers ONLY ON Facebook Messenger! Get Exclusive Deals and Notifications on FB Messenger via our partner Tippny. Tick the box below and tap subscribe!
          </span>
        </div>
        
        <div class="subscribe-btn-div d-flex justify-content-center align-items-center">
          <button type="button" className="btn btn-primary subscribe-btn">Subscribe</button>
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

  