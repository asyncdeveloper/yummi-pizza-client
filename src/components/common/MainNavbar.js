import React, {Component} from "react";
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "shards-react";

import routes from "../../routes";

class MainNavbar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            collapseOpen: false
        };
    }

    toggleNavbar = () =>  {
        this.setState({
            collapseOpen: !this.state.collapseOpen
        });
    };

    render() {
        const { isLoggedIn } = this.props;
        const headerLinks = routes.map((item, idx) => {
            return (
                <NavItem key={idx}>
                    <NavLink href={item.path}>
                        {item.alias}
                    </NavLink>
                </NavItem>
            )
        });

        return (
            <Navbar type="dark" theme="primary" expand="md">
                <NavbarBrand href="/"> Yummi Pizza </NavbarBrand>

                <NavbarToggler onClick={this.toggleNavbar} />

                <Collapse open={this.state.collapseOpen} navbar>
                    <Nav navbar> { headerLinks } </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default MainNavbar;
