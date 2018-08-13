import React, { Component } from "react";
// import { Nav, Navbar, NavItem, NavDropdown, MenuItem, Tooltip, OverlayTrigger} from 'react-bootstrap';
import { Modal, Button } from "react-bootstrap";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  onClose = () => {
    console.log("onClose is hit");
    console.log("button state is", this.state);
    this.setState({ showModal: false });
  };

  onOpen = () => {
    this.setState({ showModal: true });
  };

  render() {
    const image = this.props.image;
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
                <h4>
                  Being born in the 90s, Hip-Hop has always been a huge part of
                  my identity growing up. As a rap enthusiast, I’ve always been
                  fascinated by how artists use rap as a vessel for public
                  sentiment, from praising the lavish to shedding light on the
                  impoverish. Naturally with all rap encompasses, especially
                  politically, rap has become a convenient scapegoat throughout
                  the years for violence and misfortune. To understand rap, it
                  is important to perceive rap as as reflection of reality and a
                  state of mind. Rapsmatter is dedicated to spreading the
                  positive vibes in rap. Spread the inspiration.
                </h4>
              </Modal.Body>
              <Modal.Footer>
                <div className="modal-credit">
                  <h4>Created by @BoyReads Instagram @Boytoy</h4>
                </div>
                <div className="nav-contain">
                  {/* <a href="https://www.facebook.com/rapsmatter/" target="_blank"><div className="fa fa-facebook btn btn-round"></div></a>
                  <a href="https://www.instagram.com/boytoy/"  target="_blank"><div className="fa fa-instagram btn btn-round"></div></a> */}
                </div>
                {/* <img src={"../img/LogoGrey.png"} className="modalLogo"></img> */}
                {/* <Button onClick={this.onClose}>Close</Button> */}
              </Modal.Footer>
            </Modal>
          </div>
          {/* <h1 className="logoName">Rapsmatter</h1> */}
          {/* <a href="/">
            <img src={"../img/LogoGrey.png"} className="logo"></img>
          </a> */}
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
        {/* <div className="col-md-1 col-sm-12">
           <div onClick={this.onClick}>
             <div className="img-polaroid">
               <div className="rapImage">
                <div>
                  <img src={image} className="img-fluid"/>
                </div>
               </div>
             </div>
           </div>
        </div> */}
        <div className="nav-contain">
          {/* <div className="fa fa-facebook btn btn-round"><a href="/"></a></div>
          <div className="fa fa-twitter btn btn-round"><a href="https://twitter.com/RxNeu" target="_blank"></a></div>
          <div className="fa fa-instagram btn btn-round"><a href=""  target="_blank"></a></div> */}
          <div className="fa fa-eye btn btn-round" onClick={this.onOpen}>
            <a href="#" />
          </div>

          {/* <div className="img-polaroid">
            <div onClick={this.onOpen}>
              <div className="rapImage">
                <div>
                  <img src={image} className="img-fluid"/>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Header;
