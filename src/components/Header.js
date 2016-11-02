import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, Tooltip, OverlayTrigger} from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="sidebar">
            {/* <a href="/" target="_blank">
            <img src={"../img/logo.png"} className="logo"></img>
            </a> */}
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
