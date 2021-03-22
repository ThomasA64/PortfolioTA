import React from "react";
import Nav from "react-bootstrap/Nav";

export default function NavBar() {
  return (
    <Nav className="justify-content-center" activeKey="/home">
      <Nav.Item>
        <Nav.Link className="nav-link" href="/">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="nav-link" href="/bio">
          About
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="nav-link" href="https://github.com/ThomasA64">
          Projects
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
