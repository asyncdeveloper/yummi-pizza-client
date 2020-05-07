import React, {Component} from "react";
import {Col, Container, Row} from "shards-react";
import {PizzaCard} from "./PizzaCard";
import SpinnerButton from "./common/SpinnerButton";
import {connect} from "react-redux";
import {fetchMenu} from "../redux/home/home.actions";

export class HomePage extends Component {

    async componentDidMount() {
        this.props.fetchMenu();
    }

    render() {
        const { menu, isLoading } = this.props;

        return (
            <Container fluid className="px-4">
                <Row className="mt-2">
                    <Col>
                        <h3 className="header-text text-center">Choose Pizza From Menu</h3>
                    </Col>
                </Row>
                { isLoading ? <SpinnerButton />
                    : <Row className="mt-2" style={{ display: 'flex', flexWrap: 'wrap' }}>
                        { menu.map( (pizza) => (
                            <Col key={pizza.id} className="mt-5" style={{ display: 'flex', flexDirection: 'wrap' }}>
                                <PizzaCard {...pizza} />
                            </Col>
                        ))}
                    </Row>
                }
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        menu: state.home.menu,
        isLoading: state.home.isLoading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchMenu: () =>{ dispatch(fetchMenu()) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
