import React, { Component} from 'react';
// import { Nav, Navbar, NavItem, NavDropdown, MenuItem, Tooltip, OverlayTrigger} from 'react-bootstrap';
import { Modal, Button } from 'react-bootstrap';


class Header extends Component {
  constructor(props)  {
    super(props);
    this.state = {
      showModal: false
    }
  }

  onClose = () => {
    console.log('onClose is hit')
    console.log('button state is', this.state)
    this.setState({ showModal: false });
  }

  onOpen = () => {
    this.setState({ showModal: true });
  }



  render() {
    return (
      <div>
        <div className="sidebar">
          <div>
            <Modal show={this.state.showModal} onHide={this.onClose}>
              <Modal.Header>
                <div className="modal-close">
                <div className="closeButton" onClick={this.onClose}>
                  <div className="title">CLOSE</div>
                </div>

                {/* <i className="fa fa-window-minimize" aria-hidden="true" onCLick={this.onClose}></i> */}
              </div>
                <Modal.Title>About</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h4>As a Rap Genius enthusiast and born in the 90s, Hip-Hop has always been a huge part of my identity. The famous and infamuous have always served as vessels for public sentiment: they're praised amid prosperity and blamed for misfortune. Primitive societies faced one fundamental problem above all: they would be torn apart by conflict if they didn't have a way to stop it. So whenever plagues, disasters, or violent rivalries threatened the peace, it was beneficial for the society to place the entire blame on a single person, someone everybody could agree on: a scapegoat.</h4>
              </Modal.Body>
              <Modal.Footer>
                <div className="modal-credit">
                <h4>Created by @RxNeu</h4>
                </div>
                {/* <div className="nav-contain">
                  <div className="fa fa-facebook btn btn-round"><a href="/"></a></div>
                  <div className="fa fa-twitter btn btn-round"><a href="https://twitter.com/RxNeu" target="_blank"></a></div>
                </div> */}
                {/* <img src={"../img/LogoGrey.png"} className="modalLogo"></img> */}
                {/* <Button onClick={this.onClose}>Close</Button> */}
              </Modal.Footer>
            </Modal>
          </div>
          {/* <h1 className="logoName">Rapsmatter</h1> */}
          <a href="/">
            <img src={"../img/LogoGrey.png"} className="logo"></img>
          </a>
          {/* <div className="sidebarCenter" onClick={this.onOpen}>
            <i className="fa fa-plug twitter" aria-hidden="true"></i>
          </div> */}
            {/* <div className="sidebarBottom">
              <a href="https://twitter.com/RxNeu" target="_blank">
              <i className="fa fa-twitter twitter" aria-hidden="true"></i>
              </a>
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </div> */}
        </div>
        <div className="nav-contain">
          {/* <div className="fa fa-facebook btn btn-round"><a href="/"></a></div>
          <div className="fa fa-twitter btn btn-round"><a href="https://twitter.com/RxNeu" target="_blank"></a></div>
          <div className="fa fa-instagram btn btn-round"><a href=""  target="_blank"></a></div> */}
          <div className="fa fa-eye btn btn-round" onClick={this.onOpen}><a href="#" ></a></div>
        </div>

      </div>
    );
  }
}

export default Header;
