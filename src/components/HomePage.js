import React, {Component} from "react";
import {Col, Container, Row} from "shards-react";
import {PizzaCard} from "./PizzaCard";
import API from '../config/API';
import {GET_ALL_MENU} from "../config/apiUrls";
import SpinnerButton from "./common/SpinnerButton";


export default class HomePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            'menu': [],
            'isLoading' : true,
        }
    }

    async componentDidMount() {
        const response = await API.get(GET_ALL_MENU);
        const data = response.data.data;

        this.setState({ menu: data, isLoading: false });
    }

    render() {
        const menu = this.state.menu;
        const loading = this.state.isLoading;
        return (
            <Container fluid className="px-4">
                <Row className="mt-2">
                    <Col>
                        <h3 className="header-text text-center">Choose Pizza From Menu</h3>
                    </Col>
                </Row>
                {   loading ? <SpinnerButton />
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
