import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, Tooltip, OverlayTrigger} from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <div >
        <div className="sidebar">
            {/* <a href="/" target="_blank"> */}
            <img src={"../img/logo.png"} className="logo"></img>
            {/* </a> */}
        </div>
        <div id="top-spacer"></div>
      </div>
    );
  }
}

export default Header;
