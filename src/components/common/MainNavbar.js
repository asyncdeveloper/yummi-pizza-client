import React, {Component} from "react";
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem} from "shards-react";

import routes from "../../routes";
import {Link} from "react-router-dom";

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
        const headerLinks = routes.map((item, idx) => {
            if(item.showInNav) {
                return (
                    <NavItem key={idx}>
                        <Link to={item.path} className="nav-link">
                            {item.alias}
                        </Link>
                    </NavItem>
                )
            }
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
