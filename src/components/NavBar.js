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
        <Nav.Link className="nav-link" href="/about">
          About
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="nav-link" href="/projects">
          Projects
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
