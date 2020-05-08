import React from 'react';
import {render} from 'enzyme';
import {CartPage} from "../components/CartPage";
import {BrowserRouter} from "react-router-dom";


describe('<CartPage />', () => {
    let wrapper;
    let props;

    beforeEach( () => {
        props = {
            cart: [
                { 'id' : '1', 'name': 'Test Menu', 'price': 200.10, 'description': 'Test Description', quantity: 3 },
                { 'id' : '5', 'name': 'Test Menu V', 'price': 400.25, 'description': 'Test Description V', quantity: 1 },
            ],
            inCart: [ 1, 5 ],
            increaseItemQuantity: id => {},
            reduceItemQuantity: id => {},
            removeItemFromCart: id => {}
        };
        wrapper = render(
            <BrowserRouter>
                <CartPage {...props} />
            </BrowserRouter>
            );
    });

    it('renders show cart items header text', () => {
        const headerText = wrapper.find('.header-text');

        expect(headerText).toHaveLength(1);
        expect(headerText.text()).toEqual('Cart Items');
    });

    it('renders show cart items total price text', () => {
        const totalPriceText = wrapper.find('.total-price-text');

        expect(totalPriceText).toHaveLength(1);
        expect(totalPriceText.text()).toEqual('Total: $1000.55');
    });
});

