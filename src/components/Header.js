import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, Tooltip, OverlayTrigger} from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="sidebar">
          {/* <h3 className="logoName">Rapspiration</h3> */}
          <a href="/" target="_blank">
            <img src={"../img/LogoGrey.png"} className="logo"></img>
          </a>
          <div className="sidebarCenter">
            <i className="fa fa-plug twitter" aria-hidden="true"></i>
          </div>
            <div className="sidebarBottom">
              <i className="fa fa-twitter twitter" aria-hidden="true"></i>
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </div>
        </div>
        {/* <div id="top-spacer"></div> */}
      </div>
    );
  }
}

export default Header;
