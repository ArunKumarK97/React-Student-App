
import { logout } from "Context/actions";
import React from "react";
import { NavItem, Nav } from "react-bootstrap";
import { useAuthDispatch } from 'Context/Context';

function AdminNavbarLinks() {
  const dispatch = useAuthDispatch()
  const handleLogout = () => {
    logout(dispatch);
  };

  return (
    <div>
      <Nav>
        <NavItem eventKey={1} href="/admin/dashboard">
          <i className="fa fa-dashboard" />
          <p className="hidden-lg hidden-md">Dashboard</p>
        </NavItem>
        
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={3} onClick={handleLogout}>
          Log out
          </NavItem>
      </Nav>
    </div>
  );
}

export default AdminNavbarLinks;
