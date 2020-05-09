import React, {Component} from "react";
import {Button, Col, Container, Form, FormGroup, FormInput, ListGroup, ListGroupItem, Row} from "shards-react";
import {connect} from "react-redux";
import SpinnerButton from "./common/SpinnerButton";
import {placeOrder} from "../redux/order/order.action";
import CustomAlert from "./common/CustomAlert";

export class OrderPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: ''
        }
    }

    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    handleSubmit = async e => {
        e.preventDefault();

        this.props.placeOrder(this.state);
    };

    render() {
        const  isLoading = false;
        const { cart, errorMessage, successMessage } = this.props;

        const total = cart.reduce(function(prev, cur) {
            return Number(parseFloat(prev) + parseFloat(cur.price * cur.quantity)).toFixed(2);
        }, 0);

        return (
            <Container fluid className="px-4 pb-4 mt-3">
                <Row>
                    <CustomAlert
                        errorMessage={errorMessage}
                        successMessage={cart.length > 0 ? null : successMessage}
                    />
                </Row>
                {
                    cart.length > 0 ? (
                        <Row>
                            <Col lg={{size: 6, offset: 3}} >

                                <h4>Order Information</h4>

                                <Form onSubmit={this.handleSubmit}>
                                    <FormGroup>
                                        <label htmlFor="email">Name</label>
                                        <FormInput id="name" placeholder="John Doe" value={this.state.name}
                                                   onChange={this.handleChange} required={true} />
                                    </FormGroup>
                                    <FormGroup>
                                        <label htmlFor="address">Address</label>
                                        <FormInput id="address" placeholder="Lagos, Nigeria" value={this.state.address}
                                                   onChange={this.handleChange} required={true} />
                                    </FormGroup>
                                    Cart
                                    <ListGroup>
                                        {
                                            cart.map((item) => (
                                                <ListGroupItem key={item.id}> {item.name}</ListGroupItem>
                                            ))
                                        }
                                    </ListGroup>
                                    <FormGroup>
                                        <label htmlFor="total">Total</label>
                                        <FormInput id="total" value={'$'+total} disabled={true} />
                                    </FormGroup>
                                    <FormGroup className="mr-0">
                                        { isLoading
                                            ? (<SpinnerButton />)
                                            : (<Button pill theme="info" style={{float: 'right'}}> Checkout </Button> )
                                        }
                                    </FormGroup>
                                </Form>
                            </Col>
                        </Row>
                    ) : null
                }
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart.items,
        successMessage: state.order.successMessage,
        errorMessage: state.order.errorMessage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        placeOrder: (order) => { dispatch(placeOrder(order)) },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage)
