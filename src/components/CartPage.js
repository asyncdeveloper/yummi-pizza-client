import React from "react";
import {Alert, Button, CardImg, Col, Container, ListGroup, ListGroupItem, ListGroupItemText, Row} from "shards-react";

import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {increaseItemQuantity, reduceItemQuantity, removeItemFromCart} from "../redux/cart/cart.actions";

export const CartPage = ({ cart, increaseItemQuantity, reduceItemQuantity, removeItemFromCart }) => {

    const total = cart.reduce(function(prev, cur) {
        return Number(parseFloat(prev) + parseFloat(cur.price * cur.quantity)).toFixed(2);
    }, 0);

    return (
        <Container fluid className="px-4">
            <Row className="mt-2">
                <Col>
                    <h3 className="header-text text-center">Cart Items</h3>
                </Col>
            </Row>

            <ListGroup >
                { cart.map( (item) => (
                        <Col key={item.id} lg={{ size: 8, offset: 2 }} className="pt-2 pb-2">
                            <ListGroupItem style={{ display: 'flex' }}>
                                <CardImg src="https://place-hold.it/300x200" style={{ float: 'left' }} />
                                <ListGroupItemText className="pl-2">
                                    <strong> Name: </strong> { item.name }
                                    <br /><br />
                                    <strong> Description: </strong> { item.description }
                                    <br /><br />
                                    <strong>Quantity:</strong>
                                    <Button size="sm" squared theme="light" className="ml-3 mr-3" onClick={ e => reduceItemQuantity(item.id) }>
                                        -
                                    </Button>
                                        <b> {item.quantity}</b>
                                    <Button size="sm" squared theme="dark" className="ml-3" onClick={ e => increaseItemQuantity(item.id) }>
                                        +
                                    </Button>
                                    <br /><br />
                                    <strong> Price: </strong> <b>${ Number(item.price * item.quantity).toFixed(2) }  </b>
                                    <br /><br />
                                    <Button size="sm" squared theme="danger" onClick={ e => removeItemFromCart(item.id) }>
                                        Remove
                                    </Button>
                                </ListGroupItemText>
                            </ListGroupItem>
                        </Col>
                ))}

                {
                    cart.length > 0
                        ? (
                            <Row>
                                <Col lg={{ size: 12 }} className="text-center">
                                    <h4 className="total-price-text">Total: ${total}</h4>
                                </Col>
                                <Col lg={{ size: 12 }} className="text-center mt-3">
                                    <Link to="/order">
                                        <Button outline pill size="sm" theme="success">
                                            Place Order
                                        </Button>
                                    </Link>
                                </Col>
                            </Row>
                        ) : (
                            <Col lg={{ size: 8, offset: 2 }} className="pt-2 pb-2">
                                <Alert theme="warning">Your cart is empty </Alert>
                            </Col>
                        )
                }
            </ListGroup>
        </Container>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart.items,
        inCart: state.cart.inCart
    };
};

const mapDispatchToProps = dispatch => {
    return {
        increaseItemQuantity: id => { dispatch(increaseItemQuantity(id)) },
        reduceItemQuantity: id => { dispatch(reduceItemQuantity(id)) },
        removeItemFromCart: id => { dispatch(removeItemFromCart(id)) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage)

