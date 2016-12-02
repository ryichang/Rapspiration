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
              <Modal.Header closeButton>
                <i className="fa fa-window-minimize" aria-hidden="true" onCLick={this.onClose}></i>
                <Modal.Title>About</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h4>With the recent divide in the nation</h4>
              </Modal.Body>
              <Modal.Footer>
                <img src={"../img/LogoGrey.png"} className="logo"></img>
                {/* <Button onClick={this.onClose}>Close</Button> */}
              </Modal.Footer>
            </Modal>
          </div>
          {/* <h3 className="logoName">Rapspiration</h3> */}
          <a href="/">
            <img src={"../img/LogoGrey.png"} className="logo"></img>
          </a>
          {/* <div className="sidebarCenter" onClick={this.onOpen}>
            <i className="fa fa-plug twitter" aria-hidden="true"></i>
          </div>
            <div className="sidebarBottom">
              <a href="https://twitter.com/RxNeu" target="_blank">
              <i className="fa fa-twitter twitter" aria-hidden="true"></i>
              </a>
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </div> */}
        </div>
        <nav className="nav-contain">
          <a href="/"><div className="home-btn nav-icon btn btn-round">Home</div></a>
          <a href="https://twitter.com/RxNeu" target="_blank"><div className="fa fa-twitter btn btn-round"></div></a>
          <a href=""  target="_blank"><div className="fa fa-instagram btn btn-round"></div></a>
          <a href="#" ><div className="fa fa-eye btn btn-round" onClick={this.onOpen}></div></a>
        </nav>

      </div>
    );
  }
}

export default Header;
