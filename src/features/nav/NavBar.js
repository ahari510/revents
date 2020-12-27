import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Menu, Container } from "semantic-ui-react";
import logo from "../../assets/logo.png";
import SignedOutMenu from "./SingedoutMenu";
import SignedInMenu from "./SingedInMenu";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { authenticated } = useSelector((state) => state.auth);

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} exact to="/" header>
          <img src={logo} alt="logo" style={{ marginRight: 15 }} />
          Re-vents
        </Menu.Item>
        <Menu.Item as={NavLink} to="/events" name="Event" />
        {authenticated && (
          <Menu.Item as={NavLink} to="/createevent">
            <Button
              // onClick={() => setFormOpen(true)}
              positive
              inverted
              content="create event"
            />
          </Menu.Item>
        )}
        {authenticated ? <SignedInMenu /> : <SignedOutMenu />}
      </Container>
    </Menu>
  );
};

export default NavBar;
